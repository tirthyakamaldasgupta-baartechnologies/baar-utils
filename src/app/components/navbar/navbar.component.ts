import { Component } from '@angular/core';
import { UtilsModalComponent } from "../modals/utils-modal/utils-modal.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [UtilsModalComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
