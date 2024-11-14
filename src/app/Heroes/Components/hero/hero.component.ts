import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
public Name: string='iroman';
public age:number = 45;

get Capitalizedname():string {

  return this.Name.toUpperCase();
}

GetHeroDescription():string {

  return ` ${this.Name} - ${this.age} `;
}


changeHero():void {

  this.Name='Spiderman';

}

  changeAge(edad:number ): number {

  return this.age=edad;

  }

  resetform():void{
  this.Name ='iroman';
  this.age= 45;

  }
}
