import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Ioffer } from '../../interfaces/offers';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OffersService } from '../../services/offers.service';
import { ToastrService } from 'ngx-toastr'; // Only import the service, not the module
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-offersform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule,DialogModule,ButtonModule],
  templateUrl: './offersform.component.html',
  styleUrls: ['./offersform.component.css'] // Correct the styleUrls property
})
export class OffersformComponent implements OnChanges {
  @Input() data: Ioffer | null = null;
  @Output() onCloseModel: EventEmitter<boolean> = new EventEmitter<boolean>();

  offerForm!: FormGroup;
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
  constructor(
    private fb: FormBuilder,
    private offerservices: OffersService,
  ) {
    this.offerForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      salairy: new FormControl('', [Validators.required]),
      company: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  onClose() {
    this.onCloseModel.emit(false);
  }

  ngOnChanges(): void {
    if (this.data) {
      this.offerForm.patchValue({
        name: this.data.name,
        salairy: this.data.salairy,
        company: this.data.company,
        description: this.data.description,
      });
    }
  }

  onSubmit() {
    if (this.offerForm.valid) {
      if (this.data) {
        this.offerservices
          .updateOffer(this.data._id as string, this.offerForm.value)
          .subscribe({
            next: (response: any) => {
              this.resetOfferForm();
            },
          });
      } else {
        this.offerservices.createOffer(this.offerForm.value).subscribe({
          next: (response: any) => {
            this.resetOfferForm();
          },
        });
      }
    } else {
      this.offerForm.markAllAsTouched();
    }
  }

  resetOfferForm() {
    this.offerForm.reset();
    this.onClose();
  }
}
