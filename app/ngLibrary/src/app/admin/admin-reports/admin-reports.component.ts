import { Component, OnInit, ViewChild } from '@angular/core';
import { ReportsService } from '../../services/reports/reports.service';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { ReservationsService } from '../../services/reservations/reservations.service';
import { DepartmentsService } from '../../services/departments/departments.service';

@Component({
  selector: 'app-admin-reports',
  templateUrl: './admin-reports.component.html',
  styleUrls: ['./admin-reports.component.css']
})
export class AdminReportsComponent implements OnInit {

  @ViewChild("baseChart") chart: BaseChartDirective;
  totalReservations: number = 0
  startDate: string
  endDate: string
  startDate2: string
  endDate2: string
  dateForDay: string
  endDateForDay: string
  reportsCubicle: any = []
  reportsCareer: any = []
  reportsDivision: any = []
  reportsDepartment: any = []
  reportsDay: any = []
  reportsExternal: any = []
  reportsCompanions: any = []
  reportsCompanionsQuantity: any = []
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
  noData: Boolean = true

  constructor(private departmentsService: DepartmentsService, private reportsService: ReportsService, private reservationsService: ReservationsService) {}

  ngOnInit() {
    this.reservationsService.getCount().then(data => {
      this.totalReservations = parseInt(JSON.parse(JSON.stringify(data))._body)
    })
  }

  insertChartItems(object, labels, data) {
    object.forEach(element => {
      labels.push(element._id)
      data.push(element.ingresos)
    })
  }

