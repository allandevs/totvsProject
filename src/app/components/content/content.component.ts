import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  constructor() {}
historico:any  = [];
  ngOnInit(): void {
    let temp : any = localStorage.getItem("historico");
     this.historico = JSON.parse(temp)
     console.log(this.historico)
  }
}
