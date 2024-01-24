import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PutComponent } from '../put/put.component';

const routes: Routes = [
  { path: '', component: PutComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  exports:[RouterModule]
})
export class LazyFeatureModule { }
