import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { TranslateErrorPipe } from "./translate-error-pipe";

@NgModule({
  declarations: [TranslateErrorPipe],
  imports: [ReactiveFormsModule],
  exports: [TranslateErrorPipe],
})
export class TranslateErrorModule {}
