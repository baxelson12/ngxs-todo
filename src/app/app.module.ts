import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AppComponent } from './containers';

import * as fromStore from './store';
import * as containers from './containers';
import * as components from './components';

@NgModule({
  declarations: [...containers.containers, ...components.components],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxsModule.forRoot(fromStore.states),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
