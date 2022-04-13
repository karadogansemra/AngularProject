import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  showSidebar:boolean = true;

  title = 'angular-example';


  SidebarToogle(){
    this.showSidebar = !this.showSidebar;
  }
}
