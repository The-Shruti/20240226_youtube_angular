/**
 * Main Component for the YouTube application.
 * This component handles the main functionality and UI of the application.
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit { 
  // Title of the application
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

  // App cards data
  appCards = [
    { 
      imageUrl: 'assets/images/p1.png', 
      title: 'Choose Battery for Best Emotions',
      description1: 'Subscription News',
      description2: '2k Views'
    },  
   
  ]; 
  cardsData = [
    {
      imageUrl: 'assets/images/p2.png',
      title: 'Black and White with Sudhir Chaudhary',
      description1: 'Aaj Tak',
      description2: '15k Views'
    },
   
  ];  

  // Boolean variable to toggle user profile section
  displayUserProfile: boolean = false;

  // Method to toggle user profile section
  toggleUserProfile() {
    this.displayUserProfile = !this.displayUserProfile;
  } 

  /**
   * Method to toggle the settings menu visibility.
   * Toggles the 'settings-menu-height' class on the settings menu element.
   */
  public settingsMenuToggle(): void {
    const settingsmenu: HTMLElement | null = document.querySelector(".settings-menu");
    if (settingsmenu) {
      settingsmenu.classList.toggle("settings-menu-height");
    }
  }

  // Boolean variable to toggle dark mode
  darkmode=false;

  // Method to toggle dark mode
  darkmodebtn(){
    this.darkmode=!this.darkmode;
    if(this.darkmode){
      document.body.classList.add('dark-theme'); // Add dark theme class to body
    } else {
      document.body.classList.remove('dark-theme'); // Remove dark theme class from body
    }
  }

  ngOnInit(): void {
    // Initialization logic goes here
  }
}
