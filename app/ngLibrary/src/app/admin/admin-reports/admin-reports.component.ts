import { Component, OnInit, ViewChild } from '@angular/core';
import { ReportsService } from '../../services/reports/reports.service';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { ReservationsService } from '../../services/reservations/reservations.service';
import { DepartmentsService } from '../../services/departments/departments.service';
import { CareersService } from '../../services/careers/careers.service';
import { CareerModel } from '../../models/career.model';

@Component({
  selector: 'app-admin-reports',
  templateUrl: './admin-reports.component.html',
  styleUrls: ['./admin-reports.component.css']
})
export class AdminReportsComponent implements OnInit {

  @ViewChild("baseChart") chart: BaseChartDirective;
  totalReservations: number = 0
  careers: CareerModel[] = []
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
  reportsCompanionsCareer: any = []
  reportsCompanionsDepartment: any = []
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
  pieChartLabelsCompanionsCareer: string[]
  pieChartDataCompanionsCareer: number[]
  pieChartLabelsCompanionsDep: string[]
  pieChartDataCompanionsDep: number[]
  pieChartLabelsExternal: string[]
  pieChartDataExternal: number[]
  pieChartLabelsDays: string[]
  pieChartDataDays: Array<any> = [
    {data: [], label: 'Ingresos'}
  ]
  pieChartType: string = 'pie'
  countLabelsCubicles: number
  countLabelsDivision: number
  countLabelsDepartments: number
  countLabelsCareers: number
  countLabelsDays: number
  countLabelsExternal: number
  // countLabelsCompanions: number
  countLabelsCompanionsCareer: number
  countLabelsCompanionsDep: number

  noData: Boolean = true
  // Total sums variables
  totalSumCubicle: number = 0
  totalSumDivision: number = 0
  totalSumCareer: number = 0
  totalSumDepartment: number = 0
  totalSumDay: number = 0
  totalSumExternal: number = 0
  totalSumCompanions: number = 0
  sumCareers: Array<any> = new Array()
  sumDepartments: Array<any> = new Array()


