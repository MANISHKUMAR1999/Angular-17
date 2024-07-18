import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrewMemberComponent } from './crew-member/crew-member.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CrewMemberComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'crew-management';
}
