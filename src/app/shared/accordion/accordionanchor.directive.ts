// import { Directive, HostListener, Inject } from '@angular/core';

// import { AccordionLinkDirective } from './accordionlink.directive';

// @Directive({
//   selector: '[appAccordionToggle]'
// })
// export class AccordionAnchorDirective {

//   protected navlink: AccordionLinkDirective;

//   constructor( @Inject(AccordionLinkDirective) navlink: AccordionLinkDirective) {
//     this.navlink = navlink;
//   }

//   @HostListener('click', ['$event'])
//   onClick(e: any) {
//     this.navlink.toggle();
//   }
// }
import { Directive, HostListener, Optional } from '@angular/core';
import { AccordionLinkDirective } from './accordionlink.directive';

@Directive({
  selector: '[appAccordionToggle]'
})
export class AccordionAnchorDirective {

  constructor(@Optional() private navlink: AccordionLinkDirective) { }

  // @HostListener('click', ['$event'])
  // onClick(e: Event) {
  //   e.preventDefault(); // Prevent default link behavior
  //   if (this.navlink) {
  //     this.navlink.toggle();
  //   }
  // }
  @HostListener('click', ['$event'])
  onClick(e: Event) {
    e.preventDefault();
    console.log('AccordionAnchorDirective clicked');
    if (this.navlink) {
      console.log('Calling toggle method');
      this.navlink.toggle();
    } else {
      console.log('No AccordionLinkDirective instance found');
    }
  }
}