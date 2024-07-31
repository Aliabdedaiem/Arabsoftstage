import { Component } from '@angular/core';
import { NavbarComponent } from '../home/navbar/navbar.component';
import { FooterComponent } from '../home/footer/footer.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-espace-entreprise',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,ButtonModule],
  templateUrl: './espace-entreprise.component.html',
  styleUrl: './espace-entreprise.component.css'
})
export class EspaceEntrepriseComponent {

}
