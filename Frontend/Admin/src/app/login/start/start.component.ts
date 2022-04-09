import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  userForm = new FormGroup({

    username: new FormControl('', Validators.required),
    pwd: new FormControl('', Validators.required)


  });
  constructor(private router: Router) { }

  ngOnInit(): void {
     
  }
 send(){
  this.router.navigate(['/admin'])
 }
}
