import { Component, Injectable, Inject } from '@angular/core';
import {
  MatDialogTitle,
  MatDialogContent,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';

@Component({
  templateUrl: './quiz-results.component.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatListModule],
})
@Injectable()
export class QuizResultDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public items: string[]) {}
}
