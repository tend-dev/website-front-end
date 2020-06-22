import { Component, OnInit } from '@angular/core';

export interface WhyChoose {
  imageAligned?: boolean;
  image: string;
  title: string;
  content: string;
}

const WCH_ITEMS: WhyChoose[] = [
  {
    imageAligned: true,
    image: '/assets/img/why-us/why-01.svg',
    title: 'Low package costs and hourly rates of service',
    content: 'Other providers may offer a low package cost or low hourly rates of care but only Tend offers both. We combine our competitive package costs with the best prices for in home services.   Our home care service rates, for example, start at $49 - a good 10-20% cheaper than most other providers. Our clients know that quality in-home services don’t have to be expensive.',
  },
  {
    imageAligned: true,
    image: '/assets/img/why-us/why-02.svg',
    title: 'Care management expertise',
    content: 'At other providers, care managers just advise which services are right for you. At Tend, we give you choice, and so our care managers advise on what services are best for you and also which service providers would be best suited.  Through constant feedback from our clients, our Care Managers build up knowledge about all of our service providers. That expertise is something that only comes from exposure to different service providers and it only happens at Tend',
  },
  {
    image: '/assets/img/why-us/why-03.svg',
    title: 'Choice of leading service providers',
    content: 'Consumer Directed Care only happens when you are offered choice. We make that choice easy for you by sourcing the best in home services - whether it be home care or home cleaning or allied health or gardening. And while there are many great service providers out there, only a few can do it at the right price.',
  }
];

@Component({
  selector: 'app-why-choose',
  templateUrl: './why-choose.component.html',
  styleUrls: ['./why-choose.component.scss']
})
export class WhyChooseComponent implements OnInit {
  items: WhyChoose[];

  constructor() { }

  ngOnInit(): void {
    this.items = WCH_ITEMS;
  }

}
