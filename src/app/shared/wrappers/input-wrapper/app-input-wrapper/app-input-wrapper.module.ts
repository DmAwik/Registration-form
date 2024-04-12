import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppInputWrapperComponent } from "./app-input-wrapper.component";

@NgModule({
  declarations: [AppInputWrapperComponent],
  imports: [ReactiveFormsModule, FormsModule, BrowserModule],
  exports: [AppInputWrapperComponent],
})
export class AppInputWrapperModule {}
