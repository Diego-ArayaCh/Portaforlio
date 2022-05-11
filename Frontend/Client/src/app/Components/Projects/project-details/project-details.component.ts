import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  public project:any;
  nameProject:any;
  id:any;
  validateDeleteProject: boolean = true;
   constructor( private _projectService: ProjectService, private route: ActivatedRoute) { }
 
   ngOnInit(): void {
     this.id = this.route.snapshot.paramMap.get('id');
     this.loadContent();
    
     
    
   }
 
   
    loadContent () {
     this._projectService.getById(this.id).subscribe({
       next:  (data) => {
         this.project =  data
         document.getElementById('content')!.innerHTML = this.project.content;
        
       
         
       
         
       },complete() {},
       error(err) { console.log('Received an error: ' + err)}
     });
     
   }
   
 
 
 }
 

