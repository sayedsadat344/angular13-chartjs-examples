import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './charts/doughnut-chart/doughnut-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { BubbleAreaChartComponent } from './charts/bubble-area-chart/bubble-area-chart.component';
import { ScatterAreaChartCopyComponent } from './charts/scatter-area-chart-copy/scatter-area-chart-copy.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    PieChartComponent,
    BubbleAreaChartComponent,
    ScatterAreaChartCopyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
