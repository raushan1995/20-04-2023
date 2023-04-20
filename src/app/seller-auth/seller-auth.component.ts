import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from '../services/seller.service';
import {SignUp} from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller:SellerService, private router:Router) { }
  showLogin=false

  ngOnInit(): void {
    this.seller.reloadSeller()
  }
 
  signUp(data:SignUp):void{
    
     this.seller.userSignUp(data)
     
  }

  openLogin(){
      this.showLogin = true
  }

  openSignUp(){
    this.showLogin = false
  }
}
