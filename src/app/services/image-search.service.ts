import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Client-ID b067d5cb828ec5a',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ImageSearchService {
  private url = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getdata(search, page, sort, window): Observable<any> {
    const url = `https://api.imgur.com/3/gallery/search/${sort}/${window}/${page}/?q=${search}`;
    // const url = `${this.url}3/gallery/search/${sort}/${window}/${page}/?q=${search}`;
    return this.http
      .get<any>(url, httpOptions)
      .pipe(catchError(this.handelError));
  }
  handelError(error) {
    return throwError(error.message || 'Server Error');
  }
}
