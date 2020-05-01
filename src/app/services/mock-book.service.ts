import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockBookService {

  aBooks : Array<string>

  constructor() { 
    this.aBooks = ["Cien años de soledad", "Don Quijote", "Un Mundo Feliz"]
  }

  getBooks(key:string) {
    return this.aBooks
  }

  getBooks$(key:string): Observable<Array<String>> {

    return new Observable<Array<String>>((observer)=>{
      setTimeout(() => { observer.next(this.aBooks) }, 2000)
    })
  }
}
