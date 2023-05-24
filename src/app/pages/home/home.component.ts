import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../../game/services/pokemon.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemonInput: string = '';
  pokemonImage: string = '';

  constructor(private pokemonService: PokemonService) { }

  onSubmit() {
    this.pokemonService.getPokemonDetalls(this.pokemonInput)
      .then((pokemon: any) => {
        const attack = pokemon?.stats.find((stat: any) => stat.stat.name === 'attack')?.base_stat;
        if (attack && attack >= 50) {
          console.log('El Pokémon te '+ attack +' punts del atac.');
        } else {
          console.log('Promesa Rebutjada! El Pokémon no te suficients punts.');
        }
        this.pokemonImage = pokemon?.sprites?.front_default;
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }

  ngOnInit(): void {
  }

}
