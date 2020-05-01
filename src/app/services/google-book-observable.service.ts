import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Book } from '../models/book';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, filter, flatMap, find } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoogleBookObservableService {

  private _baseURL:string = environment.googleBooksAPIBaseURL

  private _currentKey:string
  private _aBooks:Array<Book>

  public get aBooks():Array<Book> {
    if (this._aBooks.length > 0) {
      return this._aBooks
    } else {
      return [this.nullBook]
    }
  }

  public get nullBook():Book {
    return new Book('0', ['none'], 'none', 0)
  }

  constructor(private _http:HttpClient) {
    this._currentKey = ''
    this._aBooks = []
  }

  public async getSearchBook(key:string): Promise<Array<Book>> {
    if (this._currentKey.toLowerCase() === key.toLowerCase()) {
      return await (new Promise((resolve) => this._aBooks))
    }

    this._currentKey = key

    let result = await this._http.get(this._conformUrlForSearch(key))
      .pipe(catchError(this._handleErorRx<Array<Book>>('SearchBook')))
      .pipe(map((response) => this._extractTitles(response)))
      .toPromise()
      /*
      .then((books) => this._aBooks = books)
      .catch((reject) => this._aBooks = [this.nullBook])
      //*/

    //console.log('The result of the promise is: ', result)

    return result
  }

  public getBookById(id:string):Book {
    const result = this.aBooks.find((book) => {
      //console.log(this.aBooks)
      return book.id.toLowerCase() === id.toLowerCase()
    })
    //console.log(result)
    return result
  }

  private _extractTitles(response:any): Array<Book> {
    return response.items.map(
      (book) => 
        new Book(book.id,
          book.volumeInfo.authors,
          book.volumeInfo.title,
          book.pageCount,
          book.volumeInfo.imageLinks.smallThumbnail,
          book.volumeInfo.description))
  }

  private _conformUrlForSearch(search:string ): string {

    return this._conformUrlWithParams({
      "q": `inline:${search}`
    })
  }

  private _conformUrlWithParams(params:object):string {
    let queryParams = new HttpParams()

    //*/
    for (let [k, v] of Object.entries(params)) {
      queryParams = queryParams.set(k, v)
    }
    //*/

    return this._baseURL.toString() + '?' + queryParams.toString()
  }

  private _handleErorr(errorResponse: HttpErrorResponse) {
    if(errorResponse.error instanceof ErrorEvent) {
      console.error('Error happened: ', errorResponse.error.message)
    } else {
      console.error(`Backend error ${errorResponse.status}, `,
      `body was ${errorResponse.error}`)
    }

    return throwError('Error ocurred, try again later.')
  }

  private _handleErorRx<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      console.log(`${operation} failed: ${error.message}`);
      
      return of(result as T);
    }
  }
}
