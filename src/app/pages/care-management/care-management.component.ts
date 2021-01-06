import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-care-management',
  templateUrl: './care-management.component.html',
  styleUrls: ['./care-management.component.scss']
})
export class CareManagementComponent implements OnInit {
  public topics = [
    {
      name: 'Self vs Full Management',
      description: 'Tend specialises in the management of Australian Government Home Care Packages the management of Australian',
      link: 'topic-1'
    },
    {
      name: 'Self vs Full Management',
      description: 'Tend specialises in the management of Australian Government Home Care Packages the management of Australian',
      link: 'topic-2'
    },
    {
      name: 'Self vs Full Management',
      description: 'Tend specialises in the management of Australian Government Home Care Packages the management of Australian'
    },
    {
      name: 'Self vs Full Management',
      description: 'Tend specialises in the management of Australian Government Home Care Packages the management of Australian'
    },{
      name: 'Self vs Full Management',
      description: 'Tend specialises in the management of Australian Government Home Care Packages the management of Australian'
    },
    {
      name: 'Self vs Full Management',
      description: 'Tend specialises in the management of Australian Government Home Care Packages the management of Australian'
    },
    {
      name: 'Self vs Full Management',
      description: 'Tend specialises in the management of Australian Government Home Care Packages the management of Australian'
    },
    {
      name: 'Self vs Full Management',
      description: 'Tend specialises in the management of Australian Government Home Care Packages the management of Australian'
    }
]

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
