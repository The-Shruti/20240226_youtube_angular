import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionComponent } from './subscription/subscription.component';
import { MainComponent } from './main/main.component';
import { SettingsComponent } from './settings/settings.component';

// Define the routes for the application
const routes: Routes = [ 
  {
    path:"", // Empty path for the main component
    component: MainComponent
  },
  {
    path:"subscription", // Path for the subscription component
    component: SubscriptionComponent
  }, 
  {
    path:"settings", // Path for the settings component
    component: SettingsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Importing RouterModule with defined routes
  exports: [RouterModule] // Exporting RouterModule for use in other modules
})
export class AppRoutingModule { } // Module for managing application routing
