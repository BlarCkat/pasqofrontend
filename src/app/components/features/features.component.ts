import { Component, OnInit } from '@angular/core';
import { faEnvelope, faPhone, faHeart, faClock, faGamepad, faBookReader } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { HomePageService } from '../home-page/home-page.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faHeart = faHeart;

  faClock = faClock;
  faGamepad = faGamepad;
  faBookReader = faBookReader;

  constructor(private homePageService: HomePageService) {
    this.homePageService.isHome = true;
  }

  ngOnInit() {
  }

}