import { Injectable } from '@angular/core';

export enum UtcToLocalTimeFormat {
  DateTime = 'datetime', // 01.12.2023 12:00
  Date = 'date', // 01.12.2023
  Time = 'time', // 12:00
}

@Injectable({
  providedIn: 'root',
})
export class UtcToLocalTimeService {
  constructor() {}

  public convertUtcToLocalTime(
    utcDate: Date,
    format: UtcToLocalTimeFormat = UtcToLocalTimeFormat.DateTime
  ): string {
    // Version 1 using Norwegian as language
    const browserLanguage = 'no-NO';

    const date = new Date(utcDate).toLocaleDateString(browserLanguage, {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    });
    const time = new Date(utcDate).toLocaleTimeString(browserLanguage, {
      hour: '2-digit',
      minute: '2-digit',
    });

    if (format === UtcToLocalTimeFormat.Date) {
      return `${date}`;
    } else if (format === UtcToLocalTimeFormat.Time) {
      return `${time}`;
    } else {
      return `${date} ${time}`;
    }
  }

  public convertLocalTimeToUtc(localDate: Date): string {
    const date = new Date(localDate);
    return date.toUTCString();
  }
}
