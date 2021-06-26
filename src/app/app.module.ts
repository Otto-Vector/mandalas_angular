import { BrowserModule } from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TitleComponent } from "./title/title.component";
import { PalitraButtonComponent } from './palitra-button/palitra-button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ButtonsPanelComponent } from './buttons-panel/buttons-panel.component';
import { HelpDescriptorsComponent } from './help-descriptors/help-descriptors.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    PalitraButtonComponent,
    CheckboxComponent,
    ButtonsPanelComponent,
    HelpDescriptorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
