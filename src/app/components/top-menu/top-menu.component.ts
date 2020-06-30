import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';

import { ContactService } from '@services/contact.service';
import { MenuLinksService } from '@services/menu-links/menu-links.service';
import { MenuLink } from '@models/menu-link.interface';


@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {
  menuLinks$: Observable<MenuLink[]> = this.menuLinksService.links$;

  constructor(
    private dialog: MatDialog,
    private contactService: ContactService,
    private menuLinksService: MenuLinksService
  ) {}

  openDialog(): void {
    this.contactService.openDialog();
  }

  openModalMenu(): void {
    const dialogRef = this.dialog.open(MobileMenuComponent, {
      position: {right: '0', top: '0'},
      panelClass: 'app-mobile-menu-class',
      width: '100%',
      maxWidth: '100%',
    });
  }
}
