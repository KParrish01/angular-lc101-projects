import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'And Here Some Pics!';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'http://www.gstatic.com/tv/thumb/v22vodart/22005/p22005_v_v8_ad.jpg';
  image3 = 'https://cdn.vox-cdn.com/thumbor/UqY0xeSxq8K3LmfXy7oiErj1u9Q=/0x0:1024x768/1200x800/filters:focal(431x203:593x365)/cdn.vox-cdn.com/uploads/chorus_image/image/51816113/thegilmoregirls.0.0.jpg';

  constructor() { }

  ngOnInit() {
  }

}