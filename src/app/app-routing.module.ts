import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomPreloadingStrategyService} from './custom-preloading-strategy.service';
import {NetworkAwarePreloadingStrategyService} from './network-aware-preloading-strategy.service';

const routes: Routes = [
  {path: 'about', data: {preload: true, loadAfterSeconds: 5}, loadChildren: () => import('./about/about.module').then(m => m.AboutModule)},
  {path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
  {path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: NetworkAwarePreloadingStrategyService})],
  // imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingStrategyService})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
