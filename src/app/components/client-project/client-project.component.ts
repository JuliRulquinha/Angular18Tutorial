import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel, ClientProject, IEmployee } from '../../model/class/interface/role';
import { Client } from '../../model/class/Client';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { AlertComponent } from "../../reusableComponent/alert/alert.component";

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule, DatePipe, AlertComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit{

  projectForm: FormGroup = new FormGroup({

    clientProjectId: new FormControl(0),
    projectName: new FormControl('',[Validators.required, Validators.minLength(4)]),
    startDate: new FormControl(''),
    expectedEndDate: new FormControl(''),
    leadByEmpId: new FormControl(''),
    completedDate: new FormControl(''),
    contactPerson: new FormControl(''),
    contactPersonContactNo: new FormControl(''),
    totalEmpWorking: new FormControl(''),
    projectCost: new FormControl(''),
    projectDetails: new FormControl(''),
    contactPersonEmailId: new FormControl(''),
    clientId: new FormControl(''),
  })

  clientService = inject(ClientService);
  employeeList: IEmployee[] = [];
  clientList: Client[] = [];


  firstName = signal('Angular 18');
  projectList = signal<ClientProject[]>([]);
  
  
  ngOnInit(): void {
    this.getAllClients();
    this.getAllEmployee();
    this.getAllClientProjects();
  }

  getAllClientProjects(){
    debugger;
    this.clientService.getAllClientProjects().subscribe((res:APIResponseModel)=>{
      this.projectList.set(res.data);
    })
  }

  changeFName(newName: string){
    this.firstName.set(newName);
  }

  getAllEmployee() {
    this.clientService.getAllEmployee().subscribe((res:APIResponseModel)=>{
      this.employeeList = res.data;
    })
  }

  getAllClients() {
    this.clientService.getAllClients().subscribe((res:APIResponseModel)=>{
      this.clientList = res.data;
    })
  }

 
  onSaveProject(){
    const formValue = this.projectForm.value;
    this.clientService.addClientProjectUpdate(formValue).subscribe((res:APIResponseModel)=>{
      if(res.result){
        alert('Project created successfully!');
      } else{
        alert(res.message);
      }
    })
  }

}
