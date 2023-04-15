import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadingDemoComponent } from './lazy-loading-demo/lazy-loading-demo.component';

const routes: Routes = [
  {
    path: 'lazy2',
    component: LazyLoadingDemoComponent,
    children: [
      {
        path: 'groups',
        loadChildren: () => import('./lazy2/lazy2.component').then(m => m.Lazy2Component)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
