// User (student) model
// The '_id' is a property that it generates automatically.
// But we have to declare in this model to be able to use it.
export class UserModel {
  _id: String;
  name: String;
  registrationNumber: number;
  division: String;
  career: String;
}
