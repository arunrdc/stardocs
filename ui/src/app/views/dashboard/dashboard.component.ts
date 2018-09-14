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

  docInfos: Object ;
  public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType = 'pie';

  // barChart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  public lineChartColours: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];


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
