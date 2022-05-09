import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'src/app/services/SessionStorageService';

@Component({
  selector: 'app-overview-projects',
  templateUrl: './overview-projects.component.html',
  styleUrls: ['./overview-projects.component.css']
})
export class OverviewProjectsComponent implements OnInit {

  constructor(private session:SessionStorageService) { }

  ngOnInit(): void {
    if (this.session.getPage()) {
      let page = {index: 'projects', url:'/projects'}
      
      this.session.savePage(page)
    }
  }

}
