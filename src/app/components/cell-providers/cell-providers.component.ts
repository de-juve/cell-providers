import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProvider } from '../../modes/provider.model';

@Component({
  selector: 'app-cell-providers',
  templateUrl: './cell-providers.component.html',
  styleUrls: ['./cell-providers.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellProvidersComponent implements OnInit {
  @Input() providers: IProvider[];
  @Output() selectProvider = new EventEmitter<IProvider>();

  constructor() { }

  ngOnInit() {
  }

  trackById(index: number, item: IProvider) {
    return item.id;
  }

}
