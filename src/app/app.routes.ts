import { Routes } from '@angular/router';
import { Mainpage } from './mainpage/mainpage';
import { Result } from './result/result';
import { Home } from './home/home';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:Home},
    {path:'main',component:Mainpage},
    {path:'result',component:Result}
    
];
