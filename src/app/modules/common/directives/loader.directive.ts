import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appLoader]'
})
export class LoaderDirective {

  loader: HTMLDivElement;

  constructor(private renderer: Renderer2,
              private el: ElementRef) {
  }

  @Input('showLoading')
  set showLoading(show: boolean) {
    if (show) {
      this.loader = this.renderer.createElement('div');
      this.renderer.addClass(this.loader, 'loader');
      this.renderer.addClass(this.loader, 'align-center');
      const main = this.renderer.createElement('div');
      this.renderer.addClass(main, 'main');
      this.renderer.appendChild(this.loader, main);
      const firstBar = this.renderer.createElement('div');
      this.renderer.addClass(firstBar, 'first-bar');
      this.renderer.appendChild(main, firstBar);
      const secondBar = this.renderer.createElement('div');
      this.renderer.addClass(secondBar, 'second-bar');
      this.renderer.appendChild(main, secondBar);
      const thirdBar = this.renderer.createElement('div');
      this.renderer.addClass(thirdBar, 'third-bar');
      this.renderer.appendChild(main, thirdBar);
      this.renderer.appendChild(this.el.nativeElement, this.loader);
    } else {
      if (this.loader != null) {
        this.renderer.removeChild(this.el.nativeElement, this.loader);
      }
    }
  }
}
