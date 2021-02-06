import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service'

@Component({
  selector: 'app-artist-token',
  templateUrl: './artist-token.component.html',
  styleUrls: ['./artist-token.component.css']
})
export class ArtistTokenComponent implements OnInit {
  userData;
  tokens;
  constructor(private _shop: ShopService) { }

  ngOnInit(): void {

    this.userData = JSON.parse(localStorage.getItem('LocalAreaShops'));
    this._shop.shopTokens(this.userData.token).subscribe((data)=>{this.tokens = data,console.log(this.tokens)},(err)=>{console.log(err)})
  }

}
