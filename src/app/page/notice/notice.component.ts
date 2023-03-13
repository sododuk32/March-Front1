import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css'],
})
export class NoticeComponent {
  ngOnInit() {
    try {
      this.getData().subscribe((res: any) => {
        this.temp1 = JSON.parse(res.sqltemp).slice(10);
        console.log(this.temp1);
      });
    } catch (error) {
      console.log(error);
    }
  }
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.post('https://kwakdeayang.shop/productInfo/mouse/1', {
      tags: ['blue'],
    });
  }
  myarr = [];
  temp1: any[] | undefined;
}

interface resType {
  code: number;
  sqltemp: string;
  total: number;
}
