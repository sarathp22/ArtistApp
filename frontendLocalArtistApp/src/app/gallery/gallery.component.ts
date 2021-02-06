import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
images;
  constructor(private _shop: ShopService) { }

  ngOnInit(): void {

    this._shop.getGalleryImages().subscribe((data)=>{this.images = data,console.log(this.images)},(err)=>{console.log(err)})
  }

}
