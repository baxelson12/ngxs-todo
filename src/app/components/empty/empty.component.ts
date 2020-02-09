import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty',
  template: `
    <p class="w-full text-center text-grey-dark" id="if-no-todos">
      There are no todos
    </p>
  `,
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
