import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { FormBuilder, FormGroup, FormControl  } from '@angular/forms';

@Component({
  selector: 'app-shop-tokens',
  templateUrl: './shop-tokens.component.html',
  styleUrls: ['./shop-tokens.component.css']
})
export class ShopTokensComponent implements OnInit {
  userData;
  response;
  constructor(private _shop:ShopService,private formBuilder:FormBuilder) { }

  upAuthorForm :FormGroup = this.formBuilder.group({
    image:['']
})
  ngOnInit(): void {

    this.userData = JSON.parse(localStorage.getItem('LocalAreaShops'));
    // this._shop.shopTokens(this.userData.token).subscribe((data)=>{this.tokens = data,console.log(this.tokens)},(err)=>{console.log(err)})
 

  }

  updateauthor(){

    console.log(this.userData.token);
    const formData = new FormData();
    formData.append('image',this.upAuthorForm.get('image').value);

    this._shop.uploadImage(formData);
    // this.AuthorService.updateImage(formData);
    // alert("Author updated successfully");
    // this.router.navigate(['/authors']);
  }
  selectImage(event:any){
    const file = event.target.files[0];
    this.upAuthorForm.get('image').setValue(file);
    console.log(this.upAuthorForm.value);
  }

}
