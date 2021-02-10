import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service'

@Component({
  selector: 'app-artist-works',
  templateUrl: './artist-works.component.html',
  styleUrls: ['./artist-works.component.css']
})
export class ArtistWorksComponent implements OnInit {
  userData;
  images;
  constructor(private _shop:ShopService) { }

  ngOnInit(): void {

    this.userData = JSON.parse(localStorage.getItem('LocalAreaShops'));
    this._shop.getArtistImages(this.userData.token).subscribe((data)=>{this.images = data,console.log(this.images)},(err)=>{console.log(err)})


  }

  deleteImage(data)
  {
    console.log(data)
    this._shop.deleteArtistImages(data).subscribe((data)=>{console.log(data)},(err)=>{console.log(err)})
    this._shop.getArtistImages(this.userData.token).subscribe((data)=>{this.images = data,console.log(this.images)},(err)=>{console.log(err)})

  }

}
