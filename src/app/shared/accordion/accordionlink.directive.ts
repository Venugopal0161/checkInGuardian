import {
  Directive, HostBinding, Inject, Input,
  OnDestroy,
  OnInit
} from '@angular/core';

import { AccordionDirective } from './accordion.directive';

@Directive({
  selector: '[appAccordionLink]'
})
export class AccordionLinkDirective implements OnInit, OnDestroy {

  @Input() public group: any;

  @HostBinding('class.pcoded-trigger')
  @Input()
  get open(): boolean {
    return this._open;
  }

  set open(value: boolean) {
    this._open = value;
    /*for slimscroll on and off*/
    const body = document.querySelector('.pcoded-inner-navbar');
    if (body) {
      body.classList.toggle('scroll-sidebar');
    }

    if (value) {
      this.nav.closeOtherLinks(this);
    }
  }

  protected _open: boolean = false;
  protected nav: AccordionDirective;

  constructor(@Inject(AccordionDirective) nav: AccordionDirective) {
    this.nav = nav;
    console.log('dlic');

  }

  ngOnInit(): any {
    this.nav.addLink(this);
  }

  ngOnDestroy(): any {
    this.nav.removeGroup(this);
  }

  toggle(): any {
    /*for slimscroll on and off*/
    // document.querySelector('.pcoded-inner-navbar').classList.add('scroll-sidebar');
    const body = document.querySelector('.pcoded-inner-navbar');
    console.log('body>>>>', body);

    if (body) {
      body.classList.add('scroll-sidebar');
    }
    this.open = !this.open;
  }
}
