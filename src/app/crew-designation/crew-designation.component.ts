import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-crew-designation',
  standalone: true,
  imports: [],
  templateUrl: './crew-designation.component.html',
  styleUrl: './crew-designation.component.scss'
})
export class CrewDesignationComponent {

  @Input() data:string = '';
  @Output() messageEvent = new EventEmitter<string>()

  sendMessageToParent(event:any){
    this.messageEvent.emit('hello from child data to parent')

  }

}
