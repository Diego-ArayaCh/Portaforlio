import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-projects-update',
  templateUrl: './projects-update.component.html',
  styleUrls: ['./projects-update.component.css']
})
export class ProjectsUpdateComponent implements OnInit {
  images: any;
   id:any;
   change:boolean = false;
  formProject = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    shortDescription: new FormControl('', Validators.required),
    repoLink: new FormControl('', Validators.required),
    demoLink: new FormControl(''),



  });
  ckeditorContent = "<h1 style='align: center' >Hello</h1>";
  constructor(private _projectService: ProjectService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.formProject.get('content')!.setValue("")
    this.id = this.route.snapshot.paramMap.get('id');
    this.loadContent()
  }

  loadContent () {
    let id = 
    this._projectService.getById(this.id).subscribe({
      next: async (data) => {
      
        this.formProject.get('title')!.setValue(data.title)
        this.formProject.get('content')!.setValue(data.content)
        this.formProject.get('shortDescription')!.setValue(data.shortDescription)
        this.formProject.get('repoLink')!.setValue(data.repoLink)
        this.formProject.get('demoLink')!.setValue(data.demoLink)
    
      
        
      
        
      },complete() {},
      error(err) { console.log('Received an error: ' + err)}
    });
    
  }


  save() {
    console.log(this.change)
    if (this.formProject.valid) {
      var file = new FormData();

      var project = {
         title: this.formProject.get('title')!.value,
          shortDescription: this.formProject.get('shortDescription')!.value,
            content: this.formProject.get('content')!.value,
             repoLink: this.formProject.get('repoLink')!.value,
              demoLink: this.formProject.get('demoLink')!.value }
      file.append('file', this.images)



      try {


        this._projectService.update(this.id, project).subscribe({
          next: (data) => {
            console.log(data._id)


            this._projectService.saveImage(file, data._id, this.change).subscribe({
              next: (data) => {
                this.router.navigate(['/admin/projects'])
              },
              error: (e) => {
                console.log(e)
              },
              complete: () => console.info('complete image')
            });
          },
          error: (e) => {
            console.log("error")
          },
          complete: () => { Swal.fire('Project Saved','The project has been saved','success')
        
         
        
        }
        });

      } catch (error) {

      }

    } else {
      Swal.fire('Form invalid','The form is invalid','error')

    }
    
  }



  onFileSelected(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0]
      this.images = file
      this.change = true
      if (!this.images.type.split('/').includes('image')) {
        console.log(this.images.type + 'no válido')
        Swal.fire('Not supported','The type of file is not supported','error')
        this.images = null
        this.change = false
      }
    }
  }
}
