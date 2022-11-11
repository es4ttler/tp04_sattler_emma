import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComposantHeaderComponent } from './composant-header/composant-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComposantFormComponent } from './composant-form/composant-form.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {MatSelectModule} from '@angular/material/select'
import {MatCardModule} from '@angular/material/card'; 
import { ComposantFooterComponent } from './composant-footer/composant-footer.component';
import { ComposantRecapComponent } from './composant-recap/composant-recap.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerifyNumberDirective } from '../directives/verify-number/verify-number.directive';
import { VerifyKeypressDirective } from '../directives/verify-keyPress/verify-keypress.directive';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ComposantCatalogComponent } from './composant-catalog/composant-catalog.component';
import { ComposantSearchbarComponent } from './composant-searchbar/composant-searchbar.component';
import {MatDividerModule} from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ComposantHeaderComponent,
    ComposantFormComponent,
    ComposantFooterComponent,
    ComposantRecapComponent,
    VerifyNumberDirective,
    VerifyKeypressDirective,
    PhoneFormatPipe,
    ComposantCatalogComponent,
    ComposantSearchbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDividerModule,
    AppRoutingModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
