import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTesting]'
})
export class TestingDirective implements OnInit {
  @Input() bgColor: string = '';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter')
  onHover(){
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave')
  unHover(){
    this.el.nativeElement.style.backgroundColor = this.bgColor;
  }


  ngOnInit(){
  this.el.nativeElement.style.backgroundColor = this.bgColor;
  this.el.nativeElement.style.color = 'white';
  }
}
