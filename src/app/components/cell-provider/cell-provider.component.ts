import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { IProvider } from '../../modes/provider.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormHelperService } from '../../services/form-helper.service';
import { MatSnackBarHelperService } from '../../services/mat-snack-bar-helper.service';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { CountryCode, parsePhoneNumber } from 'libphonenumber-js/max';

@Component({
  selector: 'app-cell-provider',
  templateUrl: './cell-provider.component.html',
  styleUrls: ['./cell-provider.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellProviderComponent implements OnInit, OnChanges {
  @Input() provider: IProvider;
  @Input() readonly = true;
  @Input() loading: boolean;
  @Output() selectProvider = new EventEmitter<IProvider>();
  @Output() saveProvider = new EventEmitter<IProvider>();
  @Output() cancelEditProvider = new EventEmitter<null>();

  readonly phoneMask = ['+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/];
  readonly MOBILE_PATTERN = /^[+]7\s?[(]?\d\d\d[)]?\s?\d\d\d\s?\d\d\s?\d\d$/;
  readonly AMOUNT_PATTER = /^\d+([.,]\d{1,2})?$/;
  readonly numberMask = createNumberMask({
    prefix: '',
    suffix: ' Rub',
    thousandsSeparatorSymbol: ' ',
  });

  form = new FormGroup({
    id: new FormControl(null),
    name: new FormControl({value: '', disabled: true}, [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    balance: new FormControl({value: 0, disabled: true}),
    amount: new FormControl(null)
  });


  private initialized = false;

  constructor(private snackBar: MatSnackBarHelperService,
              private chr: ChangeDetectorRef) {
  }

  ngOnInit() {
    if (!this.readonly) {
      this.fillForm();
    }
    this.initialized = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.initialized) {
      if (changes.readonly || changes.provider) {
        if (!this.readonly) {
          this.fillForm();
        }
      }
      if (changes.loading) {
        this.onChangeLoading();
      }
    }
  }

  onCheckPhoneValue(value: string) {
    if (value.length === 0) {
      this.form.get('phone').setErrors({required: true});
    } else {
      if (!this.MOBILE_PATTERN.test(value)) {
        this.form.get('phone').setErrors({pattern: true});
      }
    }
  }

  onCheckAmountValue(value: string) {
    if (value.length === 0) {
      this.form.get('amount').setErrors({required: true});
    } else {
      const amount = value ? parseFloat(value.replace(',', '.').replace(/\s|[_-]/g, '')) : 0;
      if (!this.AMOUNT_PATTER.test('' + amount)) {
        this.form.get('amount').setErrors({pattern: true});
      } else {
        if (amount < 1) {
          this.form.get('amount').setErrors({min: true});
        }
        if (amount > 1000) {
          this.form.get('amount').setErrors({max: true});
        }
      }
    }
  }

  onSave() {
    if (this.loading || this.readonly) {
      return;
    }
    if (this.form.valid) {
      const data = this.form.getRawValue();
      const amount = data.amount ? parseFloat(data.amount.replace(',', '.').replace(/\s|[_-]/g, '')) : 0;
      const p = parsePhoneNumber(data.phone, 'RU');

      this.saveProvider.emit({...this.provider, phone: p.number + '', balance: data.balance + amount});
    } else {
      this.form.markAsTouched();
      this.form.markAsDirty();
      this.snackBar.showMessage('Form is invalid. Please check field phone and amount');
    }
  }

  onCancel() {
    if (this.loading) {
      return;
    }
    this.cancelEditProvider.emit();
  }

  private fillForm() {
    if (!!this.provider) {
      FormHelperService.fillForm(this.form, this.provider);
    } else {
      this.form.reset();
    }
    this.form.markAsPristine();
    this.form.markAsUntouched();
  }

  private onChangeLoading() {
    if (this.loading) {
      this.form.disable();
    } else {
      this.form.enable();
      this.form.get('name').disable();
      this.form.get('balance').disable();
    }
  }
}
