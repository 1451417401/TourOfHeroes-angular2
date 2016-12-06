import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import '../../../public/css/styles.css';
import { Hero } from '../../Constant/hero';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit{
    title="Tour of Heroes";
    heroes: Hero[]; 
    selectedHero: Hero;
    constructor(private heroService: HeroService,private router: Router){}
    onSelect(hero: Hero):void{
        this.selectedHero=hero;
    }
    getHeroes(): void {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit():void{
        this.getHeroes();
    }
    gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedHero.id]);
    }

}
