import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { SearchComponent } from './components/search/search.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ContentComponent,
  },
  { path: 'search/:filter', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
