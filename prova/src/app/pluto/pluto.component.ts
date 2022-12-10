import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foo } from '../models/pluto.model';

@Component({
  selector: 'app-pluto',
  templateUrl: './pluto.component.html',
  styleUrls: ['./pluto.component.css']
})
export class PlutoComponent {
    data: object;
    loading: boolean;
    o: Observable<object>;
    fooData: Foo[];
    oFoo: Observable<Foo[]>;
    constructor(public http:HttpClient) {}
    makeRequest(): void{
      console.log("here")
      this.loading = true;
      this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1')
      this.o.subscribe(this.getData)
    }

    getData = (d:Object) =>
    {
      this.data = new Object(d);
      this.loading = false;
    }


    makeCompactPost(): void {
      this.loading = true;
      this.http.post('https://jsonplaceholder.typicode.com/posts', JSON.stringify ({
        body: 'bar',
        title: 'foo',
        userId: 1
      })
      )
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      });
    }

    makeTypedRequest() : void
    {
      this.oFoo = this.http.get<Foo[]>('https://jsonplaceholder.typicode.com/posts');
      this.oFoo.subscribe(data => {this.fooData = data;});
    }


    ngOnInit() {
    }


}
