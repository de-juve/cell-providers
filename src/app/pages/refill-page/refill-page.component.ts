import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ProviderService } from '../../services/provider.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { IProvider } from '../../modes/provider.model';
import { Router } from '@angular/router';
import { MatSnackBarHelperService } from '../../services/mat-snack-bar-helper.service';

@Component({
  selector: 'app-refill-page',
  templateUrl: './refill-page.component.html',
  styleUrls: ['./refill-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RefillPageComponent implements OnInit, OnDestroy {
  provider: IProvider;
  loading = false;
  message: string = null;

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private providerService: ProviderService,
              private router: Router,
              private snackBar: MatSnackBarHelperService,
              private chr: ChangeDetectorRef) { }

  ngOnInit() {
    this.providerService.provider.pipe(
      takeUntil(this.ngUnsubscribe)
    )
      .subscribe((provider: IProvider) => {
        this.provider = provider;
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(null);
    this.ngUnsubscribe.complete();
  }

  onSaveProvider(provider: IProvider) {
    this.loading = true;
    this.message = null;
    this.providerService
      .saveProvider(provider)
      .toPromise()
      .then(
        res => {
          this.message = res.error ? 'Server error! Please try later' : 'Success!';
          if (!res.error) {
            setTimeout(() =>  this.router.navigateByUrl('/'), 1000);
          }
        })
      .catch(err => {
        this.message = 'Something went wrong! Please contact us';
      })
      .finally(() => {
        this.loading = false;
        this.snackBar.showMessage(this.message);
        this.chr.markForCheck();
      })
    ;
  }

  onReturn() {
    this.providerService.selectProvider(null);
    this.router.navigateByUrl('/');
  }
}
