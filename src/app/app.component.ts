import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StorageService]
})
export class AppComponent {
  title: string = 'fnord';

  constructor(private storagesvc: StorageService) {
  }
}