  constructor(private careersService: CareersService, private departmentsService: DepartmentsService, private reportsService: ReportsService, private reservationsService: ReservationsService) {}
  // Execute when component initialize
  ngOnInit() {
    this.reservationsService.getCount().then(data => { // Get the maximun number of reservations
      this.totalReservations = parseInt(JSON.parse(JSON.stringify(data))._body)
    })
    this.careersService.getAll().then(data => {
      data.forEach(e => {
        if (e.active) this.careers.push(e)
      })
    })
  }
// Create name labels and data of each report
  insertChartItems(object, labels, data) {
  let total: number = 0
    object.forEach(element => {
      labels.push(element._id)
      data.push(element.ingresos)
      total += element.ingresos
    })
    return total
  }
  // Execute when search button is clic
  searchReports() {
    console.log(this.endDate)
    let date = new Date(this.endDate)
    console.log(date)
    date.setDate(date.getDate()+1)
    console.log(date)
    let shortDate = date.toISOString().split('T')[0]
    console.log(shortDate)
    this.sumCareers = []
    this.totalSumCompanions = 0
    this.reportsCubicle = []
    this.reportsCareer = []
    this.reportsDivision = []
    this.reportsDepartment = []
    this.reportsDay = []
    this.reportsExternal = []
    this.reportsCompanions = []
    this.reportsCompanionsCareer = []
    this.reportsCompanionsDepartment = []
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
    this.pieChartDataDays = [
      {data: [], label: 'Ingresos'}
    ]
    this.pieChartDataCompanionsCareer = []
    this.pieChartLabelsCompanionsCareer = []
    this.pieChartDataCompanionsDep = []
    this.pieChartLabelsCompanionsDep = []

    // This variables are declare for each reports
    // This is because when you make another reports search
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

    let labelsCompanionsCloneCareer = this.pieChartLabelsCompanionsCareer
    let dataCompanionsCloneCareer = this.pieChartDataCompanionsCareer
    let itemsCompanionsCareer = []

    let labelsCompanionsCloneDep = this.pieChartLabelsCompanionsDep
    let dataCompanionsCloneDep = this.pieChartDataCompanionsDep
    let itemsCompanionsDep = []
    // We declare this variable to set initial properties with the
    // new data and be able to bind it to the template
    // We use it in the companions reports
    this.newArray = []

    if (this.startDate && this.endDate) { // In case dates inputs are fill in
      this.reportsService.getByDivision(this.startDate, this.endDate).then(data => { // Get division data between dates input
        if (data) { // In case data is received
        this.totalSumDivision = 0
          this.reportsDivision = data
          this.pieChartLabelsDivision = []
          this.pieChartDataDivision = []
          if (this.pieChartDataDivision.length == 0) { // In case the array is empty
            this.totalSumDivision = this.insertChartItems(this.reportsDivision, this.pieChartLabelsDivision, this.pieChartDataDivision)
            this.countLabelsDivision = this.pieChartDataDivision.length // We pass the data length to other variable
          } else {
            // We call the method with different variables
            // We have to set another variables to update the labels and data information
            this.totalSumDivision = this.insertChartItems(this.reportsDivision, itemsDivision, dataDivisionClone)
            dataDivisionClone.splice(0, this.countLabelsDivision) // We remove the elements that were in the previous search
            this.countLabelsDivision = dataDivisionClone.length
            labelsDivisionClone = itemsDivision
            this.pieChartLabelsDivision = labelsDivisionClone
            this.pieChartDataDivision = dataDivisionClone
          }
        }
      })
      this.reportsService.getByDepartment(this.startDate, this.endDate).then(data => { // Get department data between dates input
        if (data) { // In case data is received
        this.totalSumDepartment = 0
          this.reportsDepartment = data
          // The departments data are only the departments number
          // Having the departments number we get their departments name
          data.forEach((element, index) => {
            this.departmentsService.getByNumber(element._id).then(data => {
              this.reportsDepartment[index]._id = data.departmentName.concat(` - ${data.departmentCode.toString()}`) // Concatenate department name and department number
            })
          })
          this.pieChartLabelsDepartments = []
          this.pieChartDataDepartments = []
          if (this.pieChartDataDepartments.length == 0) { // In case the array is empty
            this.totalSumDepartment = this.insertChartItems(this.reportsDepartment, this.pieChartLabelsDepartments, this.pieChartDataDepartments)
            this.countLabelsDepartments = this.pieChartDataDepartments.length // We pass the data length to other variable
          } else {
          // We call the method with different variables
          // We have to set another variables to update the labels and data information
            this.totalSumDepartment = this.insertChartItems(this.reportsDepartment, itemsDepartment, dataDepartmentClone)
            dataDepartmentClone.splice(0, this.countLabelsDepartments) // We remove the elements that were in the previous search
            this.countLabelsDepartments = dataDepartmentClone.length
            labelsDepartmentClone = itemsDepartment
            this.pieChartLabelsDepartments = labelsDepartmentClone
            this.pieChartDataDepartments = dataDepartmentClone
          }
        }
      })
      this.reportsService.getByCubicle(this.startDate, this.endDate).then(data => { // Get cubicle data between dates input
        if (data) { // In case data is received
          console.log(data)
        this.totalSumCubicle = 0
        this.reportsCubicle = data
        this.pieChartDataCubicles = []
        this.pieChartLabelsCubicles = []
        if (this.pieChartDataCubicles.length == 0) { // In case the array is empty
          // We doesnt call the insertChartItems method because
          // We are concatenate, so we are pushing to the array manually
          data.forEach(element => {
            this.pieChartLabelsCubicles.push(`Cubiculo ${element._id.toString()}`) // Concatenate "Cubiculo" with cubicle number
            this.pieChartDataCubicles.push(element.ingresos)
            this.totalSumCubicle += element.ingresos
          })
          this.countLabelsCubicles = this.pieChartDataCubicles.length // We pass the data length to other variable
        } else {
        // We push to the other array variables the information data
        // We have to set another variables to update the labels and data information
          data.forEach(element => {
            itemsCubicles.push(`Cubiculo ${element._id}`)
            dataCubiclesClone.push(element.ingresos)
            this.totalSumCubicle += element.ingresos
          })
            dataCubiclesClone.splice(0, this.countLabelsCubicles) // We remove the elements that were in the previous search
            this.countLabelsCubicles = labelsCubiclesClone.length
            labelsCubiclesClone = itemsCubicles
            this.pieChartLabelsCubicles = labelsCubiclesClone
            this.pieChartDataCubicles = dataCubiclesClone
          }
        }
      })
      this.reportsService.getByCareer(this.startDate, this.endDate).then(data => { // Get career data between dates input
        if (data) { // In case data is received
        this.totalSumCareer = 0
          this.reportsCareer = data
          console.log(data)
          this.pieChartLabelsCareers = []
          this.pieChartDataCareers = []
          if (this.pieChartDataCareers.length == 0) { // In case the array is empty
            this.totalSumCareer = this.insertChartItems(this.reportsCareer, this.pieChartLabelsCareers, this.pieChartDataCareers)
            this.countLabelsCareers = this.pieChartDataCareers.length // We pass the data length to other variable
          } else {
          // We call the method with different variables
          // We have to set another variables to update the labels and data information
            this.totalSumCareer = this.insertChartItems(this.reportsCareer, itemsCareers, dataCareersClone)
            dataCareersClone.splice(0, this.countLabelsCareers) // We remove the elements that were in the previous search
            this.countLabelsCareers = dataCareersClone.length
            labelsCareersClone = itemsCareers
            this.pieChartLabelsCareers = labelsCareersClone
            this.pieChartDataCareers = dataCareersClone
          }
        }
      })
      this.reportsService.getByCompanionsCareer(this.startDate, this.endDate).then(data => { // Get companions data between dates input
        if (data) { // In case data is received
          console.log(data)
          // this.totalSumCompanions = 0
          let countCompanionsCareer = 0
          // this.reportsCompanions = data
          this.reportsCompanionsCareer = data

          if (this.pieChartDataCareers.length == 0) { // In case the array is empty
            countCompanionsCareer = this.insertChartItems(this.reportsCompanionsCareer, this.pieChartLabelsCompanionsCareer, this.pieChartDataCompanionsCareer)
            this.countLabelsCompanionsCareer = this.pieChartDataCompanionsCareer.length // We pass the data length to other variable
          } else {
          // We call the method with different variables
          // We have to set another variables to update the labels and data information
            countCompanionsCareer = this.insertChartItems(this.reportsCompanionsCareer, itemsCompanionsCareer, dataCompanionsCloneCareer)
            dataCompanionsCloneCareer.splice(0, this.countLabelsCompanionsCareer) // We remove the elements that were in the previous search
            this.countLabelsCompanionsCareer = dataCompanionsCloneCareer.length
            labelsCompanionsCloneCareer = itemsCompanionsCareer
            this.pieChartLabelsCompanionsCareer = labelsCompanionsCloneCareer
            this.pieChartDataCompanionsCareer = dataCompanionsCloneCareer
          }

          this.totalSumCompanions += countCompanionsCareer
          }
      })
      this.reportsService.getByCompanionsDepartment(this.startDate, this.endDate).then(data => { // Get companions data between dates input
        if (data) { // In case data is received
          console.log(data)
          let countCompanionsDepartment = 0
          this.reportsCompanionsDepartment = data

          if (this.pieChartDataDepartments.length == 0) { // In case the array is empty
            countCompanionsDepartment = this.insertChartItems(this.reportsCompanionsDepartment, this.pieChartLabelsCompanionsDep, this.pieChartDataCompanionsDep)
            this.countLabelsCompanionsDep = this.pieChartDataCompanionsDep.length // We pass the data length to other variable
          } else {
          // We call the method with different variables
          // We have to set another variables to update the labels and data information
            countCompanionsDepartment = this.insertChartItems(this.reportsCompanionsDepartment, itemsCompanionsDep, dataCompanionsCloneDep)
            dataCompanionsCloneDep.splice(0, this.countLabelsCompanionsDep) // We remove the elements that were in the previous search
            this.countLabelsCompanionsDep = dataCompanionsCloneDep.length
            labelsCompanionsCloneDep = itemsCompanionsDep
            this.pieChartLabelsCompanionsDep = labelsCompanionsCloneDep
            this.pieChartDataCompanionsDep = dataCompanionsCloneDep
          }

          this.pieChartLabelsCompanions = this.pieChartLabelsCompanionsCareer.concat(this.pieChartLabelsCompanionsDep)
          this.pieChartDataCompanions = this.pieChartDataCompanionsCareer.concat(this.pieChartDataCompanionsDep)

          this.totalSumCompanions += countCompanionsDepartment
          this.reportsCompanions = this.reportsCompanionsCareer.concat(this.reportsCompanionsDepartment)
          }
      })
      this.reportsService.getByExternal(this.startDate, this.endDate).then(data => { // Get external users data between dates input
        if (data) { // In case data is received
        this.totalSumExternal = 0
          this.reportsExternal = data
          this.pieChartLabelsExternal = []
          this.pieChartDataExternal = []
          if (this.pieChartDataExternal.length == 0) { // In case the array is empty
            this.totalSumExternal = this.insertChartItems(this.reportsExternal, this.pieChartLabelsExternal, this.pieChartDataExternal)
            this.countLabelsExternal = this.pieChartDataExternal.length // We pass the data length to other variable
          } else {
          // We call the method with different variables
          // We have to set another variables to update the labels and data information
            this.totalSumExternal = this.insertChartItems(this.reportsExternal, itemsExternal, dataExternalClone)
            dataExternalClone.splice(0, this.countLabelsExternal) // We remove the elements that were in the previous search
            this.countLabelsExternal = dataExternalClone.length
            labelsExternalClone = itemsExternal
            this.pieChartLabelsExternal = labelsExternalClone
            this.pieChartDataExternal = dataExternalClone
          }
        }
      })
      this.reportsService.getByDay(this.startDate, this.endDate).then(data => { // Get per day data between dates input
        if (data) { // In case data is received
          this.totalSumDay = 0
          this.reportsDay = data
          this.pieChartLabelsDays = []
          this.pieChartDataDays = [
            {data: [], label: 'Ingresos'}
          ]
          if (this.pieChartDataDays[0].data.length == 0) { // In case the array is empty
            this.totalSumDay = this.insertChartItems(this.reportsDay, this.pieChartLabelsDays, this.pieChartDataDays[0].data)
            this.countLabelsDays = this.pieChartDataDays[0].data.length // We pass the data length to other variable
          } else {
          // We add data manually
          // We have to set another variables to update the labels and data information
            data.forEach(element => {
              itemsDays.push(element._id)
              dataDaysClone.push(element.ingresos)
              this.totalSumDay += element.ingresos
            })
            dataDaysClone.splice(0, this.countLabelsDays) // We remove the elements that were in the previous search
            this.countLabelsDays = dataDaysClone.length
            labelsDaysClone = itemsDays
            this.pieChartLabelsDays = labelsDaysClone
            this.pieChartDataDays[0].data = dataDaysClone
          }
        }
      })
    }
  }

}
