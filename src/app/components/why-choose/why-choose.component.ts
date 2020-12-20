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
    title: 'A Pricing Model that is sensible',
    content: 'Most of you will not require full care management services all the time. There will be times when things are going well, services are running smoothly and you are not experiencing any changes in health. Therefore, to charge you 25-35% for care management when you don’t always require that level of service is just not right. <br><br>On the flip side, paying 10-15% for self management carries risks. It is likely that at some point on your aged care journey, you will need more care management services. You will need a care manager that knows you and has a small enough case load of clients to give you proper service. And you will also need a care manager that is always monitoring your services and risks.<br><br>We believe that 17.5% is the right price for flexible care management. ',
  },
  {
    imageAligned: true,
    image: '/assets/img/why-us/why-02.svg',
    title: 'A Care Management Model that constantly meets your needs',
    content: 'Every senior’s needs are different. And your needs will change as your circumstances change. The beauty of our care management model is that it allows total flexibility. You get as much as you need. <br><br>When there is no need to change, we will still be checking in, making sure that the care services are running smoothly and monitoring your risks. <br><br>And when there are changes to your health and circumstances change, we will be there to clincially re-assess and change services as needed. ',
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
