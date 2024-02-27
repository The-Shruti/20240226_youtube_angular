import { Component } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'] // Use styleUrls for multiple stylesheets
})
export class SubscriptionComponent {
  title = 'youtube';

  // Header menu items
  headerMenuItems = [
    'Desktop',
    'Mobile',
    'Web',
    'HTML',
    'CSS',
    'Web',
    'Javascript',
    'Web Design',
    'Web Development',
    'React'
  ];

  // Initial app cards data
  appCards = [
    {
      imageUrl: 'assets/images/p10.png',
      title: 'Nafe Singh Rathee Ki Hatya | Haryana News',
      description1: 'Aaj Tak',
      description2: '247 watching'
    },
  ];

  // Additional cards data
  cardsData = [
    {
      imageUrl: 'assets/images/p11.png',
      title: 'Breaking News: Samajwadi Party',
      description1: 'Aaj Tak',
      description2: '1.9k Watching'
    },
  ];

  // Boolean variable to toggle user profile section
  displayUserProfile: boolean = false;

  // Method to toggle user profile section
  toggleUserProfile() {
    this.displayUserProfile = !this.displayUserProfile;
  }

  // Method to toggle settings menu height
  public settingsMenuToggle(): void {
    const settingsmenu: HTMLElement | null = document.querySelector(".settings-menu");
    if (settingsmenu) {
      settingsmenu.classList.toggle("settings-menu-height");
    }
  }

  // Boolean variable to track dark mode state
  darkmode = false;

  ngOnInit(): void {
    // Initialize component
  }

  // Method to toggle dark mode
  darkmodebtn() {
    this.darkmode = !this.darkmode;
    if (this.darkmode) { document.body.classList.add('dark-theme') }
    else { document.body.classList.remove('dark-theme') }
  }
}
