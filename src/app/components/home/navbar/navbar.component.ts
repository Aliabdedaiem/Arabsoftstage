import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;
  constructor(private router: Router) {}

  ngOnInit() {
      this.items = [
          {
              label: 'Home',
              icon: 'pi pi-home',
              command: () => {
                this.router.navigate(['/home']); }          },
          {
              label: 'Offre D’emploi',
              icon: 'pi pi-star',
              command: () => {
                this.router.navigate(['/offers']); }     
                },
          {
              label: 'Recrutement',
              icon: 'pi pi-search',
              items: [
                  {
                      label: 'Espace Entreprise',
                      icon: 'pi pi-bolt',
                      command: () => {
                        this.router.navigate(['/espentrprise']); }               },
                  {
                      label: 'Espace Condidat',
                      icon: 'pi pi-server',
                      command: () => {
                        this.router.navigate(['/home']); }                 },
                
                  {
                      separator: true
                  },
                  {
                      label: 'Templates',
                      icon: 'pi pi-palette',
                      items: [
                          {
                              label: 'Apollo',
                              icon: 'pi pi-palette',
                              badge: '2'
                          },
                          {
                              label: 'Ultima',
                              icon: 'pi pi-palette',
                              badge: '3'
                          }
                      ]
                  }
              ]
          },
          {
              label: 'Contact',
              icon: 'pi pi-envelope',
              badge: '3',
              command: () => {
                this.router.navigate(['/contact']); }
              
          }
      ];
  }
}
