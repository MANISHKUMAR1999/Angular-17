import { Component } from '@angular/core';
import { CrewDesignationComponent } from '../crew-designation/crew-designation.component';

@Component({
  selector: 'app-crew-member',
  standalone: true,
  imports: [CrewDesignationComponent],
  templateUrl: './crew-member.component.html',
  styleUrl: './crew-member.component.scss'
})
export class CrewMemberComponent {
  message:string='Hello world';
  getDataFromChild:string='abc';

  receivingMessage(message:string):void{
    this.getDataFromChild = message


  }

}
