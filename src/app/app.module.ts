import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NguiMapModule} from '@ngui/map';
import { HttpClientModule } from '@angular/common/http';
import { AppSettingsService } from './service/app.settings.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBZ2YOJ8KI5qZERdDJVumciKredgdKRU5Q&components=country:AU&libraries=places'})
  ],
  providers: [AppSettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
