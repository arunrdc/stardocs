import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

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
    return this.http.get('http://localhost:8080/doc/'+id)
  }

}
