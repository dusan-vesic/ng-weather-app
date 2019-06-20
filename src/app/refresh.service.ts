import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {

  constructor() { }

  setup(interval: number) /* interval in sec */ {
    setInterval(() => {
      this.run();
    }, interval * 1000);
  }

  run() {
    console.log('exec');
  }
}
