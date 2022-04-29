import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-projects-create',
  templateUrl: './projects-create.component.html',
  styleUrls: ['./projects-create.component.css']
})
export class ProjectsCreateComponent implements OnInit {
  images: any;

  formProject = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    shortDescription: new FormControl('', Validators.required),
    repoLink: new FormControl('', Validators.required),
    demoLink: new FormControl(''),



  });
  ckeditorContent = "<h1 style='align: center' >Hello</h1>";
  constructor(private _projectService: ProjectService) { }

  ngOnInit(): void {
    this.formProject.get('content')!.setValue("")
  }

  


  save() {
    if (this.formProject.valid && this.images) {
      var file = new FormData();

      var project = {
         title: this.formProject.get('title')!.value,
          shortDescription: this.formProject.get('shortDescription')!.value,
           image: '',
            content: this.formProject.get('content')!.value,
             repoLink: this.formProject.get('repoLink')!.value,
              demoLink: this.formProject.get('demoLink')!.value }
      file.append('file', this.images)



      try {


        this._projectService.create(project).subscribe({
          next: (data) => {
            console.log(data._id)


            this._projectService.saveImage(file, data._id,false).subscribe({
              next: (data) => {
              },
              error: (e) => {
                console.log("error")
              },
              complete: () => console.info('complete image')
            });
          },
          error: (e) => {
            console.log("error")
          },
          complete: () => console.info('complete')
        });

      } catch (error) {

      }

    } else {
      //alerts

    }
  }



  onFileSelected(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0]
      this.images = file
     
      if (!this.images.type.split('/').includes('image')) {
        console.log(this.images.type + 'no válido')
        Swal.fire('Not supported','The type of file is not supported','error')
        this.images = null
      }
    }
  }
}
