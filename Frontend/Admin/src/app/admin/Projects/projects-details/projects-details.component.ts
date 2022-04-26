import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.css']
})
export class ProjectsDetailsComponent implements OnInit {
 public project:any;
 id:any;
  constructor( private _projectService: ProjectService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.loadContent();
    if(this.project){

    }
    
   
  }

  
   loadContent () {
    this._projectService.getById(this.id).subscribe({
      next: async (data) => {
        this.project = await data
        document.getElementById('content')!.innerHTML = this.project.content;
       
      
        
      
        
      },complete() {},
      error(err) { console.log('Received an error: ' + err)}
    });
    
  }
  changeState(state:Number){
    this.project.state = state
    this._projectService.changeState(this.id, this.project).subscribe({
      next: (data) => {
       
      
        
      
        
      },
      error(err) { console.log('Received an error: ' + err)}
    });
  }
}
