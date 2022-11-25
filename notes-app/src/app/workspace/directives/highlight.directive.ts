import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input() text: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.getFormattedText());
  }

  getFormattedText() {
    const re = /(^|\W)(#[a-z\d][\w-]*)/gi;
    const match = this.text.match(re);

    if (!match) {
      return this.text;
    }

    return this.text.replace(re, `<span class="highlighted">${match[0]}</span>`);
  }
}
