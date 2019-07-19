import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpService: HttpClient) { }

  fetchInfo() {
    return this.httpService.get('http://usweb.dotomi.com/resources/swfs/cookies.json');
  }
}
