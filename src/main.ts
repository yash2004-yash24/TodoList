import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import * as $ from 'jquery';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';





bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
 