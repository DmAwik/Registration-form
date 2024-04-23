import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppInputWrapperComponent } from "./app-input-wrapper.component";
import { TranslateErrorModule } from "../../../pipes/Errors/translate-error-pipe.module";

@NgModule({
  declarations: [AppInputWrapperComponent],
  imports: [ReactiveFormsModule, FormsModule, BrowserModule, TranslateErrorModule],
  exports: [AppInputWrapperComponent],
})
export class AppInputWrapperModule {}
