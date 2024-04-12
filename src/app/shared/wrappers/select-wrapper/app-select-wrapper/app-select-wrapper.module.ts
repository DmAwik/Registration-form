import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppSelectWrapperComponent } from "./app-select-wrapper.component";

@NgModule({
  declarations: [AppSelectWrapperComponent],
  imports: [ReactiveFormsModule, FormsModule, BrowserModule],
  exports: [AppSelectWrapperComponent],
})
export class AppSelectWrapperModule {}
