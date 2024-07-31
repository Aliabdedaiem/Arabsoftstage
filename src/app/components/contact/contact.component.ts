import { Component } from '@angular/core';
import { NavbarComponent } from '../home/navbar/navbar.component';
import { Footer } from 'primeng/api';
import { FooterComponent } from '../home/footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
