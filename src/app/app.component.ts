import { Component } from "@angular/core";
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { languages } from "./shared/constants/form-data-constants";
import { userEmailPattern, userPhonePattern } from "./shared/constants/patterns";
import { userFirstNameValidator } from "./shared/validators/first-name-validator";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  public languages: { name: string; disabled: boolean }[] = languages;
  public selectedOptions: string[] = [this.languages[0].name];
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
      userLanguages: this.formBuilder.array([this.formBuilder.control(this.selectedOptions[0])]),
    });
    this.userPhonesFormArray = this.getFormsControls("userPhones");
    this.userLanguagesFormArray = this.getFormsControls("userLanguages");
  }

  private getFormsControls(key: string): AbstractControl<any, any>[] {
    return (this.myForm.controls[key] as FormArray)["controls"];
  }
  public addLanguage() {
    (<FormArray>this.myForm.controls["userLanguages"]).push(new FormControl(""));
  }
  public addPhone() {
    (<FormArray>this.myForm.controls["userPhones"]).push(new FormControl("", Validators.pattern(userPhonePattern)));
  }

  public submit() {
    if (!this.myForm.valid) {
      this.myForm.markAllAsTouched();
    } else {
      console.log("submit");
    }
  }
}
