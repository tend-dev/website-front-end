import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { ContactFormComponent } from '../contact-form/contact-form.component';
import { ContactService } from '@app/services/contact.service';
import { MenuLinksService } from '@services/menu-links/menu-links.service';
import { MenuLink } from '@models/menu-link.interface';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent {
  menuLinks$: Observable<MenuLink[]> = this.menuLinksService.links$;
  private routePath: string[];
  private fragment: string;
  private linkSub: Subscription;

  constructor(
    private dialogRef: MatDialogRef<ContactFormComponent>,
    private contactService: ContactService,
    private menuLinksService: MenuLinksService,
    private router: Router
  ) {
    this.subscribeToClose();
  }

  subscribeToClose() {
    this.linkSub = this.dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(this.routePath, { fragment: this.fragment });
      this.routePath = null;
      this.fragment = null;
      this.linkSub.unsubscribe();
    })
  }

  openDialog(): void {
    this.contactService.openDialog();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  routeTo({routePath, fragment}: { routePath: string[], fragment: string }) {
    this.routePath = routePath;
    this.fragment = fragment;
  }
}
