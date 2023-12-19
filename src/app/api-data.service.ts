import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private httpClient:HttpClient) {}

  getInsult(language:string, type:string) {
    return this.httpClient.get('https://evilinsult.com/generate_insult.php?lang=en&type=json?lang=' + language + '&type=' + type);
  }
}
