import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  questions: any[];

  constructor() {
    this.questions = [
      {
        question: 'Where is Tend available ?',
        answer: 'Tend begin services in the South-Eastern suburbs of Metropolitan Melbourne. As we grow our service, coverage will expand to increase our quality service to more areas throughout Melbourne.',
        isExpanded: true
      },
      {
        question: 'How can I become a Tend care worker?',
        answer: 'answer',
        isExpanded: false
      },
      {
        question: 'How can I book a Tend care worker?',
        answer: 'answer',
        isExpanded: false
      },
      {
        question: 'How much does this service cost?',
        answer: 'answer',
        isExpanded: false
      },
      {
        question: 'Is Tend a government-approved care provider?',
        answer: 'answer',
        isExpanded: false
      },
      {
        question: 'How does Tend vet care workers?',
        answer: 'answer',
        isExpanded: false
      },
      {
        question: 'Are Tend care workers independent contractors or employees?',
        answer: 'answer',
        isExpanded: false
      }
    ];
  }

  ngOnInit(): void {
  }

  toggleExpand(questionClicked) {
    if (!questionClicked.isExpanded) {
      this.questions.map((q) => q.isExpanded = false);
    }
    questionClicked.isExpanded = !questionClicked.isExpanded;
  }
}
