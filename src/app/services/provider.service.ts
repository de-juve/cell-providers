import { Injectable } from '@angular/core';
import { IProvider } from '../modes/provider.model';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  public provider: Subject<IProvider> = new BehaviorSubject<IProvider>(null);

  private providers: IProvider[] = [
    {id: 1, name: 'MTS', phone: '+79904328455', balance: 120},
    {id: 2, name: 'Beeline', phone: '', balance: null},
    {id: 3, name: 'Megafon', phone: '', balance: 0},
    {id: 4, name: 'Tele2', phone: '', balance: 0},
    {id: 5, name: 'Motiv', phone: '', balance: 0},
    {id: 6, name: 'Tinkoff', phone: '+79000000001', balance: 40.60},
    {id: 7, name: 'SberMobile', phone: '', balance: 0}
  ];

  constructor() { }

  public selectProvider(provider: IProvider): void {
    this.provider.next(provider);
  }

  getProviders() {
    return this.providers;
  }

  saveProvider(provider: IProvider) {
    if (!provider || !provider.id) {
      return;
    }
    const success = Math.random() >= 0.5;
    return of(provider)
      .pipe(
        delay(2000),
        map(pr => {
          if (success) {
            this.providers = this.providers.map(p => {
              if (p.id === pr.id) {
                return {...p, ...pr};
              }
              return {...p};
            });
            return {error: false, items: this.providers};
          } else {
            return {error: true};
          }
        }),
        catchError(err => {
          return of({error: true});
        })
      );
  }
}
