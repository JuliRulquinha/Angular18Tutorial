import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel, IEmployee } from '../../model/class/interface/role';
import { Client } from '../../model/class/Client';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit{

  projectForm: FormGroup = new FormGroup({

    clientProjectId: new FormControl(0),
    projectName: new FormControl(''),
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
  
  ngOnInit(): void {
    this.getAllClients();
    this.getAllEmployee();
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
