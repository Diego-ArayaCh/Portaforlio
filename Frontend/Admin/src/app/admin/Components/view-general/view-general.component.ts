import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'view-general',
  templateUrl: './view-general.component.html',
  styleUrls: ['./view-general.component.css']
})
export class ViewGeneralComponent implements OnInit {

  constructor(private _userService: UserService,private  token: TokenStorageService) { }
  user:any;
  ngOnInit(): void {
    this._userService.getById(this.token.getUser()._id).subscribe({
      next: async(data) => { 
        this.user = await data

      }
    })
  }

}
