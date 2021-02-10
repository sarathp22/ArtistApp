import { Component, OnInit,EventEmitter } from '@angular/core';
import { ShopService } from '../shop.service';
import { FormBuilder, FormGroup, FormControl  } from '@angular/forms';
import { Router } from '@angular/router';

const URL="http://localhost:4200/shop/uploadImage";


@Component({
  selector: 'app-shop-tokens',
  templateUrl: './shop-tokens.component.html',
  styleUrls: ['./shop-tokens.component.css']
})
export class ShopTokensComponent implements OnInit {
  constructor(private _shop:ShopService,private formBuilder:FormBuilder, private _route:Router) { }
  userData = JSON.parse(localStorage.getItem('LocalAreaShops'));
  selectedFile:File =null;
  
  ngOnInit(): void {
    
  
    

    // this._shop.shopTokens(this.userData.token).subscribe((data)=>{this.tokens = data,console.log(this.tokens)},(err)=>{console.log(err)})
 

  }

  onFileSelected(event)
  {
   this.selectedFile = <File>event.target.files[0];
  }
  onUpload()
  {
    const fd = new FormData();
    console.log(this.selectedFile);
    fd.append('image',this.selectedFile,this.selectedFile.name);
    this._shop.uploadImage(fd,this.userData.token).subscribe((data)=>{this._route.navigate(['artist/works'])})
    
  }

}
