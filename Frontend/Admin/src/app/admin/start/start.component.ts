import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ProjectService } from 'src/app/services/project.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import { DataSharingService } from 'src/app/shared/dataSharing.service';
Chart.register(...registerables);

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  @ViewChild('mychart') mychart: any;
  canvas: any;
  ctx: any;
  numProjects: any;
  numVisits: any;
  theme:any
activeTheme:any;
  constructor(private _userService: UserService,public dataSharingService: DataSharingService,
    private _projectService: ProjectService, private token: TokenStorageService) { }

  ngOnInit(): void {
  
     this.theme = this.token.getUser().theme
     this.loadCards()
  }

  loadCards() {
   
    
    this._projectService.getCount().subscribe({
      next: async(data) => {
        this.numProjects = data
        
        // if (data) {
        //   for (let index = 0; index < data.length; index++) {
        //     const element = data[index];
        //     array.push(element);
            
        //   }
        // }
      
        
      },
      error(err) { }
    });
  
      this.numVisits = 900
  
   
  }
  loadTheme(){
 
  
   
  
   
  }
  ngAfterViewInit() {
    this._userService.getById(this.token.getUser()._id).subscribe({
      next: async(data) => {
        this.token.saveUser(data);
        this.activeTheme = data.theme
        let root = document.documentElement;
        root.style.setProperty('--primary', this.activeTheme.primary )
      
        root.style.setProperty('--accent', this.activeTheme.accent )
        root.style.setProperty('--backgroundColor1', this.activeTheme.backgroundColor1 )
        root.style.setProperty('--backgroundColor2', this.activeTheme.backgroundColor2 )
        root.style.setProperty('--fontContentColor', this.activeTheme.fontContentColor )
        root.style.setProperty('--fontTitleColor', this.activeTheme.fontTitleColor )
        root.style.setProperty('--deepBackground', this.activeTheme.deepBackground )
        this.dataSharingService.themeActive.next(data.theme.name)
        
        this.canvas = this.mychart.nativeElement;
        this.ctx = this.canvas.getContext('2d');
        
        //Se debe remplazar con las ganancias de 12 meses
        var dataDB = [150, 150, 300, 475, 700, 689, 720, 150, 900, 300, 475, 340];
        const myChart = new Chart(this.ctx, {
          type: 'line',
          data: {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
              datasets: [{
                  label: '# of Visits',
                  data: dataDB,
                  backgroundColor: data.theme.backgroundColor1,
                  borderColor: data.theme.accent,
                  tension: 0.1,
                  borderWidth: 1
              }]
          },
          options: {
          
            animation: false,
              scales: {
                myScale: {
                  type: 'logarithmic',
                  position: 'left', // `axis` is determined by the position as `'y'`
                }
               
              }
          }
      });
      },
      error(err) { console.log( err)}
    });
    //Variables para el grafico de la parte superior del dashboard
  

 
  
  }



}
