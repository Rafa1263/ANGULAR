import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/pages/login/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
