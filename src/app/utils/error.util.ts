import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LogUtil } from './log.util';

@Injectable({
  providedIn: 'root',
})
export class ErrorUtil {
  constructor(
    private log: LogUtil
  ) {}

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: better job of transforming error for user consumption
      this.log.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
