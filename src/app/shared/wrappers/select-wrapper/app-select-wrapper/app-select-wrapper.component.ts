import { Component, Input, forwardRef } from "@angular/core";
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgControl } from "@angular/forms";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: "app-select-wrapper",
  templateUrl: "./app-select-wrapper.component.html",
  styleUrls: ["./app-select-wrapper.component.scss"],
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
  public control: FormControl;
  public ngControl: NgControl;
  private prevSelectedOption: string;

  public onChange: any = () => {};
  public onTouched: any = () => {};
  constructor() {}

  public ngOnInit(): void {
    this.control = new FormControl();
    this.control.valueChanges.pipe(untilDestroyed(this)).subscribe(value => {
      this.isOptionDisabled(value, this.prevSelectedOption);
      this.prevSelectedOption = value;
      this.onChange(value);
    });
  }
  public isOptionDisabled(selectedOption: string, prevselectedOption: string) {
    const indexOfSelectedOption = this.options.findIndex(option => option.name === selectedOption);
    if (indexOfSelectedOption !== -1) {
      this.options[indexOfSelectedOption].disabled = true;
    }
    const indexOfPrevSelectedOption = this.options.findIndex(option => option.name === prevselectedOption);
    if (indexOfPrevSelectedOption !== -1) {
      this.options[indexOfPrevSelectedOption].disabled = false;
    }
  }
  public writeValue(obj: any): void {
    this.control.setValue(obj);
  }
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {}
}
