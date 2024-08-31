import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { cardClose, cardToggle } from './card-animation';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [cardToggle, cardClose],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {
  @Input() headerContent!: string;
  @Input() title!: string;
  @Input() blockClass!: string;
  @Input() cardClass!: string;
  @Input() classHeader: boolean = false;
  cardToggle: string = 'expanded';
  cardClose: string = 'open';

  fullCard!: string;
  fullCardIcon: string;

  constructor() {
    console.log('from cards');

    this.fullCardIcon = 'fa-expand';
  }

  ngOnInit() {
  }

  toggleCard() {
    this.cardToggle = this.cardToggle === 'collapsed' ? 'expanded' : 'collapsed';
  }

  closeCard() {
    this.cardClose = this.cardClose === 'closed' ? 'open' : 'closed';
  }

  fullScreen() {
    this.fullCard = this.fullCard === 'full-card' ? '' : 'full-card';
    this.fullCardIcon = this.fullCardIcon === 'fa-expand' ? 'fa-compress' : 'fa-expand';
  }
}
