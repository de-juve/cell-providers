import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IProvider } from '../../modes/provider.model';
import { Router } from '@angular/router';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit {
  providers: IProvider[] = [];

  constructor(private router: Router,
              private providerService: ProviderService) { }

  ngOnInit() {
    this.providers = this.providerService.getProviders();
  }

  onSelectProvider(provider: IProvider) {
    this.providerService.selectProvider(provider);
    this.router.navigateByUrl('/refill');
  }
}
