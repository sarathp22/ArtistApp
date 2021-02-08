import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
user={name:'',phone:'',email:'',password:''};
userData;
out;
out1;
  constructor(private _shop:ShopService) { }

  ngOnInit(): void {

    this.userData = JSON.parse(localStorage.getItem('LocalAreaShops'));
  
      
      this._shop.getSpecifArtist(this.userData.token).subscribe((data)=>{this.user=JSON.parse(JSON.stringify(data));console.log(this.user);},
      (err)=>{console.log(err)})
  }

  onUpdateProfile()
  {
    this._shop.updateSpecifArtist(this.user,this.userData.token).subscribe((data)=>{this.user=JSON.parse(JSON.stringify(data));alert("updated successfully")},(err)=>{console.log(err),this.out=err.error.text,this.out1=err.error,console.log(err.error.text)})

  }

}
