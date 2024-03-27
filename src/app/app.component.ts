import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { QuizService } from './quiz.service'
import { Question } from './question';

@Component({
    selector: "my-app",
    standalone: true,
    imports: [HttpClientModule, FormsModule, MatCardModule, MatButtonModule, MatRadioModule],
    templateUrl: "./app.component.html",
    styleUrl: './app.component.css',
    providers: [QuizService]
})
export class AppComponent implements OnInit {
    questions: Array<Question>;
    currentQuestionNumber: number;
    currentQuestion: Question;
    showSelectedAnswers: string;

    constructor(private quizService: QuizService) {
        this.questions = new Array<Question>();
    }

    ngOnInit(): void {
        this.loadQuestions();
        this.currentQuestionNumber = 0;
        this.currentQuestion = this.questions[0];
    }

    private loadQuestions() {
        this.questions = this.quizService.getFirstTest();
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
        
        this.showSelectedAnswers = `Выбранные ответы: ${this.questions.map(x => `Вопрос ${x.id}, выбранный ответ ${x.selectedAnswerId};`)}`;
    }
}