import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Composant1Component } from './composant1/composant1.component';
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
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Composant1Component,
    ComposantHeaderComponent,
    ComposantFormComponent,
    ComposantFooterComponent,
    ComposantRecapComponent,
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
    FormsModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
