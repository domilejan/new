import { NgModule } from '@angular/core';
import { ClientComponent } from './client.component';
import { MidgardSharedTranslationModule } from '../../../../midgard/modules/translation/translation.shared.module';
import { ClientRoutingModule } from './client-routing.module';

@NgModule({
  imports: [
    MidgardSharedTranslationModule,
    ClientRoutingModule,
  ],
  declarations: [ClientComponent],
  exports: [ClientComponent]
})
export class ClientModule { }
