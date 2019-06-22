import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {
  setup(interval: number, fn: () => void) /* interval in sec */ {
    setInterval(() => {
      fn();
    }, interval * 1000);
  }
}
