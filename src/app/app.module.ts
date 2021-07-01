
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

import { DigitOnlyModule } from "@uiowa/digit-only";

import { AppComponent } from './app.component';
import { TitleComponent } from "./title/title.component";
import { PalitraButtonComponent } from './palitra-button/palitra-button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ButtonsPanelComponent } from './buttons-panel/buttons-panel.component';
import { HelpDescriptorsComponent } from './help-descriptors/help-descriptors.component';
import { BottomPanelComponent } from './bottom-panel/bottom-panel.component';



@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    PalitraButtonComponent,
    CheckboxComponent,
    ButtonsPanelComponent,
    HelpDescriptorsComponent,
    BottomPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DigitOnlyModule,
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
