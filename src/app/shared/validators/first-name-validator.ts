import { FormControl } from "@angular/forms";

export function userFirstNameValidator(control: FormControl): { [s: string]: boolean } | null {
  console.log("customValid");
  if (control.value.trim() === "") {
    return { userFirstName: true };
  }
  return null;
}
