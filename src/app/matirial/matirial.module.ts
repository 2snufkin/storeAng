import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';


const myMatirial =
  [
    MatTabsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,

  ];

@NgModule({

  imports: [myMatirial],
  exports: [myMatirial],

})

export class MatirialModule {
}
