import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ckeditorContent = "<h1 style='align: center' >Hello</h1>";

save(){
  document.getElementById('Project')!.innerHTML = this.ckeditorContent;

}

}
