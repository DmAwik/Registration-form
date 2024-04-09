import { Component, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-validation-message',
  templateUrl: './app-validation-message.component.html',
  styleUrls: ['./app-validation-message.component.css'],
})
export class AppValidationMessageComponent {
  @Input() controlName: string | undefined;
  @Input() form: FormGroup | undefined;

  isInvalidAndTouched(): boolean {
    const control = this.form!.controls[this.controlName!];
    return control.invalid && control.touched;
  }
}
