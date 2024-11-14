import { CommonModule } from "@angular/common";
import { HeroComponent } from "./Components/hero/hero.component";
import { ListComponent } from "./Components/list/list.component";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroComponent,
    ListComponent
  ]

})
export class HeroModule{

}
