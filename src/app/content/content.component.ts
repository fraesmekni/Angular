import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
msg='bonjour';
olor="red";
tab=[]
  constructor() { }

  ngOnInit(): void {
  }
showMsg(){
  //console.log('bonjouuuuur');
  this.olor="green";
}
getColor(){
  if (this.olor=="red"){
    this.olor="pink";
  }
  return this.olor;
}
}
