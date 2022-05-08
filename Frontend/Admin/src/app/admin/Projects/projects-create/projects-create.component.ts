import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-projects-create',
  templateUrl: './projects-create.component.html',
  styleUrls: ['./projects-create.component.css']
})
export class ProjectsCreateComponent implements OnInit {
  
  public files:any=[];
  public preview:string='';
  formProject = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    shortDescription: new FormControl('', Validators.required),
    repoLink: new FormControl('', Validators.required),
    demoLink: new FormControl(''),
    image: new FormControl('', Validators.required),



  });
  ckeditorContent = "<h1 style='align: center' >Hello</h1>";
  constructor(private _projectService: ProjectService, private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.formProject.get('content')!.setValue("")
  }

  


  save() {
    this.formProject.get('image')?.setValue(this.preview);
    if (this.formProject.valid) {
    

      var project = {
         title: this.formProject.get('title')!.value,
          shortDescription: this.formProject.get('shortDescription')!.value,
           image: this.formProject.get('image')!.value,
            content: this.formProject.get('content')!.value,
             repoLink: this.formProject.get('repoLink')!.value,
              demoLink: this.formProject.get('demoLink')!.value }
    



      try {
        

        this._projectService.create(project).subscribe({
          next: (data) => {
           Swal.fire('Success','Poject created successfully', 'success')
           this.router.navigate(['/admin/projects'])

           
          },
          error: (e) => {
           
          },
          complete: () => console.info('complete')
        });

      } catch (error) {

      }

    } else {
      //alerts

    }
  }

  getImage(event:any){

    const image = event.target.files[0];
    
    this.getBase64(image).then((image: any) =>{
      this.preview = image.base;
      
    });
    
    
    this.files.push(image);
    
    }
    
    getBase64 = async($event:any) => new Promise((resolve, reject) => {
    
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          
          base: reader.result
    
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
        
    
    
    
      }
    
    } catch (error) {
    
    }
    })

 
}
