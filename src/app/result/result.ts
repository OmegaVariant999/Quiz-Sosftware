import { Component,OnInit } from '@angular/core';
import { Quizdata } from '../quizdata';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-result',
  imports: [RouterLink], 
  templateUrl: './result.html',
  styleUrl: './result.css',
})
export class Result implements OnInit {
  name: string = '';
  finalScore: number = 0;
  total: number = 0;

  constructor(private quizService: Quizdata,private router: Router) {}

  ngOnInit() {
    this.finalScore = this.quizService.getScore();
    this.total = this.quizService.totalQuestions;
    this.name = this.quizService.userName;
  }

  retryQuiz() {
  this.router.navigate(['/main']);
}

// goHome() {
//   this.router.navigate(['/home']);
// }
}
