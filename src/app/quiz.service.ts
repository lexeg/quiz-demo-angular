import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from './question';

@Injectable()
export class QuizService {
  constructor(private http: HttpClient) {}

  getFirstTest(): Question[] {
    return [
      {
        id: 1,
        text: 'Вопрос 1',
        answers: ['ответ 1', 'ответ 2', 'ответ 3', 'ответ 4'],
      },
      {
        id: 2,
        text: 'Вопрос 2',
        answers: ['ответ 1', 'ответ 2', 'ответ 3', 'ответ 4'],
      },
      {
        id: 3,
        text: 'Вопрос 3',
        answers: ['ответ 1', 'ответ 2', 'ответ 3', 'ответ 4'],
      },
      {
        id: 4,
        text: 'Вопрос 4',
        answers: ['ответ 1', 'ответ 2', 'ответ 3', 'ответ 4'],
      },
      {
        id: 5,
        text: 'Вопрос 5',
        answers: ['ответ 1', 'ответ 2', 'ответ 3', 'ответ 4'],
      },
    ];
  }
}
