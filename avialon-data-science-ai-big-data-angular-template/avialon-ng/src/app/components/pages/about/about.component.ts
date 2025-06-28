import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  fullText = 'We are BEEWORK AI.\nWe build the future through Data-centric AI.\nWe inspire AI & Human Collaboration.';
  displayText = '';
  private currentIndex = 0;

  constructor() { }

  ngOnInit(): void {
    this.typeWriter();
  }

  typeWriter() {
    if (this.currentIndex < this.fullText.length) {
      const char = this.fullText.charAt(this.currentIndex);
      if (char === '\n') {
        this.displayText += '<br>';
      } else {
        this.displayText += char;
      }
      this.currentIndex++;
      setTimeout(() => this.typeWriter(), 40); // tốc độ gõ
    }
  }

}
