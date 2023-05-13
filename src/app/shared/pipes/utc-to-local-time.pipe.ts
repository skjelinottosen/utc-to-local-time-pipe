import { Pipe, PipeTransform } from '@angular/core';
import { UtcToLocalTimeService } from '../services/utc-to-local-time.service';

@Pipe({
  name: 'utcToLocalTime',
})
export class UtcToLocalTimePipe implements PipeTransform {
  constructor(private utcToLocalTimeService: UtcToLocalTimeService) {}

  transform(date: Date, args?: any): string {
    return this.utcToLocalTimeService.convertUtcToLocalTime(date, args);
  }
}
