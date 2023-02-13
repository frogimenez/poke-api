import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl: string = environment.baseUrl;

  constructor(
    private _http:HttpClient,
  ) { }
  
  getPokemons(index:number){
    return this._http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  }

  // getPokemons(index:number){
  //   return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  // }
}
