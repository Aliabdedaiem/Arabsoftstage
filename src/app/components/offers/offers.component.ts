import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../home/navbar/navbar.component';
import { FooterComponent } from '../home/footer/footer.component';
import { Ioffer } from '../../interfaces/offers';
import { OffersService } from '../../services/offers.service';
import { ToastrService } from 'ngx-toastr';
import { OffersformComponent } from '../offersform/offersform.component';
import { ModelComponent } from '../model/model.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, OffersformComponent, ModelComponent,DialogModule,ButtonModule],
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  isModelOpen = false;
  offers: Ioffer[] = [];
  offer!: Ioffer;
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }

  constructor(
    private offerService: OffersService,

  ) {}

  ngOnInit(): void {
    this.getAllOffer();
  }

  getAllOffer() {
    this.offerService.getAllOffer().subscribe({
      next: (response) => {
        if (response.data) {
          this.offers = response.data;
        }
      },
    });
  }

  loadOffer(offer: Ioffer) {
    this.offer = offer;
    this.openModel();
  }

  deleteOffer(id: string) {
    this.offerService.deleteOffer(id).subscribe({
      next: (response) => {
        this.getAllOffer();
      },
    });
  }

  openModel() {
    this.isModelOpen = true;
  }

  closeModel() {
    this.isModelOpen = false;
    this.getAllOffer();
  }
  trackById(index: number, item: Ioffer): string {
    return item._id ?? 'undefined';
  }
}
