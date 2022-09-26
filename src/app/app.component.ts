import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstApp';
  ChangeColor='red';
  constructor(){

  }
  firstMsg(){
    console.log("bonjour");
  }
}
