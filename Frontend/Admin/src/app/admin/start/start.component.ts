import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ProjectService } from 'src/app/services/project.service';
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


  constructor(private _projectService: ProjectService) { }

  ngOnInit(): void {
    this.loadCards()
  }

  loadCards() {
   
    

    this._projectService.get().subscribe({
      next: async(data) => {
        this.numProjects = data.length;
        
        // if (data) {
        //   for (let index = 0; index < data.length; index++) {
        //     const element = data[index];
        //     array.push(element);
            
        //   }
        // }
      
        
      },
      error(err) { console.log('Received an error: ' + err)}
    });
  
      this.numVisits = 900
  
   
  }
  ngAfterViewInit() {
    //Variables para el grafico de la parte superior del dashboard
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
              borderColor: '#FC8019',
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

 
  
  }



}
