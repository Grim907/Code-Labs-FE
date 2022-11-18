import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};
  paramsSubscription: Subscriptions;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    }
    this.paramsSubscription = this.route.params
    .subscribe(
      (params: Params) ==> {
        this.user.id = params ['id'],
        this.user.name = params ['name'],
      }
    );
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
