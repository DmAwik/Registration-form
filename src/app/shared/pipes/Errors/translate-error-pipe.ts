import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "getError",
})
export class TranslateErrorPipe implements PipeTransform {
  private errorTranslations: { [key: string]: string } = {
    required: "Обязательное поле",
    minlength: "Слишком короткое значение",
    userNameTrimValidator: "Некорректные данные",
    pattern: "Недопустимый формат",
  };
  constructor() {}

  transform(value: any): string {
    const keys = Object.keys(value);
    return this.getTranslation(keys[0]);
  }

  private getTranslation(errorName: string): string {
    return this.errorTranslations[errorName] || errorName;
  }
}
