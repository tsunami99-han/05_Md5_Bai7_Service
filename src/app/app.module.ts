import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelinesComponent } from './components/timelines/timelines.component';
import { YoutubePlaylistComponent } from './components/youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './components/youtube-player/youtube-player.component';
import { DictionaryPageComponent } from './components/dictionary/dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent } from './components/dictionary/dictionary-detail/dictionary-detail.component';
import {SharedModule} from './module/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
