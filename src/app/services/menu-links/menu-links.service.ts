import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { MenuLink } from '@app/models/menu-link.interface';

const MENU_LINKS: MenuLink[] = [
  {
    anchor: 'What we do',
    href: '/home',
    fragment: 'what-we-do',
  },
  {
    anchor: 'Our services',
    href: '/home',
    fragment: 'services',
  },
  {
    anchor: 'Why choose Tend?',
    href: '/home',
    fragment: 'why-choose',
  },
  {
    anchor: 'FAQ',
    href: '/home',
    fragment: 'faq',
  },
  {
    anchor: 'About us',
    href: '/about-us',
  },
];

@Injectable({
  providedIn: 'root'
})
export class MenuLinksService {
  private linksSubj: Subject<MenuLink[]> = new BehaviorSubject([]);
  links$ = this.linksSubj.asObservable();

  constructor() {
    this.linksSubj.next(MENU_LINKS);
  }
}
