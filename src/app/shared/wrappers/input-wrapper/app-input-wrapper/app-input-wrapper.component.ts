import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector, Input, forwardRef } from "@angular/core";
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgControl, ValidationErrors } from "@angular/forms";
import { untilDestroyed, UntilDestroy } from "@ngneat/until-destroy";
import { startWith } from "rxjs";

@UntilDestroy()
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppInputWrapperComponent implements ControlValueAccessor {
  @Input() value: string;
  public control: FormControl;
  public ngControl: NgControl;
  public touched = false;
  public currentErrors: null | ValidationErrors | undefined = null;
  public onChange: any = () => {};
  public onTouched: any = () => {};

  constructor(private injector: Injector, private cdr: ChangeDetectorRef) {}

  public ngAfterContentInit(): void {
    //получаем ссылку на ngcontrol
    //NgControl - это абстрактный класс, который предоставляет интерфейс для доступа к FormControl,
    // связанному с элементом управления.
    this.ngControl = this.injector.get(NgControl);
    this.ngControl?.statusChanges.pipe(startWith(this.ngControl?.status), untilDestroyed(this)).subscribe(() => {
      this.currentErrors = this.ngControl?.control?.errors;

      this.cdr.markForCheck();
    });
  }
  public ngOnInit(): void {
    this.control = new FormControl("");
    this.control.valueChanges.pipe(untilDestroyed(this)).subscribe(value => {
      this.onChange(value);
    });
  }
  public writeValue(value: any): void {
    this.control.setValue(value);
  }
  public ngDoCheck(): void {
    this.checkTouchedStatus();
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  public checkTouchedStatus(): void {
    this.touched = Boolean(this.ngControl?.control?.touched);
    this.cdr.markForCheck();
  }
  public onBlur(): void {
    this.onTouched();
  }
  public setDisabledState?(isDisabled: boolean): void {}
}
