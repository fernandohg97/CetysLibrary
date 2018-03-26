// Employee model
// The '_id' is a property that it generates automatically.
// But we have to declare in this model to be able to use it.
export class EmployeeModel {
  _id: String;
  employeeNumber: number;
  name: String;
  department: number;
  active: Boolean;
}
