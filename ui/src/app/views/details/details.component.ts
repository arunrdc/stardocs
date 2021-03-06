import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  
  docInfo: Object ;
  
  lat: number = 42.7234;
  lng: number = -84.4779;

  ngOnInit(): void {
    this.getDoc();
  }
  constructor(private data: DataService, private route: ActivatedRoute) { }

  getDoc(): void {
    console.log('hello');
    const id = +this.route.snapshot.paramMap.get('id');
    this.data.getDocsById(id).subscribe(
      data => this.docInfo = data
      
    );
   

  }
}
