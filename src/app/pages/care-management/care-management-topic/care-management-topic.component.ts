import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-care-management-topic',
  templateUrl: './care-management-topic.component.html',
  styleUrls: ['./care-management-topic.component.scss']
})
export class CareManagementTopicComponent implements OnInit, OnDestroy {
  public topic: {
    name : 'Loading...',
    description: ''
  };
  public topics = {
    'topic-1' : {
      name: 'Topic1',
      description: 'Tend specialises in the management of Australian Government Home Care Packages the management of Australian'
    },
    'topic-2' :
    {
      name: 'Topic2',
      description: 'Tend specialises in the management of Australian Government Home Care Packages the management of Australian'
    },
    'topic-3' :
    {
      name: 'Topic3',
      description: 'Tend specialises in the management of Australian Government Home Care Packages the management of Australian'
    },
    'topic-4' :
    {
      name: 'Topic4',
      description: 'Tend specialises in the management of Australian Government Home Care Packages the management of Australian'
    },
    'topic-5' :
    {
      name: 'Topic5',
      description: 'Tend specialises in the management of Australian Government Home Care Packages the management of Australian'
    },
    'topic-6' :
    {
      name: 'Topic6',
      description: 'Tend specialises in the management of Australian Government Home Care Packages the management of Australian'
    },
    'topic-7' :
    {
      name: 'Topic7',
      description: 'Tend specialises in the management of Australian Government Home Care Packages the management of Australian'
    },
    'topic-8' :
    {
      name: 'Topic8',
      description: 'Tend specialises in the management of Australian Government Home Care Packages the management of Australian'
    }
  }

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.topic = this.topics[id];
  }

  ngOnDestroy(): void {
    
  }

  
}
