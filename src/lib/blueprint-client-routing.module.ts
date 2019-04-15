import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../../../../midgard/modules/oauth/auth.guard';
import { BlueprintClientComponent} from './blueprint-client.component';

const clientRoutes: Routes = [
  { path: '', component: BlueprintClientComponent, canActivate: [AuthGuard]},
  ];

@NgModule({
  imports: [RouterModule.forChild(clientRoutes)],
  exports: [RouterModule]
})
export class BlueprintClientRoutingModule {}
