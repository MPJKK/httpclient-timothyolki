import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {
  tulos = 'Moro';
  apitulos = 'Moro Taas';
  apiosoite = 'http://media.mw.metropolia.fi/wbma';
  kuvaosoite = 'http://media.mw.metropolia.fi/wbma/uploads/';
  junaosoite = 'https://rata.digitraffic.fi/api/v1/trains';

  constructor(private http: HttpClient) { }

  getJson(){
      interface Myinterface{
          license: string;
      }

    this.http.get<Myinterface>('assets/package.json').subscribe( data => {
        console.log(data);
        this.tulos = data.license;
    } );
  }
    getFromApi() {
      interface Mediainterface {
          file: any;
      }
      //this.http.get(this.apiosoite + '/media').subscribe(data => {
        //  console.log(data[0].filename);
          //this.apitulos = this.kuvaosoite + data [0].filename;
        this.http.get(this.junaosoite ).subscribe(data => {
          console.log(data);
        this.juna = data;
      });

    }
  ngOnInit() {
      this.getJson();
      this.getFromApi();
  }

}
