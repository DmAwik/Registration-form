import { Component } from "@angular/core";
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { languages, selectedOptions } from "./shared/constants/form-data-constants";
import { userEmailPattern, userPhonePattern } from "./shared/constants/patterns";
import { userFirstNameValidator } from "./shared/validators/first-name-validator";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  public languages: { name: string; disabled: boolean }[] = languages;
  public selectedOptions: string[] = selectedOptions;
  public userPhonesFormArray: AbstractControl<any, any>[];
  public userLanguagesFormArray: AbstractControl<any, any>[];
  public myForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      userFirstName: ["", [Validators.required, userFirstNameValidator]],
      userLastName: ["", Validators.required],
      userEmail: ["", [Validators.required, Validators.pattern(userEmailPattern)]],
      userLogin: ["", Validators.required],
      userPassword: ["", Validators.required],
      userPhones: this.formBuilder.array([this.formBuilder.control("", Validators.pattern(userPhonePattern))]),
      userLanguages: this.formBuilder.array([this.formBuilder.control("")]),
    });
    this.userPhonesFormArray = this.getFormsControls("userPhones");
    this.userLanguagesFormArray = this.getFormsControls("userLanguages");
  }
  public isOptionDisabled() {
    this.languages = this.languages.map(element1 => {
      const disabled = this.selectedOptions.some(element2 => element2 === element1.name);
      return { ...element1, disabled };
    });
  }

  private getFormsControls(key: string): AbstractControl<any, any>[] {
    console.log(this.myForm.controls[key]);

    return (this.myForm.controls[key] as FormArray)["controls"];
  }
  public addLanguage() {
    console.log("lang");
    (<FormArray>this.myForm.controls["userLanguages"]).push(new FormControl(""));
  }
  public addPhone() {
    console.log("phone");

    (<FormArray>this.myForm.controls["userPhones"]).push(new FormControl("", Validators.pattern(userPhonePattern)));
  }

  public submit() {
    console.log(this.myForm);
console.log(this.myForm);

    if (!this.myForm.valid) {
      this.myForm.markAllAsTouched();
    } else {
      console.log("submit");
    }
  }
}
