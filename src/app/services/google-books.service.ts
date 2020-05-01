import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse, HttpParams, HttpRequest } from '@angular/common/http'
import { throwError, Observable, of } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { environment } from 'src/environments/environment'
import { Book } from '../models/book'

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {

  private baseURL = environment.googleBooksAPIBaseURL

  constructor(private http:HttpClient) {}

  public getSearchBook(key:string): Observable<any> {

    return this.http.get(this.conformUrlForSearch(key))
      .pipe(catchError(this.handleErorRx<Array<String>>('SearchBook')))
      .pipe(map((response) => this.extractTitles(response)))
  }

  private extractTitles(response:any): Array<Book> {
    return response.items.map((book) => new Book(book.id, book.volumeInfo.authors, book.volumeInfo.title, book.pageCount, book.volumeInfo.imageLinks.smallThumbnail))
  }

  private conformUrlForSearch(search:string ): string {

    return this.conformUrlWithParams({
      "q": `inline:${search}`
    })
  }

  private conformUrlWithParams(params:object):string {
    let queryParams = new HttpParams()

    //*/
    for (let [k, v] of Object.entries(params)) {
      queryParams = queryParams.set(k, v)
    }
    //*/

    return this.baseURL.toString() + '?' + queryParams.toString()
  }

  private handleErorr(errorResponse: HttpErrorResponse) {
    if(errorResponse.error instanceof ErrorEvent) {
      console.error('Error happened: ', errorResponse.error.message)
    } else {
      console.error(`Backend error ${errorResponse.status}, `,
      `body was ${errorResponse.error}`)
    }

    return throwError('Error ocurred, try again later.')
  }

  private handleErorRx<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      console.log(`${operation} failed: ${error.message}`);
      
      return of(result as T);
    }
  }
}