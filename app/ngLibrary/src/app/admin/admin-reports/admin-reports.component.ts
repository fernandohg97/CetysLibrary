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
  startDate2: string
  endDate2: string
  dateForDay: string
  endDateForDay: string
  reportsCubicle: any
  reportsCareer: any
  reportsDivision: any
  reportsDepartment: any
  reportsDay: any
  reportsExternal: any
  reportsCompanions: any
  reportsCompanionsQuantity: any
  newArray: Array<any> = new Array()
  currentDate: Date = new Date()
  pieChartLabelsDivision: string[]
  pieChartDataDivision: number[]
  pieChartLabelsDepartments: string[]
  pieChartDataDepartments: number[]
  pieChartLabelsCubicles: string[]
  pieChartDataCubicles: number[]
  pieChartLabelsCareers: string[]
  pieChartDataCareers: number[]
  pieChartLabelsCompanions: string[]
  pieChartDataCompanions: number[]
  pieChartLabelsExternal: string[]
  pieChartDataExternal: number[]
  pieChartLabelsDays: string[]
  pieChartDataDays: number[]
  pieChartType: string = 'pie'
  countLabelsCubicles: number
  countLabelsDivision: number
  countLabelsDepartments: number
  countLabelsCareers: number
  countLabelsDays: number
  countLabelsExternal: number
  countLabelsCompanions: number

  constructor(private reportsService: ReportsService, private reservationsService: ReservationsService) {}

  ngOnInit() {
    console.log(this.reportsCubicle)
    this.reservationsService.getCount().then(data => {
      this.totalReservations = parseInt(JSON.parse(JSON.stringify(data))._body)
    })
    let dayNumber = this.currentDate.getDate()
    let day = this.currentDate.getDate().toString()
    let month = this.currentDate.getMonth()+1
    let year = this.currentDate.getFullYear()
    let month2 = this.currentDate.getMonth()+2

    let time = this.currentDate.getTime()
    console.log(time)
    dayNumber += 1
    let theDay = dayNumber.toString()
    if (parseInt(day) >= 1 && parseInt(day) <= 9) {
      day = '0' + day
    }
    if (month >= 1 && month <= 9) {
      this.dateForDay = `${year}-0${month}-${dayNumber}`
      this.startDate = `${year}-0${month}-${day}`
      this.startDate2 = `${year}-0${month}-${day}T08:00:00.000Z`
    } else {
      this.dateForDay = `${year}-${month}-${dayNumber}`
      this.startDate = `${year}-${month}-${day}`
      this.startDate2 = `${year}-0${month}-${day}T08:00:00.000Z`
    }

    if (month2 >= 13) {
      month2 = 1
      year = year+1
    }
    if (month2 >= 1 && month2 <= 9) {
      this.endDateForDay = `${year}-0${month}-${dayNumber}`
      this.endDate = `${year}-0${month2}-${day}`
      this.endDate2 = `${year}-0${month2}-${day}T08:00:00.000Z`

    } else {
      this.endDateForDay = `${year}-${month}-${dayNumber}`
      this.endDate = `${year}-${month2}-${day}`
      this.endDate2 = `${year}-${month2}-${day}T08:00:00.000Z`
    }
  }

  ngAfterContentInit() {
    console.log(`${this.startDate2}, ${this.endDate2}`)
    console.log(`${this.startDate}, ${this.endDate}`)
    if (this.startDate && this.endDate) {
      this.reportsService.getByDivision(this.startDate2, this.endDate2).then(data => {
        if (data) {
          this.reportsDivision = data
          this.pieChartLabelsDivision = []
          this.pieChartDataDivision = []
          this.insertChartItems(this.reportsDivision, this.pieChartLabelsDivision, this.pieChartDataDivision)
          this.countLabelsDivision = this.pieChartDataDivision.length
        }
      })
      this.reportsService.getByDepartment(this.startDate2, this.endDate2).then(data => {
        if (data) {
          this.reportsDepartment = data
          console.log(data)
          this.pieChartLabelsDepartments = []
          this.pieChartDataDepartments = []
          this.insertChartItems(this.reportsDepartment, this.pieChartLabelsDepartments, this.pieChartDataDepartments)
          this.countLabelsDepartments = this.pieChartDataDepartments.length
        }
      })
      this.reportsService.getByCubicle(this.startDate2, this.endDate2).then(data => {
        if (data) {
          this.reportsCubicle = data
          this.pieChartDataCubicles = []
          this.pieChartLabelsCubicles = []
          data.forEach(element => {
            this.pieChartLabelsCubicles.push(`Cubiculo ${element._id.toString()}`)
            this.pieChartDataCubicles.push(element.ingresos)
          })
          this.countLabelsCubicles = this.pieChartDataCubicles.length
        }
      })
      this.reportsService.getByCareer(this.startDate2, this.endDate2).then(data => {
        if (data) {
          this.reportsCareer = data
          this.pieChartLabelsCareers = []
          this.pieChartDataCareers = []
          console.log(data)
          this.insertChartItems(this.reportsCareer, this.pieChartLabelsCareers, this.pieChartDataCareers)
          this.countLabelsCareers = this.pieChartDataCareers.length
        }
      })
      this.reportsService.getByCompanions(this.startDate2, this.endDate2).then(data => {
        if (data) {
          let k = 0
          this.reportsCompanions = data
          this.pieChartLabelsCompanions = []
          this.reportsCompanions.forEach(element => {
              if (element._id.userCareers.length > 0) {
                element._id.userCareers.forEach((value, ind) => {
                  if (this.newArray.length == 0) {
                    this.newArray.push({
                      labels: value
                    })
                  } else { this.newArray.splice(k,0,{labels: value}) }
                  this.pieChartLabelsCompanions.push(value)
                  k++
                })
              }
              if (element._id.userDepartments.length > 0) {
                element._id.userDepartments.forEach((value, ind) => {
                  if (this.newArray.length == 0) {
                    this.newArray.push({
                      labels: value
                    })
                  } else {
                    this.newArray.splice(k,0,{labels: value})
                  }
                  this.pieChartLabelsCompanions.push(value)
                  k++
                })
              }
              console.log(this.pieChartLabelsCompanions)
              console.log(this.newArray)
          })
        }
      })
      this.reportsService.getByQuantityCompanions(this.startDate2, this.endDate2).then(data => {
        if (data) {
          let j = 0
          this.reportsCompanionsQuantity = data
          this.pieChartDataCompanions = []
          for (let i = 0; i < this.reportsCompanionsQuantity.length; i++) {
              this.reportsCompanionsQuantity[i]._id.forEach((element, index) => {
                this.newArray[j].ingresos = element
                this.pieChartDataCompanions.push(element)
                j++
              });
          }
          // this.reportsCompanionsQuantity.forEach((element) => {
          //   element._id.forEach((el, ind) => {
          //     this.newArray[ind].ingresos = el
          //     this.pieChartDataCompanions.push(el)
          //   });
          // })
          console.log(this.pieChartDataCompanions)
          console.log(this.newArray)
          this.countLabelsCompanions = this.pieChartDataCompanions.length
        }
      })
      this.reportsService.getByExternal(this.startDate2, this.endDate2).then(data => {
        if (data) {
          this.reportsExternal = data
          this.pieChartLabelsExternal = []
          this.pieChartDataExternal = []
          this.insertChartItems(this.reportsExternal, this.pieChartLabelsExternal, this.pieChartDataExternal)
          this.countLabelsExternal = this.pieChartDataExternal.length
        }
      })
      this.reportsService.getByDay(this.startDate, this.endDate).then(data => {
        if (data) {
          // data.forEach(element => {
          //   element._id = new Date(element._id)
          // })
          this.reportsDay = data
          console.log(this.reportsDay)
          this.pieChartLabelsDays = []
          this.pieChartDataDays = []
          this.insertChartItems(this.reportsDay, this.pieChartLabelsDays, this.pieChartDataDays)
          // data.forEach(element => {
          //   this.pieChartLabelsDays.push(element._id)
          //   this.pieChartDataDays.push(element.ingresos)
          // })
          this.countLabelsDays = this.pieChartDataDays.length
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

    let labelsDepartmentClone = this.pieChartLabelsDepartments
    let dataDepartmentClone = this.pieChartDataDepartments
    let itemsDepartment = []

    let labelsExternalClone = this.pieChartLabelsExternal
    let dataExternalClone = this.pieChartDataExternal
    let itemsExternal = []

    let labelsCompanionsClone = this.pieChartLabelsCompanions
    let dataCompanionsClone = this.pieChartDataCompanions
    let itemsCompanions = []
    this.newArray = []

    if (this.startDate && this.endDate) {
      // this.startDate = this.startDate + 'T08:00:00.000Z'
      // this.endDate = this.endDate + 'T08:00:00.000Z'
      console.log(this.startDate)
      console.log(this.endDate)
      this.reportsService.getByDivision(this.startDate, this.endDate).then(data => {
        if (data) {
          console.log(data)
          this.reportsDivision = data
          this.insertChartItems(this.reportsDivision, itemsDivision, dataDivisionClone)
          dataDivisionClone.splice(0, this.countLabelsDivision)
          this.countLabelsDivision = dataDivisionClone.length
          labelsDivisionClone = itemsDivision
          this.pieChartLabelsDivision = labelsDivisionClone
          this.pieChartDataDivision = dataDivisionClone
        }
      })
      this.reportsService.getByDepartment(this.startDate, this.endDate).then(data => {
        if (data) {
          this.reportsDepartment = data
          this.insertChartItems(this.reportsDepartment, itemsDepartment, dataDepartmentClone)
          dataDepartmentClone.splice(0, this.countLabelsDepartments)
          this.countLabelsDepartments = dataDepartmentClone.length
          labelsDepartmentClone = itemsDepartment
          this.pieChartLabelsDepartments = labelsDepartmentClone
          this.pieChartDataDepartments = dataDepartmentClone
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
      this.reportsService.getByCompanions(this.startDate, this.endDate).then(data => {
        if (data) {
          let k = 0
          // data.forEach(element => {
          //   element._id.forEach((el, index) => {
          //     itemsCompanions.push(el)
          //     this.newArray.push({
          //       careers: el
          //     })
          //   })
          // })
          this.reportsCompanions = data
          this.reportsCompanions.forEach(element => {
              if (element._id.userCareers.length > 0) {
                element._id.userCareers.forEach((value, ind) => {
                  if (this.newArray.length == 0) {
                    this.newArray.push({
                      labels: value
                    })
                  } else {
                    this.newArray.splice(k,0,{labels: value})
                  }
                  this.pieChartLabelsCompanions.push(value)
                  itemsCompanions.push(value)
                  k++
                })
              }
              if (element._id.userDepartments.length > 0) {
                element._id.userDepartments.forEach((value, ind) => {
                  if (this.newArray.length == 0) {
                    this.newArray.push({
                      labels: value
                    })
                  } else {
                    this.newArray.splice(k,0,{labels: value})
                  }
                  this.pieChartLabelsCompanions.push(value)
                  itemsCompanions.push(value)
                  k++
                })
              }
              console.log(this.pieChartLabelsCompanions)
              console.log(this.newArray)
          })
          this.reportsService.getByQuantityCompanions(this.startDate, this.endDate).then(data => {
            if (data) {
              let j = 0
              this.reportsCompanionsQuantity = data
              for (let i = 0; i < this.reportsCompanionsQuantity.length; i++) {
                  this.reportsCompanionsQuantity[i]._id.forEach((element, index) => {
                    this.newArray[j].ingresos = element
                    dataCompanionsClone.push(element)
                    j++
                  });
              }
              // this.reportsCompanionsQuantity.forEach(element => {
              //   element._id.forEach((el, ind) => {
              //     this.newArray[ind].ingresos = el
              //     dataCompanionsClone.push(el)
              //     console.log(dataCompanionsClone)
              //   });
              // })
              dataCompanionsClone.splice(0, this.countLabelsCompanions)
              this.countLabelsCompanions = labelsCompanionsClone.length
              labelsCompanionsClone = itemsCompanions
              console.log(labelsCompanionsClone)
              this.pieChartLabelsCompanions = labelsCompanionsClone
              this.pieChartDataCompanions = dataCompanionsClone
              console.log(this.pieChartLabelsCompanions)
              // console.log(this.pieChartLabelsCompanions)
              // console.log(this.pieChartDataCompanions)

            }
          })
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
      this.reportsService.getByDay(this.startDate, this.endDate).then(data => {
        if (data) {
          this.reportsDay = data
          data.forEach(element => {
            element._id = new Date(element._id).toLocaleDateString()
          })
          data.forEach(element => {
            itemsDays.push(element._id)
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
