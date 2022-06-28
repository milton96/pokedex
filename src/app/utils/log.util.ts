import { Injectable } from '@angular/core';
import {} from '@angular/common/'

@Injectable({
  providedIn: 'root',
})
export class LogUtil {
    constructor(){}

    /**
     * info
     */
    public info(msg: string): void {
        console.info(msg);
    }

    /**
     * log
     */
     public log(msg: string): void {
        console.log(msg);
    }

    /**
     * error
     */
     public error(msg: string): void {
        console.error(msg);
    }
}