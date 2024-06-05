import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeVowels'
})
export class ChangeVowelsPipe implements PipeTransform {
  private vowels: string[] = ['a', 'e', 'i', 'o', 'u']
  transform(value: string | undefined,): string {
    let textRet: string = "";
    if(value !== undefined) {
      for (let i = 0; i < value.length; i++) {
        if (this.vowels.includes(value[i].toLowerCase())) {
          textRet += this.vowels.indexOf(value[i].toLowerCase());
        }
        else {
          textRet += value[i];
        }
      }
    }
    return textRet;
  }

}
