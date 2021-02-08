import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  userData = JSON.parse(localStorage.getItem('LocalAreaShops'));
  constructor(public _http:HttpClient, private _route:Router) { }

  shopSignup(data)
  {
    return this._http.post("http://localhost:3000/shop/signup", data)
  }
  shopLogin(data)
  {
    return this._http.post("http://localhost:3000/shop/login", data)
  }


  uploadImage(data,userId)
  {
    return this._http.put("http://localhost:3000/shop/uploadImage/" + userId, data)
  }


  shopTokens(data)
  {
    return this._http.get<any>("http://localhost:3000/shop/tokens/" + data)
  }

  getGalleryImages()
  {
    return this._http.get<any>("http://localhost:3000/shop/artists/gallery");
  }

  getSpecifArtist(data)
  {
    return this._http.get<any>("http://localhost:3000/shop/" + data)
  }
  updateSpecifArtist(data,userId)
  {
    return this._http.put<any>("http://localhost:3000/shop/" + userId , data)
  }
  

}
