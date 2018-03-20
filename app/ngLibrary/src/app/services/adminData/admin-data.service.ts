import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ElementType } from '../../enums/element-type.enum';

@Injectable()
export class AdminDataService {

  element: ElementType
  private elementSource = new BehaviorSubject<ElementType>(this.element)
  curentElement = this.elementSource.asObservable()

  id: string
  private idSource = new BehaviorSubject<string>(this.id)
  curentId = this.idSource.asObservable()

  constructor() { }

  public getCurrentElement(): ElementType {
    return this.element
  }

  public changeElement(message: ElementType) {
    this.element = message
    this.elementSource.next(this.element)
  }

  public getCurrentId(): string {
    return this.id
  }

  public changeId(message: string) {
    this.id = message
    this.idSource.next(this.id)
  }

}
