import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
   providers: [provideAnimations(), provideRouter(routes)]
});
  
  
  /*appConfig)
  .catch((err) => console.error(err));*/
