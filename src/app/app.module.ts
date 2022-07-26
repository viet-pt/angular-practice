import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WebShellModule } from './utils/web-shell.module';
import { DirectivesModule } from './directives/directives.module';
import { ComponentsModule } from './components/component.module';
import { PipeModule } from './pipe/pipe.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    WebShellModule,
    ComponentsModule,
    DirectivesModule,
    PipeModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
