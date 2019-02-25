// entry component for the client
import {Component, OnInit} from '@angular/core';
import { Store } from '@libs/midgard-angular/src/lib/modules/store/store';
@Component({
  selector: 'lib-contacts',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  constructor(private store: Store<any>) {}
  ngOnInit() {}
}

