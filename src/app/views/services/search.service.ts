import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private httpClient: HttpClient) {}

  getMovie(title: string) {
    const headers = new HttpHeaders().set(
      'X-RapidAPI-Key',
      'c6b5ac88f7msh192c3d2e63a0e92p17799djsn375994122d42'
    );
    return this.httpClient.get(
      `https://online-movie-database.p.rapidapi.com/title/v2/find?title=${title}&limit=20&paginationKey=0&sortArg=moviemeter%2Casc`,
      { headers: headers }
    );
  }
}
