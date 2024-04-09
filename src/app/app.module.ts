import { NgModule } from "@angular/core";
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppValidationMessageComponent } from "./app-validation-message/app-validation-message.component";
import { AppInputWrapperComponent } from "./shared/wrappers/input-wrapper/app-input-wrapper/app-input-wrapper.component";
import { AppSelectWrapperComponent } from "./shared/wrappers/select-wrapper/app-select-wrapper/app-select-wrapper.component";
@NgModule({
  declarations: [AppComponent, AppValidationMessageComponent, AppInputWrapperComponent, AppSelectWrapperComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
