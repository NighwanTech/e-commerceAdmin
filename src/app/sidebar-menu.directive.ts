import { Directive, ElementRef, HostListener } from '@angular/core';
import { event } from 'jquery';

@Directive({
  selector: '[appSidebarMenu]'
})
export class SidebarMenuDirective {
  private animationSpeed = 300;
  private subMenuSelector = '.sidebar-submenu';

  constructor(private elementRef: ElementRef) { }

  @HostListener('click', ['$event.target'])
  onClick(target: HTMLElement): void {
    const $this = $(target);
    const checkElement = $this.next();

    if (checkElement.is(this.subMenuSelector) && checkElement.is(':visible')) {
      checkElement.slideUp(this.animationSpeed, function() {
        checkElement.removeClass('menu-open');
      });
      checkElement.parent('li').removeClass('active');
    } else if (checkElement.is(this.subMenuSelector) && !checkElement.is(':visible')) {
      const parent = $this.parents('ul').first();
      const ul = parent.find('ul:visible').slideUp(this.animationSpeed);
      ul.removeClass('menu-open');
      const parent_li = $this.parent('li');
      checkElement.slideDown(this.animationSpeed, function() {
        checkElement.addClass('menu-open');
        parent.find('li.active').removeClass('active');
        parent_li.addClass('active');
      });
    }

  
  }
}
