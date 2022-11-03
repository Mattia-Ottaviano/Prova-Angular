import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {
  data: Object;
  loading: boolean;
  o :Observable<Object>;
  constructor(public http: HttpClient) { }
  

  ngOnInit(): void {
  }

}
