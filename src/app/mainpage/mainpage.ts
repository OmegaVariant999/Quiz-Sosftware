import { CommonModule } from '@angular/common';
import { Component,OnDestroy,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Quizdata } from '../quizdata';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './mainpage.html',
  styleUrl: './mainpage.css',
})
export class Mainpage implements OnInit, OnDestroy {
  user_name: string = '';
  constructor(private router: Router,private quizService: Quizdata,private cdr:ChangeDetectorRef) 
    {this.user_name = this.quizService.userName;}

  timeLeft: number = 15; 
  timerInterval: any;

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  startTimer() {
    this.timeLeft = 15; 
    this.timerInterval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--; 
        this.cdr.detectChanges();
      }

      else if(this.timeLeft===0){
        this.stopTimer();
        this.currentIndex++;
        this.selectedAnswer = '';
        this.isAnswered = false;
        this.startTimer();

      }
       else {
        this.handleTimeout();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  handleTimeout() {
    this.stopTimer();
    this.isAnswered = true;
  } 
  quiz = [
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
      answer: "New Delhi"
    },
    {
      question: "Which language is used for web development?",
      options: ["Python", "Java", "JavaScript", "C++"],
      answer: "JavaScript"
    },
      {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars"
    },
    {
    question: "Who is known as the Father of Computers?",
    options: ["Albert Einstein", "Charles Babbage", "Isaac Newton", "Alan Turing"],
    answer: "Charles Babbage"
    },
    {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: "<a>"
  }
  ];

  currentIndex = 0;
  selectedAnswer: string = '';
  score=0;
  isAnswered: boolean = false;

  nextQuestion() {

    if (!this.selectedAnswer) {
      alert("Please select an answer!");
      return;
    }

    if (!this.isAnswered) {
      this.stopTimer();
      this.isAnswered = true;

      if (this.selectedAnswer === this.quiz[this.currentIndex].answer) {
        this.score++;
      } 
      return;
    }
    
    if (this.currentIndex < this.quiz.length - 1) {
        this.currentIndex++;
        this.selectedAnswer = '';
        this.isAnswered = false;
        this.startTimer();
      } 

    else {
      this.quizService.setResult(this.score, this.quiz.length);
      this.router.navigate(['/result']);
      }
  }
}
