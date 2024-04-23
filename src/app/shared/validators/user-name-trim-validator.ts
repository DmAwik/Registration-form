import { FormControl } from "@angular/forms";

export function userNameTrimValidator(control: FormControl): { [s: string]: boolean } | null {
  if (control.value.trim() === "") {
    return { userNameTrimValidator: true };
  }
  return null;
}
