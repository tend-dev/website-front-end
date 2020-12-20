import { Component, OnInit } from '@angular/core';
import { IFAQ } from '@models/faq-question.interface';

const QUESTIONS: IFAQ[] = [
  {
    question: 'Where is Tend available?',
    answer: 'We operate in all of Melbourne, VIC and the Sunshine Coast QLD',
    isExpanded: true
  },
  {
    question: 'Does Tend offer "self-managment"?',
    answer: 'We call our service "flexible management". Clients can "self-manage" or get full managment and move freely between the two extremes all for the same price of 17.5%.',
    isExpanded: false
  },
  {
    question: 'Does Tend charge anything outside of the 17.5%?',
    answer: 'Tend only charges for in-home face to face care management by our professional care managers when requested by clients. The Initial Assessment and Annual Review are included in our 17.5% care management fee.',
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
