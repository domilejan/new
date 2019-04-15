import { NgModule } from '@angular/core';
import { MidgardSharedTranslationModule } from '@midgard/modules/translation/translation.shared.module';
import { BlueprintClientRoutingModule } from './blueprint-client-routing.module';
import { BlueprintClientComponent } from './blueprint-client.component';

@NgModule({
  imports: [
    MidgardSharedTranslationModule,
    BlueprintClientRoutingModule,
  ],
  declarations: [BlueprintClientComponent],
  exports: [BlueprintClientComponent]
})
export class BlueprintClientModule { }
