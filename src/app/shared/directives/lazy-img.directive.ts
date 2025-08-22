import { Directive, ElementRef, Input, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appLazyImg]'
})
export class LazyImgDirective implements AfterViewInit {
  @Input('appLazyImg') src!: string; 
  @Input() placeholder: string = ''; 

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const img: HTMLImageElement = this.el.nativeElement;

    if (this.placeholder) {
      this.renderer.setAttribute(img, 'src', this.placeholder);
      this.renderer.addClass(img, 'blurred');
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.setAttribute(img, 'src', this.src);
          img.onload = () => {
            this.renderer.removeClass(img, 'blurred');
            this.renderer.setAttribute(img, 'data-loaded', 'true');
          };
          observer.unobserve(img);
        }
      });
    });

    observer.observe(img);
  }
}
