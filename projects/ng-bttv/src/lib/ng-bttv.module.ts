import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgBttvService } from './ng-bttv.service';

@NgModule({
    imports: [CommonModule],
    providers: [NgBttvService],
})
export class NgBttvModule {}
