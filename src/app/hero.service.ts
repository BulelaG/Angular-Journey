import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class HeroService {
  
  private heroesUrl = 'http://localhost:3333/v1/heros/'; //    URL to web api


  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // const heroes = of(HEROES);
    return this.http.get<Hero[]>(this.heroesUrl)
      //  .pipe(
      //   catchError(this.handleError<Hero[]>('getHeroes', []))
      //  )

    this.messageService.add('HeroService: fetched heroes');
   }

  // getHero(id: number): Observable<Hero> {
  //   // For now, assume that a hero with the specified `id` always exists.
  //   // Error handling will be added in the next step of the tutorial.
  //   const hero = HEROES.find(h => h.id === id)!;
  //   this.messageService.add(`HeroService: fetched hero id=${id}`);
  //   return of(hero);
  // }
}