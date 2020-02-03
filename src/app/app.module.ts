import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { PhonePipe } from './pipes/phone.pipe';
import { CellProviderComponent } from './components/cell-provider/cell-provider.component';
import { CellProvidersComponent } from './components/cell-providers/cell-providers.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { RefillPageComponent } from './pages/refill-page/refill-page.component';
import { AppRoutingModule } from './app-routing.component';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatProgressBarModule, MatSnackBarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    CellProvidersComponent,
    CellProviderComponent,
    PhonePipe,
    MainPageComponent,
    RefillPageComponent
  ],
  imports: [
    // Angular
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    // App Routing
    AppRoutingModule,

    // Angular Material
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,

    // Mask Inputs
    TextMaskModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
