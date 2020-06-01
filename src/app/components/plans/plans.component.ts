import { Component, OnInit } from '@angular/core';
import { ContactService } from '@services/contact.service';
import { IPlan } from './plan.interface';
import { IPlanDescription } from './plan-description.interface';

const PLANS: IPlan[] = [
  {
    header: 'On Tap',
    label: 'Best Value',
    points: [
      {
        text: '1.5 hours',
      },
      {
        text: 'unlimited',
      },
      {
        text: '3 months upon request assessed need',
      },
      {
        text: '3 months upon request assessed need',
      },
      {
        text: '1.5 hours',
      },
    ],
    percents: 24,
  },
  {
    header: 'Let’s Get Started',
    points: [
      {
        text: '1 hour',
      },
      {
        text: 'set up and review additional costs',
        clarification: '(additinal referrals charged 1.0% fee per transaction)',
      },
      {
        text: '6 months',
      },
      {
        text: 'annual review only',
      },
      {
        text: '1 hour',
      },
    ],
    percents: 19,
  }
]

const DESCRIPTIONS: IPlanDescription[] = [
  {
    title: 'Initial Visit',
    content: 'Face to face in-home assessment and program set up with Care Manager. Development of Home Care Agreement (care plan, budget and risk assessments)',
  },
  {
    title: 'Refferral Managment',
    content: 'service referrals to new service providers',
  },
  {
    title: 'Phone Review',
  },
  {
    title: 'In-Home Visit',
  },
  {
    title: 'Annual Review',
    content: 'Face to face in-home program review with Care Manager',
  }
]

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {
  public plans: IPlan[] = PLANS;
  public descriptions: IPlanDescription[] = DESCRIPTIONS;

  constructor(public contactService: ContactService) {}

  openDialog(): void {
    this.contactService.openDialog();
  }

  ngOnInit(): void {
  }

}
