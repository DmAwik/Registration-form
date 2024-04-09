import { Component, Input, forwardRef } from "@angular/core";
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from "@angular/forms";
import { userFirstNameValidator } from "../../../validators/first-name-validator";

@Component({
  selector: "app-input-wrapper",
  templateUrl: "./app-input-wrapper.component.html",
  styleUrl: "./app-input-wrapper.component.scss",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppInputWrapperComponent),
      multi: true,
    },
  ],
})
export class AppInputWrapperComponent implements ControlValueAccessor {
  @Input() value: string;
  showError: boolean = false;
  control: FormControl;
  onChange: any = () => {};
  onTouched: any = () => {};

  constructor() {}
  ngOnInit() {
    this.control = new FormControl("");
    this.control.setValidators([Validators.required]);
  }
  writeValue(value: any): void {
    this.value = value;
    this.control.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}

  public updateValue(event: any): void {
    this.control.setValue(event.target.value);
    this.showError = this.validateInput();
    this.onChange(this.control.value);
  }
  private validateInput(): boolean {
    console.log(this.control.invalid);
    console.log(this.control.touched);

    return this.control.invalid && this.control.touched;
  }
}
