import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialog } from '@angular/material/dialog';
import { QuizService } from '../quiz.service';
import { QuizResultDialog } from '../quiz-results.component/quiz-results.component';
import { Question } from '../question';

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [QuizService],
})
export class AppComponent implements OnInit {
  isLoaded: boolean;
  questions: Array<Question>;
  currentQuestionNumber: number;
  currentQuestion: Question;
  showSelectedAnswers: string;

  constructor(
    private quizService: QuizService,
    public dialog: MatDialog
  ) {
    this.questions = new Array<Question>();
  }

  ngOnInit(): void {
    this.loadQuestions();
  }

  private loadQuestions() {
    this.quizService.getFirstTest().subscribe((data: Question[]) => {
      this.questions = data;
      this.isLoaded = true;
      this.currentQuestionNumber = 0;
      this.currentQuestion = this.questions[0];
    });
  }

  previous() {
    if (this.currentQuestionNumber > 0) {
      this.currentQuestionNumber--;
      this.currentQuestion = this.questions[this.currentQuestionNumber];
    }
  }

  next() {
    if (this.currentQuestionNumber < this.questions.length - 1) {
      console.log(this.currentQuestion.selectedAnswerId);
      this.currentQuestionNumber++;
      this.currentQuestion = this.questions[this.currentQuestionNumber];
      return;
    }

    this.openDialog();
  }

  openDialog() {
    this.dialog.open(QuizResultDialog, {
      data: this.questions.map(
        x => `Вопрос ${x.id}, выбранный ответ ${x.selectedAnswerId};`
      ),
    });
  }
}
