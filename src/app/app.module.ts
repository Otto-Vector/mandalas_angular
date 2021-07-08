
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

import { DigitOnlyModule } from "@uiowa/digit-only";

import { AppComponent } from './app.component';

import { TitlePanelComponent } from './ui/title-panel/title-panel.component';
import { ButtonsPanelComponent } from './ui/buttons-panel/buttons-panel.component';
import { PalitraButtonComponent } from './ui/buttons-panel/palitra-button/palitra-button.component';
import { CheckboxComponent } from './ui/buttons-panel/checkbox/checkbox.component';
import { HelpDescriptorsComponent } from './ui/buttons-panel/help-descriptors/help-descriptors.component';
import { BottomPanelComponent } from './ui/bottom-panel/bottom-panel.component';

import { SceneComponent } from './scene/scene.component';
import { UiComponent } from './ui/ui.component';




@NgModule({
  declarations: [
    AppComponent,
    TitlePanelComponent,
    ButtonsPanelComponent,
    PalitraButtonComponent,
    CheckboxComponent,
    HelpDescriptorsComponent,
    BottomPanelComponent,
    UiComponent,
    SceneComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    DigitOnlyModule,
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule {

}
