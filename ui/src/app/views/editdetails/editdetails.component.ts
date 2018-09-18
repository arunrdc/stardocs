import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import { ActivatedRoute } from '@angular/router';
import { DocInfo } from '../../docInfo';

@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.component.html',
  styleUrls: ['./editdetails.component.scss']
})
export class EditdetailsComponent implements OnInit {
  docInfo: DocInfo ;

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

  saveDoc()
  {
    this.data.updateDoc(this.docInfo);
    console.log('Saved');

  }

  
}
