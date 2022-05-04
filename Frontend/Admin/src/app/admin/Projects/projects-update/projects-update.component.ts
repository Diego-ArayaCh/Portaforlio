import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-projects-update',
  templateUrl: './projects-update.component.html',
  styleUrls: ['./projects-update.component.css']
})
export class ProjectsUpdateComponent implements OnInit {
  public files:any=[];
  public preview:string='';
  
  
   id:any;
   change:boolean = false;
  formProject = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    shortDescription: new FormControl('', Validators.required),
    repoLink: new FormControl('', Validators.required),
    demoLink: new FormControl(''),
    image: new FormControl('', Validators.required),



  });
  ckeditorContent = "<h1 style='align: center' >Hello</h1>";
  constructor(private _projectService: ProjectService, private route: ActivatedRoute, private router : Router,private sanitizer: DomSanitizer) { }

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
        this.formProject.get('image')!.setValue(data.image)
        this.preview = data.image;
      
        
      
        
      },complete() {},
      error(err) { console.log('Received an error: ' + err)}
    });
    
  }


  save() {
    
    this.formProject.get('image')?.setValue(this.preview);
    if (this.formProject.valid) {
     

      var project = {
         title: this.formProject.get('title')!.value,
          shortDescription: this.formProject.get('shortDescription')!.value,
            content: this.formProject.get('content')!.value,
             repoLink: this.formProject.get('repoLink')!.value,
              demoLink: this.formProject.get('demoLink')!.value,
              image: this.formProject.get('image')!.value, }
              
     



      try {


        this._projectService.update(this.id, project).subscribe({
          next: (data) => {
            this.router.navigate(['/admin/projects'])


           
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

  getImage(event:any){

    const image = event.target.files[0];
    
    this.getBase64(image).then((image: any) =>{
      this.preview = image.base;
      console.log(image.base); 
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
