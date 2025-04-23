import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  companyName: string = "Tony's Carpet Cleaning";
  phone: string = "📞 Call: (555) 123-4567";
  email: string = "📧 Email: info@freshflocarpet.com";
  location: string = "📍 Serving the Saint Cloud, FL area";
  year: number = new Date().getFullYear();
}
