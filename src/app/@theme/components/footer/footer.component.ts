import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ♥ by <b><a href="https://github.com/chris7716" target="_blank">Hasitha</a></b> 2021
    </span>
  `,
})
export class FooterComponent {
}
