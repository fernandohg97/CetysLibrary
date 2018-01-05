import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import { ReportsService } from '../../services/reports/reports.service';
import { BaseChartDirective } from 'chart.js';

@Component({
  selector: 'app-admin-reports',
  templateUrl: './admin-reports.component.html',
  styleUrls: ['./admin-reports.component.css']
})
export class AdminReportsComponent implements OnInit, AfterContentInit {

  @ViewChild("baseChart") chart: BaseChartDirective;
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
  countLabelsCubicles: number
  countLabelsDivision: number
  countLabelsCareers: number
  countLabelsDays: number

  constructor(private reportsService: ReportsService) {}

  ngOnInit() {
    let day = this.currentDate.getDate().toString()
    let month = this.currentDate.getMonth()+1
    let year = this.currentDate.getFullYear()
    let month2 = this.currentDate.getMonth()+2

    if (parseInt(day) >= 1 && parseInt(day) <= 9) {
      day = '0' + day
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
  }

  ngAfterContentInit() {
    if (this.startDate && this.endDate) {
      this.reportsService.getByDivision(this.startDate, this.endDate).then(data => {
        if (data) {
          this.reportsDivision = data
          this.pieChartLabelsDivision = []
          this.pieChartDataDivision = []
          this.insertChartItems(this.reportsDivision, this.pieChartLabelsDivision, this.pieChartDataDivision)
          this.countLabelsDivision = this.pieChartDataDivision.length
          this.sumReservations(this.reportsDivision)
        }
      })
      this.reportsService.getByCubicle(this.startDate, this.endDate).then(data => {
        if (data) {
          this.reportsCubicle = data
          this.pieChartDataCubicles = []
          this.pieChartLabelsCubicles = []
          data.forEach(element => {
            this.pieChartLabelsCubicles.push(`Cubiculo ${element._id.toString()}`)
            this.pieChartDataCubicles.push(element.ingresos)
          })
          this.countLabelsCubicles = this.pieChartDataCubicles.length
          this.sumReservations(this.reportsCubicle)
        }
      })
      this.reportsService.getByCareer(this.startDate, this.endDate).then(data => {
        if (data) {
          this.reportsCareer = data
          this.pieChartLabelsCareers = []
          this.pieChartDataCareers = []
          this.insertChartItems(this.reportsCareer, this.pieChartLabelsCareers, this.pieChartDataCareers)
          this.countLabelsCareers = this.pieChartDataCareers.length
          this.sumReservations(this.reportsCareer)
        }
      })
      this.reportsService.getByDay(this.startDate, this.endDate).then(data => {
        if (data) {
          this.reportsDay = data
          this.pieChartLabelsDays = []
          this.pieChartDataDays = []
          data.forEach(element => {
            let shortDate = element._id.split('T')
            this.pieChartLabelsDays.push(shortDate[0])
            this.pieChartDataDays.push(element.ingresos)
          })
          this.countLabelsDays = this.pieChartDataDays.length
          this.sumReservations(this.reportsDay)
        }
      })
    }
  }

  insertChartItems(object, labels, data) {
    object.forEach(element => {
      labels.push(element._id)
      data.push(element.ingresos)
    })
  }

  sumReservations(reservations) {
    reservations.forEach(element => {
        this.totalReservations += element.ingresos
    });
  }

  searchReports() {
    let labelsDaysClone = this.pieChartLabelsDays
    let dataDaysClone = this.pieChartDataDays
    let itemsDays = []

    let labelsCareersClone = this.pieChartLabelsCareers
    let dataCareersClone = this.pieChartDataCareers
    let itemsCareers = []

    let labelsCubiclesClone = this.pieChartLabelsCubicles
    let dataCubiclesClone = this.pieChartDataCubicles
    let itemsCubicles = []

    let labelsDivisionClone = this.pieChartLabelsDivision
    let dataDivisionClone = this.pieChartDataDivision
    let itemsDivision = []

    if (this.startDate && this.endDate) {
      this.reportsService.getByDivision(this.startDate, this.endDate).then(data => {
        if (data) {
          this.reportsDivision = data
          this.insertChartItems(this.reportsDivision, itemsDivision, dataDivisionClone)
          dataDivisionClone.splice(0, this.countLabelsDivision)
          this.countLabelsDivision = dataDivisionClone.length
          labelsDivisionClone = itemsDivision
          this.pieChartLabelsDivision = labelsDivisionClone
          this.pieChartDataDivision = dataDivisionClone
        }
      })
      this.reportsService.getByCubicle(this.startDate, this.endDate).then(data => {
        if (data) {
        this.reportsCubicle = data
        data.forEach(element => {
          itemsCubicles.push(`Cubiculo ${element._id}`)
          dataCubiclesClone.push(element.ingresos)
        })
          dataCubiclesClone.splice(0, this.countLabelsCubicles)
          this.countLabelsCubicles = labelsCubiclesClone.length
          labelsCubiclesClone = itemsCubicles
          this.pieChartLabelsCubicles = labelsCubiclesClone
          this.pieChartDataCubicles = dataCubiclesClone
        }
      })
      this.reportsService.getByCareer(this.startDate, this.endDate).then(data => {
        if (data) {
          this.reportsCareer = data
          this.insertChartItems(this.reportsCareer, itemsCareers, dataCareersClone)
          dataCareersClone.splice(0, this.countLabelsCareers)
          this.countLabelsCareers = dataCareersClone.length
          labelsCareersClone = itemsCareers
          this.pieChartLabelsCareers = labelsCareersClone
          this.pieChartDataCareers = dataCareersClone
        }
      })
      this.reportsService.getByDay(this.startDate, this.endDate).then(data => {
        if (data) {
          this.reportsDay = data
          data.forEach(element => {
            let shortDate = element._id.split('T')
            itemsDays.push(shortDate[0])
            dataDaysClone.push(element.ingresos)
          })
          dataDaysClone.splice(0, this.countLabelsDays)
          this.countLabelsDays = dataDaysClone.length
          labelsDaysClone = itemsDays
          this.pieChartLabelsDays = labelsDaysClone
          this.pieChartDataDays = dataDaysClone
        }
      })
    }
  }

}
