import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
@Component({
  selector: 'app-polar',
  templateUrl: './polar.component.html',
  styleUrls: ['./polar.component.scss'],
})
export class PolarComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
    // PolarArea
    public polarAreaChartLabels: string[] = [ 'Usuarios', 'Alertas' ];
    public polarAreaChartData: ChartData<'polarArea'> = {
      labels: this.polarAreaChartLabels,
      datasets: [ {
        data: [ 16, 19 ],
        label: 'Series 1'
      } ]
    };
    public polarAreaLegend = true;
  
    public polarAreaChartType: ChartType = 'polarArea';
  
    // events
    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }

}
