import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
}) 
export class Quizdata {
  userName: string = '';
  score: number = 0;
  totalQuestions: number = 0;

  setResult(userScore: number, total: number) {
    this.score = userScore;
    this.totalQuestions = total;
  }

  getScore() {
    return this.score;
  }
}
