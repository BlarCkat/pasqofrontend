import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  isHome = false;

  constructor() {
    const currentUrl = (window.location.pathname.replace('/', ''));
    if (currentUrl === 'home') {
      this.isHome = true;
      console.log(currentUrl);
    }
  }

  isHomePage() {
    return this.isHome ? this.isHome : false;
  }

}
