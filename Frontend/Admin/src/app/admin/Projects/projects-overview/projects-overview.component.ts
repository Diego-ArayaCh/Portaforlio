import { Component, OnInit , OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects-overview.component.html',
  styleUrls: ['./projects-overview.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private _projectService: ProjectService , private router:Router) {

  }
  projectsArray: any[] = [];
  ngOnInit(): void {
   
    this.loadCards();
    

  
  }




  loadCards() {
    var array: any[] = [];
    

    this._projectService.get().subscribe({
      next: (data) => {
        this.projectsArray = data
        // if (data) {
        //   for (let index = 0; index < data.length; index++) {
        //     const element = data[index];
        //     array.push(element);
            
        //   }
        // }
      
        
      },
      error(err) { console.log('Received an error: ' + err)}
    });
  
      
  
   
  }


}
