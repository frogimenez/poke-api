import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl: string = environment.baseUrl;

  constructor(
    private http:HttpClient,
  ) { }
  
  getAllPokemons(){
    return this.http.get<any>(`${this.baseUrl}/pokemon`);
  }

  getPokemons(index:number){
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  }
}
