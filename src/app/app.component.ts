import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Filmaker';
  
  ngOnInit(): void {
    Array.from(document.getElementsByClassName("hidden")).forEach(x => x.classList.remove("hidden"));
  }
}
