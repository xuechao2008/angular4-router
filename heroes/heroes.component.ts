import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import { HeroService } from '../hero.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers:[HeroService]
})
export class HeroesComponent implements OnInit {

  heroes:Hero[];
  selectedHero:Hero;

  constructor(
    private heroservice:HeroService,
    private router:Router
    ) { }

  getHeroes():void{
    this.heroservice.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero:Hero):void{

    this.selectedHero = hero;
  }

  gotoDetail():void{
    this.router.navigate(['/detail',this.selectedHero.id])
  }

}
