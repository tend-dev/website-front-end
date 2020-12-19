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
        text: '',
      },
      {
        text: 'Unlimited',
        // clarification: 'Plus As Needed',
      },
      {
        text: 'Unlimited'
      },
      {
        text: 'Unlimited 24/7',
      },
      {
        text: '',
      },
      {
        text: '',
      },
    ],
    percents: 17.5,
  }
]

const DESCRIPTIONS: IPlanDescription[] = [
  {
    title: 'Initial Visit',
    content: 'Face to face in home assessment and program set up with Care Manager, Development of Support Plan, Budget and Risk Assessments, Signing of Home Care Agreement',
  },
  {
    title: 'Phone Contact with Care Manager',
  },
  {
    title: 'Referral Management',
    content: 'Referrals to  service providers',
  },
  {
    title: 'Scheduling of Services',
  },
  {
    title: 'Annual Review',
    content: 'Face to face in-home program reviews with Care Manager',
  },
  {
    title: 'Administration/Government compliance',
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
