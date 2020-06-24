import { Component, OnInit } from '@angular/core';
import { ContactService } from '@services/contact.service';
import { IPlan } from './plan.interface';
import { IPlanDescription } from './plan-description.interface';

const PLANS: IPlan[] = [
  {
    header: 'Premium',
    label: 'Best Value',
    points: [
      {
        text: '1h 30min',
      },
      {
        text: 'Unlimited',
      },
      {
        text: 'Every 3 months',
        clarification: 'Plus As Needed',
      },
      {
        text: 'Every 6 months',
        clarification: 'Plus As Needed',
      },
      {
        text: '1 Hour',
      },
      {
        text: 'Unlimited 24/7',
      },
    ],
    percents: 24,
  },
  {
    header: 'Basic',
    points: [
      {
        text: '1h 30min',
      },
      {
        text: 'Initial Set-up and Review',
        clarification: '(additinal referrals charged per 15min)',
      },
      {
        text: 'Every 6 months',
      },
      {
        text: 'Annual Review',
      },
      {
        text: '1 Hour',
      },
      {
        text: 'Unlimited 24/7',
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
    title: 'Referral Management',
    content: 'Referrals To New Service Providers',
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
  },
  {
    title: 'Direct Care Scheduling',
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
