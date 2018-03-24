import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ElementType } from '../../enums/element-type.enum';

@Injectable()
export class AdminDataService {

  element: ElementType // declare element
  private elementSource = new BehaviorSubject<ElementType>(this.element)
  curentElement = this.elementSource.asObservable()

  id: string // declare id
  private idSource = new BehaviorSubject<string>(this.id)
  curentId = this.idSource.asObservable()

  constructor() { }

  public getCurrentElement(): ElementType { // get current element type selected
    return this.element
  }

  public changeElement(message: ElementType) { // change element type
    this.element = message
    this.elementSource.next(this.element)
  }

  public getCurrentId(): string { // get current id
    return this.id
  }

  public changeId(message: string) { // change id
    this.id = message
    this.idSource.next(this.id)
  }

}
