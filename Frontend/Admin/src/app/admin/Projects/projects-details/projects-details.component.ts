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
 nameProject:any;
 id:any;
 validateDeleteProject: boolean = true;
  constructor( private _projectService: ProjectService, private route: ActivatedRoute, private router: Router) { }

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

  delete(){
  this._projectService.delete(this.id).subscribe({
      next:  (data) => {
       
       Swal.fire('Project deleted','The project has been deleted', 'success')
       
      this.router.navigate(['/admin/projects/'])
        
      
        
      },complete() {},
      error(err) { console.log('Received an error: ' + err)}
    });
  }
  validateName(name:any){
    let title = name.target.value
    
 
    if(title.trim().length > 0){
      if (title.trim() == this.project.title) {
        this.validateDeleteProject = false;
      }else{
        this.validateDeleteProject = true;
      }
    }else{
      this.validateDeleteProject = true;
    }
  }
}
