import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { SessionStorageService } from 'src/app/services/SessionStorageService';
declare var $: any;
@Component({
  selector: 'app-overview-projects',
  templateUrl: './overview-projects.component.html',
  styleUrls: ['./overview-projects.component.css']
})
export class OverviewProjectsComponent implements OnInit,AfterViewInit {
  projects:any [] = []
  
  constructor(private _projectsService: ProjectService ,private session:SessionStorageService) { }
  ngAfterViewInit(): void {
   
    
  }

  ngOnInit(): void {
    this.loadCards()
  
  }
  loadCards() {
    this._projectsService.get().subscribe({
      next: async (data) =>{
        this.projects = data
      }
    })
  }

}
