import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { DocInfo } from './docInfo';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
  private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  getDocs(){
    return this.http.get('http://localhost:8080/docs')
  }

  getDocsPage(pageNum){
    return this.http.get('http://localhost:8080/docs?page='+pageNum)
  }

  getDocsByCity(city){
    return this.http.get('http://localhost:8080/docsbycity?city='+city)
  }

  getDocsById(id){
    return this.http.get<DocInfo>('http://localhost:8080/doc/'+id)
  }
  updateDoc(doc: DocInfo){

    console.log(JSON.stringify(doc));
    return this.http.put('http://localhost:8080/doc/' + doc.id, JSON.stringify(doc),this._options)
    .subscribe(
      data => {
          console.log("PUT Request is successful ", data);
      },
      error => {
          console.log("Rrror", error);
      }
  );  
}
}
