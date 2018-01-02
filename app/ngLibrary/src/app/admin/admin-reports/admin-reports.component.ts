import { Component, OnInit, AfterContentInit, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { ReportsService } from '../../services/reports/reports.service';
import { Observable } from 'rxjs/Observable';
import { BaseChartDirective } from 'chart.js';

@Component({
  selector: 'app-admin-reports',
  templateUrl: './admin-reports.component.html',
  styleUrls: ['./admin-reports.component.css']
})
export class AdminReportsComponent implements OnInit, AfterContentInit, OnDestroy {

  @ViewChild("baseChart")
    chart: BaseChartDirective;
  totalReservations: number = 0
  startDate: String
  endDate: String
  reportsCubicle: any
  reportsCareer: any
  reportsDivision: any
  reportsDay: any
  currentDate: Date = new Date()
  pieChartLabelsDivision: string[]
  pieChartDataDivision: number[]
  pieChartLabelsCubicles: string[]
  pieChartDataCubicles: number[]
  pieChartLabelsCareers: string[]
  pieChartDataCareers: number[]
  pieChartLabelsDays: string[]
  pieChartDataDays: number[]
  pieChartType: string = 'pie'
  pieChartLegend: boolean = false

  constructor(private reportsService: ReportsService) {}

  ngOnInit() {
    console.log(this.currentDate)
    let day = this.currentDate.getDate().toString()
    let month = this.currentDate.getMonth()+1
    let year = this.currentDate.getFullYear()
    let month2 = this.currentDate.getMonth()+2

    if (parseInt(day) >= 1 && parseInt(day) <= 9) {
      day = '0' + day
      console.log(day)
    }
    if (month >= 1 && month <= 9) {
      this.startDate = `${year}-0${month}-${day}`
    } else {
      this.startDate = `${year}-${month}-${day}`
    }

    if (month2 >= 13) {
      month2 = 1
      year = year+1
    }
    if (month2 >= 1 && month2 <= 9) {
      this.endDate = `${year}-0${month2}-${day}`
    } else {
      this.endDate = `${year}-${month2}-${day}`
    }
    console.log(this.startDate)
    console.log(this.endDate)
  }

  insertChartItems(object, labels, data) {
    object.forEach(element => {
      labels.push(element._id)
      data.push(element.ingresos)
    })
  }

  ngOnDestroy() {

  }

  ngAfterContentInit() {
    console.log('After content init loaded')
    if (this.startDate && this.endDate) {
      this.reportsService.getByDivision(this.startDate, this.endDate).then(data => {
        if (data) {

          console.log('Reportes por division: ')
          console.log(data)
          this.reportsDivision = data
          this.pieChartLabelsDivision = []
          this.pieChartDataDivision = []
          this.insertChartItems(this.reportsDivision, this.pieChartLabelsDivision, this.pieChartDataDivision)

          // data.forEach(element => {
          //   this.pieChartLabelsDivision.push(element._id)
          //   this.pieChartDataDivision.push(element.ingresos)
          // })
          this.sumReservations(this.reportsDivision)

        }
      })
      this.reportsService.getByCubicle(this.startDate, this.endDate).then(data => {
        if (data) {
          console.log('Reportes por cubiculo: ')
          console.log(data)
          this.reportsCubicle = data
          this.pieChartLabelsCubicles = []
          this.pieChartDataCubicles = []
          data.forEach(element => {
            this.pieChartLabelsCubicles.push(`Cubiculo ${element._id}`)
            this.pieChartDataCubicles.push(element.ingresos)
          })
          this.sumReservations(this.reportsCubicle)
        }
      })
      this.reportsService.getByCareer(this.startDate, this.endDate).then(data => {
        if (data) {

          console.log('Reportes por carrera: ')
          console.log(data)
          this.reportsCareer = data
          this.pieChartLabelsCareers = []
          this.pieChartDataCareers = []
          this.insertChartItems(this.reportsCareer, this.pieChartLabelsCareers, this.pieChartDataCareers)

          // data.forEach(element => {
          //     this.pieChartLabelsCareers.push(element._id)
          //     this.pieChartDataCareers.push(element.ingresos)
          // });
          this.sumReservations(this.reportsCareer)

        }
      })
      this.reportsService.getByDay(this.startDate, this.endDate).then(data => {
        if (data) {

          console.log('Reportes por dia: ')
          console.log(data)
          this.reportsDay = data
          this.pieChartLabelsDays = []
          this.pieChartDataDays = []
          data.forEach(element => {
            let shortDate = element._id.split('T')
            this.pieChartLabelsDays.push(shortDate[0])
            this.pieChartDataDays.push(element.ingresos)
          })
          // this.insertChartItems(this.reportsDay, this.pieChartLabelsDays, this.pieChartDataDays)

          // data.forEach(element => {
          //     this.pieChartLabelsDays.push(element._id)
          //     this.pieChartDataDays.push(element.ingresos)
          // });
          this.sumReservations(this.reportsDay)

        }
      })

    }
    // console.log(this.pieChartLabelsCubicles)
    // console.log(this.pieChartDataCubicles)


  }

  sumReservations(reservations) {
    reservations.forEach(element => {
        this.totalReservations += element.ingresos
    });
  }

  chartClicked(e:any):void {
    console.log(e);
  }

  chartHovered(e:any):void {
    console.log(e);
  }

  searchReports() {


    if (this.startDate && this.endDate) {
      this.reportsService.getByDivision(this.startDate, this.endDate).then(data => {
        if (data) {
          // this.pieChartLabelsDivision = new Array
          // this.pieChartDataDivision = new Array
          console.log('Reportes por division: ')
          console.log(data)
          this.reportsDivision = data
          this.pieChartLabelsDivision = new Array()
          this.pieChartDataDivision = new Array()
          // this.pieChartLabelsDivision = []
          // this.pieChartDataDivision = []
          this.insertChartItems(this.reportsDivision, this.pieChartLabelsDivision, this.pieChartDataDivision)

        }
      })
      this.reportsService.getByCubicle(this.startDate, this.endDate).then(data => {
        if (data) {
          // this.pieChartLabelsCubicles = new Array
          // this.pieChartDataCubicles = new Array
        console.log('Reportes por cubiculo: ')
        console.log(data)
        this.reportsCubicle = data
        this.pieChartLabelsCubicles = new Array()
        this.pieChartDataCubicles = new Array()
        // this.pieChartLabelsCubicles = []
        // this.pieChartDataCubicles = []
        data.forEach(element => {
          this.pieChartLabelsCubicles.push(`Cubiculo ${element._id}`)
          this.pieChartDataCubicles.push(element.ingresos)
        })
        // console.log(this.pieChartLabelsCubicles)
        }
      })
      this.reportsService.getByCareer(this.startDate, this.endDate).then(data => {
        if (data) {
          this.pieChartLabelsCareers = new Array()
          this.pieChartDataCareers = new Array()
          console.log('Reportes por carrera: ')
          console.log(data)
          this.reportsCareer = data
          // this.pieChartLabelsCareers = []
          // this.pieChartDataCareers = []
          this.insertChartItems(this.reportsCareer, this.pieChartLabelsCareers, this.pieChartDataCareers)

        }
      })
      this.reportsService.getByDay(this.startDate, this.endDate).then(data => {
        if (data) {
          this.pieChartLabelsDays = new Array
          this.pieChartDataDays = new Array
          console.log(this.pieChartLabelsDays)
          console.log('Reportes por dia: ')
          console.log(data)
          this.reportsDay = data
          // this.pieChartLabelsDays = []
          // this.pieChartDataDays = []
          data.forEach(element => {
            // console.log(element._id)
            let shortDate = element._id.split('T')
            this.pieChartLabelsDays.push(shortDate[0])
            this.pieChartDataDays.push(element.ingresos)
          })

        }
      })
    }
    console.log(this.pieChartLabelsDays)
  }

}
