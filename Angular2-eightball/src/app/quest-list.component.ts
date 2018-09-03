import { Component, Output, EventEmitter } from '@angular/core';

@Component({
   selector: 'post-list',
   templateUrl: './question.component.html'
})

export class QuestListComponent  {

   @Output() commentsFound = new EventEmitter();

   constructor() {}

   ngOnInit(): void {}


   printQuestions(comments: Comment[]): void {}
}
