import { Component, OnInit } from '@angular/core';

export interface TendService {
  iconPath: string;
  title: string;
  content: string;
}

const TEND_SERVICES: TendService[] = [
  {
    iconPath: '/assets/img/services/s-01.svg',
    title: 'Allied Health and Nursing',
    content: 'In accordance with your care plan, we will introduce you with the top health professionals including;  nurses, continence nurses, palliative care nurses, dementia specialists, physiotherapists, occupational therapists, dieticians, podiatrists, behaviour specialists, dentists, optometrists, and exercise physiologists.',
  },
  {
    iconPath: '/assets/img/services/s-02.svg',
    title: 'Carer Support',
    content: 'Carers of loved ones also need a break to re-energise and focus on themselves. Do so with the comfort of knowing that your loved one is in good hands.',
  },
  {
    iconPath: '/assets/img/services/s-03.svg',
    title: 'Domestic Assistance',
    content: 'Getting help with everyday tasks like cleaning, washing, ironing and vacuuming will not only make life so much easier, it will leave you with the time and energy to focus on the activities that you would enjoy more.',
  },
  {
    iconPath: '/assets/img/services/s-04.svg',
    title: 'Gardening and Home Maintenance',
    content: 'Getting help with the more strenuous chores like mowing the lawn, weeding the garden or odd jobs around the house are usually the point of entry for seniors into home care.',
  },
  {
    iconPath: '/assets/img/services/s-05.svg',
    title: 'Equipment & Home modifications',
    content: 'You home care package funds can be used to purchase a wide range of goods that will help you be safe and comfortable at home. From continence aids to mobility aids to kitchen and bathroom modifications, we know how to best use your funds to get what you need.',
  },
  {
    iconPath: '/assets/img/services/s-06.svg',
    title: 'Companionship',
    content: 'We are social beings who thrive on positive interactions and experiences together. Simple activities such as board games, crosswords or just having a cup of tea will all be more enjoyable in the company of someone else.',
  },
  {
    iconPath: '/assets/img/services/s-07.svg',
    title: 'Shopping and Transport',
    content: 'Maintaining one’s independence outside the home is a must for many seniors. Step out confidently and enjoy transport assistance and companionship to the shops, meetings, community gatherings or just appointments.',
  },
  {
    iconPath: '/assets/img/services/s-08.svg',
    title: 'Day Trips',
    content: 'Whether you are planning to visit family on the other side of the city or would like to spend the day fishing, carers can support you to get out of the house and have a change of scenery.',
  },
  {
    iconPath: '/assets/img/services/s-09.svg',
    title: 'Personal Care',
    content: 'Day-to-day activities like showering and dressing can sometimes become exhausting. This is where personal care services step in and maintain your hygiene and help feel the best version of yourself.',
  }
];

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {
  tendServises: TendService[];

  constructor() { }

  ngOnInit(): void {
    this.tendServises = TEND_SERVICES;
  }

}
