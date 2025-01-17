import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, IRole } from '../../model/class/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{

  roleList: IRole[] = [];
  http = inject(HttpClient);

  //old way constructor(private http: HttpClient) {
  //
  //}

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles(){
    this.http.get<APIResponseModel>(
      'https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles').subscribe((res:APIResponseModel)=>{
        this.roleList = res.data;
      });
  }


























  // firstName: string = "Angular Tutorial";
  // angularVersion = "Version 18";

  // version: number = 18;

  // isActive: boolean = false;

  // currentDate: Date = new Date();

  // inputType: string = 'button';
  
  // selectedState: string = '';

  // showWelcomeAlert(){
  //   alert('Welcome to angular tutorial');
  // }

  // showMessage(message: string){
  //   alert(message)
  // }
}
