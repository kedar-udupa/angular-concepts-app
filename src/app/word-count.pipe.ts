import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordCount'
})
export class WordCountPipe implements PipeTransform {

  transform(inputdata: number, controller: number): any {
    return inputdata * controller;
  }

}
