import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponseModel } from '../../model/class/interface/role';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent {

  designationList:
  masterService = inject(MasterService);

  ngOnInit(): void{
    this.masterService.getDesignations().subscribe((result:APIResponseModel) => {
      
    })
  }
}
