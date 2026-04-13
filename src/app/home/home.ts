import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Quizdata } from '../quizdata';

@Component({
  selector: 'app-home',
  imports: [RouterLink,FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  userName:string='';
  
  constructor(public quizService: Quizdata) {}


}
