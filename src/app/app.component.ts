import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'Golfing',
      url: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z29sZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Football',
      url: 'https://media.istockphoto.com/photos/american-football-ball-picture-id520361733?b=1&k=20&m=520361733&s=170667a&w=0&h=NrHsCo1d46lgMfvdaerTGCcSycAPH4Radj12XYAzosU=',
    },
    {
      title: 'Fishing',
      url: 'https://images.unsplash.com/photo-1532015917327-c7c46aa1d930?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmlzaGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Baseball',
      url: 'https://media.istockphoto.com/photos/basebal-in-the-dugout-picture-id453651419?b=1&k=20&m=453651419&s=170667a&w=0&h=yVfjvhBoz23Qybr7HQjE2WE4xCNgVbSV-TZND6uw5NY=',
    },
    {
      title: 'Hunting',
      url: 'https://images.unsplash.com/photo-1591121768868-f537609281ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGh1bnRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
