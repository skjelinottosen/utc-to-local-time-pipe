import { NgModule } from '@angular/core';
import { UtcToLocalTimePipe } from './pipes/utc-to-local-time.pipe';

@NgModule({
  declarations: [UtcToLocalTimePipe],
  imports: [],
  exports: [UtcToLocalTimePipe],
})
export class SharedModule {}
