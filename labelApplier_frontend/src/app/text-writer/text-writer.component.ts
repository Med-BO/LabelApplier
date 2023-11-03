import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-text-writer',
  templateUrl: './text-writer.component.html',
  styleUrls: ['./text-writer.component.css']
})
export class TextWriterComponent {
  textToLabel: string = "";

  constructor(private router: Router) {}

  navigateToLabels() {
    this.router.navigate(['/labels']);
  }

  navigateToApply() {
    this.router.navigate(['/apply'], { 
      queryParams: { 
        text: this.textToLabel 
      } 
    });
  }
}
