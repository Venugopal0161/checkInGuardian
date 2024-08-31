import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AccordionAnchorDirective, AccordionDirective, AccordionLinkDirective } from '../accordion';
import { CardRefreshDirective } from '../card/card-refresh.directive';
import { CardToggleDirective } from '../card/card-toggle.directive';
import { CardComponent } from '../card/card.component';
import { MenuItems } from '../menu-items/menu-items';



@NgModule({
  declarations: [CardRefreshDirective,
    CardToggleDirective,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    CardComponent],
  imports: [
    CommonModule
  ],
  providers: [
    MenuItems,
  ],
  exports: [CardRefreshDirective,
    CardToggleDirective, AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    CardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModuleModule { }
