import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionItem } from './accordion-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccordionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  items: AccordionItem[] = [];
  ngOnInit(): void {
    const item1: AccordionItem = {
      title: 'Test1',
      content: 'aaaaaa',
      isExpanded: true
    };
    const item2: AccordionItem = {
      title: 'Test2',
      content: 'bbbbbb',
      isExpanded: true
    };
    const item3: AccordionItem = {
      title: 'Test3',
      content: 'ccccc',
      isExpanded: true
    };
    this.items.push(item1);
    this.items.push(item2);
    this.items.push(item3);
  }
}
