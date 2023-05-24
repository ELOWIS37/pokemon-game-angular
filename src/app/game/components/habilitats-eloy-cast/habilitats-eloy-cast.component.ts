import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PokemonService} from "../../services/pokemon.service";
import {PlayerService} from "../../services/player.service";


@Component({
  selector: 'app-habilitats-eloy-cast',
  templateUrl: './habilitats-eloy-cast.component.html',
  styleUrls: ['./habilitats-eloy-cast.component.css']
})
export class HabilitatsEloyCastComponent implements OnInit {
  pokemonName: string = '';
  pokemonAbilities: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pokemonName = params['pokemonName'];
      this.getPokemonAbilities();
    });
  }

  getPokemonAbilities() {
    this.pokemonService.getPokemon(this.pokemonName).subscribe(
      (pokemon) => {
        this.pokemonAbilities = pokemon.abilities.map((ability: any) => {
          return {
            name: ability.ability.name,
            description: ability.ability.effect_entries
          };
        });
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }


}
