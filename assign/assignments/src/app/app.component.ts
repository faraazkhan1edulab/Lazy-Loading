import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyLoadingDemoComponent } from './lazy-loading-demo/lazy-loading-demo.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignments';
playerName: any;


  constructor(private router: Router)
  {}

  // const route:RouterModule = [
  //   path: 
  // ]
  Loading()
  {
    this.router.navigate(['lazy2'])
  }

  submit()
  {
    let numbername = parseInt(this.playerName)
    console.log("event",typeof this.playerName)
    console.log("event2", typeof numbername)

  }


}
