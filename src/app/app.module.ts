import { NgModule } from "@angular/core";
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppValidationMessageComponent } from "./app-validation-message/app-validation-message.component";
import { AppSelectWrapperModule } from "./shared/wrappers/select-wrapper/app-select-wrapper/app-select-wrapper.module";
import { AppInputWrapperModule } from "./shared/wrappers/input-wrapper/app-input-wrapper/app-input-wrapper.module";
@NgModule({
  declarations: [AppComponent, AppValidationMessageComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule,AppSelectWrapperModule,AppInputWrapperModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
