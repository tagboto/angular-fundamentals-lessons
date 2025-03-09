import { Component } from '@angular/core';
import { AccountInfo } from './account-info';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <article class="card">
      <h1 class="card-title">Frontend Masters Express</h1>
      <p class="card-number">0000 0000 0000 0000</p>
      <section class="membership-info">
        <p>
          {{ account.name }}
        </p>
        <p>Valid Thru: {{ account.validThru }}</p>
        <p>CVV: {{ account.CVV }}</p>
        <p>

        <!-- enumerated and we know what they'll be then a switch works better than if or else -->
          @switch (account.membershipStatus) {
            @case ('gold') {<span class="badge gold">Gold</span>}
            @case ('platinum') {<span class="badge platinum">Platinum</span>}
            @case ('silver'){<span class="badge silver">Silver</span>}

          }
           <!-- @if(account.membershipStatus === 'gold'){
            <span class="badge gold">Gold</span>
           }
           @else if (account.membershipStatus === 'platinum') {
            <span class="badge platinum">Platinum</span>
           }
           @else {
            <span class="badge silver">Silver</span>
           } -->
        </p>
      </section>
    </article>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  account: AccountInfo = {
    name: 'Melisa Evan',
    membershipStatus: 'gold',
    validThru: '12/2022',
    CVV: '123',
  };
}
