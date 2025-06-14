import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.scss']
})
export class HomeOneComponent implements OnInit {
  fullText = 'Workforce Solutions for Data Annotation and Data Collection ';
  displayText = '';
  private currentIndex = 0;

  constructor() { }

  ngOnInit(): void {
    this.typeWriter();
  }

  typeWriter() {
    if (this.currentIndex < this.fullText.length) {
      this.displayText += this.fullText.charAt(this.currentIndex);
      this.currentIndex++;
      setTimeout(() => this.typeWriter(), 40); // tốc độ gõ
    }
  }
}
