import { afterNextRender, Component, HostListener, inject, Injector, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TodoFormComponent } from "./components/todo-form/todo-form.component";
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FooterComponent } from './components/footer/footer.component';

const largeScreenSize = 720;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSlideToggleModule,
    TodoFormComponent,
    TodoListComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'TodoList';
  injector = inject(Injector);
  isLargeScreen: boolean = true;

  ngOnInit(): void {
  afterNextRender(() => this.checkScreenSize(), {injector: this.injector});
}

  @HostListener('window:resize', ['$event'])
  onResize(event:any): void{
    this.checkScreenSize();
  }

  /** Changes css based on screen size */
  checkScreenSize(): void {
    this.isLargeScreen = window.innerWidth > largeScreenSize; // Adjust breakpoint as needed
  }
}
