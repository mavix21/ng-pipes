import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Configuración del locale de la app
import localeEsPE from '@angular/common/locales/es-PE';
import localeFrCA from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsPE);
registerLocaleData(localeFrCA);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [
    provideClientHydration(),
    { provide: 'LOCALE_ID', useValue: 'es-PE' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
