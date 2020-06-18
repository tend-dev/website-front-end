import { Component, OnInit } from '@angular/core';
import { IFAQ } from '@models/faq-question.interface';

const QUESTIONS: IFAQ[] = [
  {
    question: 'Where is Tend available?',
    answer: 'We operate in all of Melbourne.',
    isExpanded: true
  },
  {
    question: 'Is Tend’s offering a “self-management” service?',
    answer: 'Tend’s service is full care management service which is different from self-management. Under self management you are responsible for sourcing and scheduling your in-home services. Tend will introduce you to the best in home services, set up those services and provide on-going scheduling.',
    isExpanded: false
  },
  {
    question: 'Does Tend also charge for Package Administration?',
    answer: 'Many providers will break it down into two different costs - package management and care management. But we think it is easier for you if we give you one price for both the care management and administration. So the cost you see in our Pricing Plan is the total cost you will pay.',
    isExpanded: false
  },
  {
    question: 'Does Tend charge any Basic Daily Fee, Establishment Fee or Exit Fee?',
    answer: 'No. At Tend, you just pay for your Care Management.',
    isExpanded: false
  },
  {
    question: 'Does Tend charge for purchases of goods?',
    answer: 'No. Unlike most providers who charge up to 15% on your purchases, Tend charges zero.',
    isExpanded: false
  }
];

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  questions: IFAQ[];

  constructor() { }

  ngOnInit(): void {
    this.questions = QUESTIONS;
  }

  toggleExpand(questionClicked) {
    if (!questionClicked.isExpanded) {
      this.questions.map((q) => q.isExpanded = false);
    }
    questionClicked.isExpanded = !questionClicked.isExpanded;
  }
}
