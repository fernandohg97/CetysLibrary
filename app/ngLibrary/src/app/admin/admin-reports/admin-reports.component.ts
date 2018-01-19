import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import { ReportsService } from '../../services/reports/reports.service';
import { BaseChartDirective } from 'chart.js';
import { ReservationsService } from '../../services/reservations/reservations.service';

@Component({
  selector: 'app-admin-reports',
  templateUrl: './admin-reports.component.html',
  styleUrls: ['./admin-reports.component.css']
})
export class AdminReportsComponent implements OnInit, AfterContentInit {

  @ViewChild("baseChart") chart: BaseChartDirective;
  totalReservations: number = 0
  startDate: string
  endDate: string
  reportsCubicle: any
  reportsCareer: any
  reportsDivision: any
  reportsDay: any
  reportsExternal: any
  // reportsCompanions: any
  currentDate: Date = new Date()
  pieChartLabelsDivision: string[]
  pieChartDataDivision: number[]
  pieChartLabelsCubicles: string[]
  pieChartDataCubicles: number[]
  pieChartLabelsCareers: string[]
  pieChartDataCareers: number[]
  // pieChartLabelsCompanions: string[]
  // pieChartDataCompanions: number[]
  pieChartLabelsExternal: string[]
  pieChartDataExternal: number[]
  pieChartLabelsDays: string[]
  pieChartDataDays: number[]
  pieChartType: string = 'pie'
  countLabelsCubicles: number
  countLabelsDivision: number
  countLabelsCareers: number
  countLabelsDays: number
  countLabelsExternal: number
  // countLabelsCompanions: number

  constructor(private reportsService: ReportsService, private reservationsService: ReservationsService) {}

  ngOnInit() {
    this.reservationsService.getCount().then(data => {
      this.totalReservations = parseInt(JSON.parse(JSON.stringify(data))._body)
    })
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
          console.log(this.pieChartLabelsDivision)
          // this.sumReservations(this.reportsDivision)
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
          // this.sumReservations(this.reportsCubicle)
        }
      })
      this.reportsService.getByCareer(this.startDate, this.endDate).then(data => {
        if (data) {
          this.reportsCareer = data
          this.pieChartLabelsCareers = []
          this.pieChartDataCareers = []
          this.insertChartItems(this.reportsCareer, this.pieChartLabelsCareers, this.pieChartDataCareers)
          this.countLabelsCareers = this.pieChartDataCareers.length
          // this.sumReservations(this.reportsCareer)
        }
      })
      this.reportsService.getByExternal(this.startDate, this.endDate).then(data => {
        if (data) {
          this.reportsExternal = data
          console.log(data)
          this.pieChartLabelsExternal = []
          this.pieChartDataExternal = []
          this.insertChartItems(this.reportsExternal, this.pieChartLabelsExternal, this.pieChartDataExternal)
          this.countLabelsExternal = this.pieChartDataExternal.length
        }
      })
      // this.reportsService.getByCareerCompanions(this.startDate, this.endDate).then(data => {
      //   if (data) {
      //     let array = new Array()
      //     data.forEach(el => {
      //       array.push(el._id)
      //     })
      //     this.reportsCompanions = array
      //     this.pieChartLabelsCompanions = []
      //     this.pieChartDataCompanions = []
      //     this.insertChartItemsCompanions(this.reportsCompanions, this.pieChartLabelsCompanions, this.pieChartDataCompanions)
      //     this.countLabelsCompanions = this.pieChartDataCompanions.length
      //     // this.sumReservations(this.reportsCareer)
      //   }
      // })
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
          // this.sumReservations(this.reportsDay)
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

  // insertChartItemsCompanions(object, labels, data) {
  //   object.forEach(element => {
  //     element.careers.forEach(careers => {
  //       labels.push(careers)
  //     });
  //     element.cantidad.forEach(count => {
  //       data.push(count)
  //     })
  //   })
  // }

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

    let labelsExternalClone = this.pieChartLabelsExternal
    let dataExternalClone = this.pieChartDataExternal
    let itemsExternal = []

    // let labelsCompanionsClone = this.pieChartLabelsCompanions
    // let dataCompanionsClone = this.pieChartDataCompanions
    // let itemsCompanions = []

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
          console.log('Reportes por carrera')
          console.log(data)
          this.reportsCareer = data
          this.insertChartItems(this.reportsCareer, itemsCareers, dataCareersClone)
          dataCareersClone.splice(0, this.countLabelsCareers)
          this.countLabelsCareers = dataCareersClone.length
          labelsCareersClone = itemsCareers
          this.pieChartLabelsCareers = labelsCareersClone
          this.pieChartDataCareers = dataCareersClone
        }
      })
      this.reportsService.getByExternal(this.startDate, this.endDate).then(data => {
        if (data) {
          this.reportsExternal = data
          this.insertChartItems(this.reportsExternal, itemsExternal, dataExternalClone)
          dataExternalClone.splice(0, this.countLabelsExternal)
          this.countLabelsExternal = dataExternalClone.length
          labelsExternalClone = itemsExternal
          this.pieChartLabelsExternal = labelsExternalClone
          this.pieChartDataExternal = dataExternalClone
        }
      })
      // this.reportsService.getByCareerCompanions(this.startDate, this.endDate).then(data => {
      //   if (data) {
      //     console.log('Reportes por acompanantes')
      //     let array = new Array()
      //     data.forEach(el => {
      //       array.push(el._id)
      //     })
      //     console.log(array)
      //     this.reportsCompanions = array
      //     this.insertChartItemsCompanions(this.reportsCompanions, itemsCompanions, dataCompanionsClone)
      //     dataCompanionsClone.splice(0, this.countLabelsCompanions)
      //     this.countLabelsCompanions = dataCompanionsClone.length
      //     labelsCompanionsClone = itemsCompanions
      //     this.pieChartLabelsCompanions = labelsCompanionsClone
      //     this.pieChartDataCompanions = dataCompanionsClone
      //   }
      // })
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
