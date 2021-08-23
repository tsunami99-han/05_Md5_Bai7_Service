import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TimelinesComponent} from './components/timelines/timelines.component';
import {YoutubePlaylistComponent} from './components/youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './components/youtube-player/youtube-player.component';
import {DictionaryPageComponent} from './components/dictionary/dictionary-page/dictionary-page.component';
import {DictionaryDetailComponent} from './components/dictionary/dictionary-detail/dictionary-detail.component';


const routes: Routes = [
  {
    path: 'timelines',
    component: TimelinesComponent
  },
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  },
  {
    path: 'product',
    loadChildren: () => import('./module/product/product.module').then(module => module.ProductModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./module/category/category.module').then(module => module.CategoryModule)
  },
  {
    path: 'dictionaries',
    component: DictionaryPageComponent,
    children: [{
      path: ':id',
      component: DictionaryDetailComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
