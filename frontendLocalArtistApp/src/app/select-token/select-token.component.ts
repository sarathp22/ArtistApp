import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-select-token',
  templateUrl: './select-token.component.html',
  styleUrls: ['./select-token.component.css']
})
export class SelectTokenComponent implements OnInit {
urlId;
userData;
response;
artist;
user = {userId:'',time:'',userName:'',phone:'',artistId:'',date:'',email:''};
out;
  constructor(private _activate:ActivatedRoute, private _user:UserService, private _route:Router) { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('LocalAreaShops'));
    this._activate.paramMap.subscribe(data=>{
      this.urlId=data.get('id');
      console.log(this.urlId);
      this._user.getUser(this.urlId).subscribe((data)=>{this.artist=JSON.parse(JSON.stringify(data));console.log(this.artist)},(err)=>{console.log(err),this.out=err.error.text,console.log(err.error.text)})

     
    })

    
    console.log(this.userData);
    this.user.userName= this.userData.name;
    this.user.userId= this.userData.token;
    this.user.phone= this.userData.phone;
    this.user.artistId = this.urlId;
    this.user.email = this.userData.email;
    console.log(this.user);

  }
  onSubmit()
  {
    
    this._user.tokenRequest(this.user).subscribe((data)=>{this.response=JSON.parse(JSON.stringify(data));console.log(this.response);this._route.navigate(['user/tokens'])},(err)=>{console.log(err),this.out=err.error.text,console.log(err.error.text)})

  }

}
