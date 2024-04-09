import { Component, Input, OnInit, forwardRef } from "@angular/core";
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "app-select-wrapper",
  templateUrl: "./app-select-wrapper.component.html",
  styleUrls: ["./app-select-wrapper.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppSelectWrapperComponent),
      multi: true,
    },
  ],
})
export class AppSelectWrapperComponent implements ControlValueAccessor {
  @Input() options: any[];
  @Input() selectedOptions: any[];
  selectedOption: any;

  constructor() {}

  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(obj: any): void {
    this.selectedOption = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}

  onOptionChange(event: any) {
    const option = event.value;
    this.selectedOption = option;
    this.onChange(this.selectedOption);
    this.onTouch();
  }
}
