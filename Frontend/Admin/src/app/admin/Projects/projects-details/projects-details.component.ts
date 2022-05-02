import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import Swal from 'sweetalert2';

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
    
    this.loadContent();
    
    
   
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
  changeState(state:any){
    this.project.state = state
    this._projectService.changeState(this.id, this.project).subscribe({
      next: (data) => {
       
      if(state == data.state){
        Swal.fire('State changed','The state of the project has been changed', 'success')
      }else{
        Swal.fire('Error','The state of project has not been changed', 'error')
      }
        
      
        
      },
      error(err) { console.log('Received an error: ' + err)}
    });
  }
}
