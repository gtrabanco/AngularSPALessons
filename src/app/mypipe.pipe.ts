import { Pipe, PipeTransform } from '@angular/core';
import { SharingModule } from './sharing/sharing.module';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    return 'Piped: ' + value + (args? args.length:'');
  }

}
