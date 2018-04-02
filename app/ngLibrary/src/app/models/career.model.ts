// Career model
// The '_id' is a property that it generates automatically.
// But we have to declare in this model to be able to use it.
export class CareerModel {
  _id: String;
  careerCode: String;
  careerName: String;
  division: String;
  area: String;
  active: Boolean;
}
