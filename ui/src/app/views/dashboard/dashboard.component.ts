import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { DocInfo } from '../../docInfo';
import { Observable } from 'rxjs';
import {DataService} from '../../data.service'
import { SelectorMatcher } from '../../../../node_modules/@angular/compiler';

@Component({
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {

  radioModel: string = 'Month';
  name:string = '';
    
  // lineChart1
  constructor(private data: DataService) { }
=
  docInfos: Object ;

  ngOnInit(): void {
    // generate random values for mainChart
    this.data.getDocs().subscribe(
      data => this.docInfos = data 
    );
  }


 public getDocsPage(page){

  this.data.getDocsPage(page).subscribe(
    data => this.docInfos = data 
  );

 }

  public searchByCity(name)
    {
      
      if(name=='')
      {
        this.data.getDocs().subscribe(
          data => this.docInfos = data 
        );
      }
      else{
      console.log('here' + name);
      this.data.getDocsByCity(name).subscribe(
        data => this.docInfos = data 
      );
    }
    }



  
  
}
