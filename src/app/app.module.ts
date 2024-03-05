import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/componet/home.component';
import { ProductService } from './services/product.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { ProductTestService } from './services/product-test.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [
    // {
    //   provide: ProductService,
    //   useFactory: (http: HttpClient) => {
    //     // Provide custom logic for environment-specific service selection
    //     // (e.g., based on feature flags, configurations, etc.)
    //     if (environment.production) {
    //       return new ProductTestService();
    //     } else {
    //       return new ProductService(http);
    //     }
    //   },
    //   deps: [HttpClient],
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
