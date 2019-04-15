import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CompanyModule } from "./company/company.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CompanyModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
