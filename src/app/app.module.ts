import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { NewsModule } from './pages/news/news.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent, HeaderComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatIconModule,
        BrowserAnimationsModule,
        NewsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
