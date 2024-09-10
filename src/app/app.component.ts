import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { Todo } from './models/todo';
import { CommonModule, DecimalPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, DecimalPipe, NgFor, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lab-ToDo';
  formTasks: Todo = {} as Todo;
  query: string = "";
  allTasks: Todo [] = [
    {
      task: "dust",
      notes: "focus on living room",
      duration: 0.2,
      completed: false,
      priority: "low"
    },
    {
      task: "play with Tina",
      notes: "get those steps!",
      duration: 0.3,
      completed: false,
      priority: "high"
    },
    {
      task: "exercise",
      notes: "calm yoga",
      duration: 0.5,
      completed: false,
      priority: "medium"
    },
    {
      task: "cook dinner",
      notes: "make grocery list of low items",
      duration: 1,
      completed: false,
      priority: "high"
    },
    { 
      task: "spend quality time with Cath",
      notes: ";* her once for me",
      duration: 1,
      completed: false,
      priority: "high"
    }       
  ];
  filteredTasks: Todo[] = [];

  updateCompleted(t:Todo):void{
    t.completed = true;
  }
  removeTask(t:Todo):void{
    let index:number = this.allTasks.findIndex(x => x == t);
    this.allTasks.splice(index, 1);
  }
  addTask(e:Event):void{
    e.preventDefault();
    this.formTasks.completed = false;
    let result: Todo = { ...this.formTasks};
    this.allTasks.push(result);
  }
  // filterTasks():void{
  //   //regular expressions -> searches any var containing input 
  //    this.filteredTasks = this.allTasks.filter((t)=>{return t.task.match(this.query)});
  //    if(this.allTasks. === )
  // }

}

