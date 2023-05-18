import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <div class="branding">
      <a href="/">
        <img
src="./assets/images/logos/LOGO GREMCA VERSIONES-03.svg"
  class="align-middle m-2 responsive-image"
          alt="logo"
        />
      </a>
    </div>
  `,
})
export class BrandingComponent {
  constructor() { }
}
