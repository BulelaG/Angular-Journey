import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  
  constructor(private heroService: HeroService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(hero_name: string, real_name: string, age: string, super_powers: string, power_origins:string, weakness:string, nationality:string ): void {
    const HeroData = {
      real_name,
      hero_name,
      age,
      super_powers,
      power_origins,
      weakness,
      nationality

    }   
    
    hero_name = hero_name.trim();
    if (!hero_name) { return; }
    this.heroService.addHero(HeroData)
      .subscribe(hero => {
        this.heroes.push(hero);
        console.log(hero)
      });

     
  }
  delete( ): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.heroService.deleteHero(id).subscribe(hero => {
      console.log(hero);
  });



 }
  