  searchReports() {
    let date = new Date(this.endDate)
    date.setDate(date.getDate()+1)
    let shortDate = date.toISOString().split('T')[0]
    this.reportsCubicle = []
    this.reportsCareer = []
    this.reportsDivision = []
    this.reportsDepartment = []
    this.reportsDay = []
    this.reportsExternal = []
    this.reportsCompanions = []
    this.reportsCompanionsQuantity = []
    this.newArray = new Array()
    this.pieChartLabelsDivision = []
    this.pieChartDataDivision = []
    this.pieChartLabelsDepartments = []
    this.pieChartDataDepartments = []
    this.pieChartDataCubicles = []
    this.pieChartLabelsCubicles = []
    this.pieChartLabelsCareers = []
    this.pieChartDataCareers = []
    this.pieChartLabelsExternal = []
    this.pieChartDataExternal = []
    this.pieChartLabelsDays = []
    this.pieChartDataDays = []
    this.pieChartDataCompanions = []
    this.pieChartLabelsCompanions = []

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
      this.reportsService.getByDivision(this.startDate, shortDate).then(data => {
        if (data) {
          this.reportsDivision = data
          this.pieChartLabelsDivision = []
          this.pieChartDataDivision = []
          if (this.pieChartDataDivision.length == 0) {
            this.insertChartItems(this.reportsDivision, this.pieChartLabelsDivision, this.pieChartDataDivision)
            this.countLabelsDivision = this.pieChartDataDivision.length
          } else {
            this.insertChartItems(this.reportsDivision, itemsDivision, dataDivisionClone)
            dataDivisionClone.splice(0, this.countLabelsDivision)
            this.countLabelsDivision = dataDivisionClone.length
            labelsDivisionClone = itemsDivision
            this.pieChartLabelsDivision = labelsDivisionClone
            this.pieChartDataDivision = dataDivisionClone
          }
        }
      })
      this.reportsService.getByDepartment(this.startDate, shortDate).then(data => {
        if (data) {
          this.reportsDepartment = data
          data.forEach((element, index) => {
            this.departmentsService.getByNumber(element._id).then(data => {
              this.reportsDepartment[index]._id = data.departmentName.concat(` - ${data.departmentCode.toString()}`)
            })
          })
          this.pieChartLabelsDepartments = []
          this.pieChartDataDepartments = []
          if (this.pieChartDataDepartments.length == 0) {
            this.insertChartItems(this.reportsDepartment, this.pieChartLabelsDepartments, this.pieChartDataDepartments)
            this.countLabelsDepartments = this.pieChartDataDepartments.length
          } else {
            this.insertChartItems(this.reportsDepartment, itemsDepartment, dataDepartmentClone)
            dataDepartmentClone.splice(0, this.countLabelsDepartments)
            this.countLabelsDepartments = dataDepartmentClone.length
            labelsDepartmentClone = itemsDepartment
            this.pieChartLabelsDepartments = labelsDepartmentClone
            this.pieChartDataDepartments = dataDepartmentClone
          }
        }
      })
      this.reportsService.getByCubicle(this.startDate, shortDate).then(data => {
        if (data) {
        this.reportsCubicle = data
        this.pieChartDataCubicles = []
        this.pieChartLabelsCubicles = []
        if (this.pieChartDataCubicles.length == 0) {
          data.forEach(element => {
            this.pieChartLabelsCubicles.push(`Cubiculo ${element._id.toString()}`)
            this.pieChartDataCubicles.push(element.ingresos)
          })
          this.countLabelsCubicles = this.pieChartDataCubicles.length
        } else {
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
        }
      })
      this.reportsService.getByCareer(this.startDate, shortDate).then(data => {
        if (data) {
          this.reportsCareer = data
          this.pieChartLabelsCareers = []
          this.pieChartDataCareers = []
          if (this.pieChartDataCareers.length == 0) {
            this.insertChartItems(this.reportsCareer, this.pieChartLabelsCareers, this.pieChartDataCareers)
            this.countLabelsCareers = this.pieChartDataCareers.length
          } else {
            this.insertChartItems(this.reportsCareer, itemsCareers, dataCareersClone)
            dataCareersClone.splice(0, this.countLabelsCareers)
            this.countLabelsCareers = dataCareersClone.length
            labelsCareersClone = itemsCareers
            this.pieChartLabelsCareers = labelsCareersClone
            this.pieChartDataCareers = dataCareersClone
          }
        }
      })
      this.reportsService.getByCompanions(this.startDate, shortDate).then(data => {
        if (data) {
          let k = 0
          console.log(data)
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
                    // In case label is repeated dont include it in array, the number of incomes will be added
                    // if (value != this.newArray[k-1].labels) {
                      this.newArray.splice(k,0,{labels: value})
                    // }
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
                    // if (value != this.newArray[k-1].labels) {
                      this.newArray.splice(k,0,{labels: value})
                    // }
                  }
                  this.pieChartLabelsCompanions.push(value)
                  itemsCompanions.push(value)
                  k++
                })
              }
          })
          this.reportsService.getByQuantityCompanions(this.startDate, shortDate).then(data => {
            if (data) {
              let j = 0
              this.reportsCompanionsQuantity = data
              this.pieChartDataCompanions = []
              if (this.pieChartDataCompanions.length == 0) {
                for (let i = 0; i < this.reportsCompanionsQuantity.length; i++) {
                    this.reportsCompanionsQuantity[i]._id.forEach((element, index) => {
                      this.newArray[j].ingresos = element
                      this.pieChartDataCompanions.push(element)
                      j++
                    });
                }
                this.countLabelsCompanions = this.pieChartDataCompanions.length
              } else {
                for (let i = 0; i < this.reportsCompanionsQuantity.length; i++) {
                    this.reportsCompanionsQuantity[i]._id.forEach((element, index) => {
                      this.newArray[j].ingresos = element
                      dataCompanionsClone.push(element)
                      j++
                    });
                }
                dataCompanionsClone.splice(0, this.countLabelsCompanions)
                this.countLabelsCompanions = labelsCompanionsClone.length
                labelsCompanionsClone = itemsCompanions
                this.pieChartLabelsCompanions = labelsCompanionsClone
                this.pieChartDataCompanions = dataCompanionsClone
              }
            }
          })
        }
      })

      this.reportsService.getByExternal(this.startDate, shortDate).then(data => {
        if (data) {
          this.reportsExternal = data
          this.pieChartLabelsExternal = []
          this.pieChartDataExternal = []
          if (this.pieChartDataExternal.length == 0) {
            this.insertChartItems(this.reportsExternal, this.pieChartLabelsExternal, this.pieChartDataExternal)
            this.countLabelsExternal = this.pieChartDataExternal.length
          } else {
            this.insertChartItems(this.reportsExternal, itemsExternal, dataExternalClone)
            dataExternalClone.splice(0, this.countLabelsExternal)
            this.countLabelsExternal = dataExternalClone.length
            labelsExternalClone = itemsExternal
            this.pieChartLabelsExternal = labelsExternalClone
            this.pieChartDataExternal = dataExternalClone
          }
        }
      })
      this.reportsService.getByDay(this.startDate, this.endDate).then(data => {
        if (data) {
          this.reportsDay = data
          this.pieChartLabelsDays = []
          this.pieChartDataDays = []
          if (this.pieChartDataDays.length == 0) {
            this.insertChartItems(this.reportsDay, this.pieChartLabelsDays, this.pieChartDataDays)
            this.countLabelsDays = this.pieChartDataDays.length
          } else {
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
        }
      })
    }
  }

}
