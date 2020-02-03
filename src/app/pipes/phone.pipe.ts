import { Pipe, PipeTransform } from '@angular/core';
import { parsePhoneNumber, CountryCode } from 'libphonenumber-js/min';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string, locale: string = 'RU'): any {
    try {
      const phoneNumber = parsePhoneNumber(value + '', (locale.toUpperCase()) as CountryCode);
      return phoneNumber.formatInternational();
    } catch (error) {
      return value;
    }
  }

}
