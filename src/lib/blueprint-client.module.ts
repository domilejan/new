import { NgModule } from '@angular/core';
import { BlueprintClientRoutingModule } from './blueprint-client-routing.module';
import { BlueprintClientComponent } from './blueprint-client.component';

@NgModule({
  imports: [
    BlueprintClientRoutingModule,
  ],
  declarations: [BlueprintClientComponent],
  exports: [BlueprintClientComponent]
})
export class BlueprintClientModule { }
