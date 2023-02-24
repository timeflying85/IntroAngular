import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExoComponent } from './modules/exo/exo.component';
import { DemoComponent } from './modules/demo/demo.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { BindingsComponent } from './modules/demo/bindings/bindings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesComponent } from './modules/demo/pipes/pipes.component';
import { TempPipe } from './shared/pipes/temp.pipe';
import { PipesPipe } from './modules/exo/pipes.pipe';
import { ChronoComponent } from './modules/exo/chrono/chrono.component';
import { TimePipe } from './modules/exo/chrono/time/time.pipe';
import { ComponentDirectiveComponent } from './modules/demo/component-directive/component-directive.component';
import { StructuralDirectiveComponent } from './modules/demo/structural-directive/structural-directive.component';
import { ListUserComponent } from './modules/exo/list-user/list-user.component';
import { InputOutputComponent } from './modules/demo/input-output/input-output.component';
import { EnfantComponent } from './modules/demo/input-output/enfant/enfant.component';
import { InOutComponent } from './modules/exo/in-out/in-out.component';
import { ChildComponent } from './modules/exo/in-out/child/child.component';
import { ShoppingComponent } from './modules/exo/shopping/shopping.component';
import { ChildrenComponent } from './modules/exo/shopping/children/children.component';
import { MainComponent } from './modules/demo/services/main/main.component';
import { Table1Component } from './modules/demo/services/table1/table1.component';
import { Table2Component } from './modules/demo/services/table2/table2.component';
import { FormulairesComponent } from './modules/demo/formulaires/formulaires.component';
import { AuthComponent } from './modules/exo/auth/auth.component';
import { LoginComponent } from './modules/exo/auth/login/login.component';
import { RegisterComponent } from './modules/exo/auth/register/register.component';
import { FormsComponent } from './modules/demo/forms/forms.component';
import { CustomDirectiveComponent } from './modules/demo/custom-directive/custom-directive.component';
import { HoverColorDirective } from './modules/demo/custom-directive/hover-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    ExoComponent,
    DemoComponent,
    BannerComponent,
    BindingsComponent,
    PipesComponent,
    TempPipe,
    PipesPipe,
    ChronoComponent,
    TimePipe,
    ComponentDirectiveComponent,
    StructuralDirectiveComponent,
    ListUserComponent,
    InputOutputComponent,
    EnfantComponent,
    InOutComponent,
    ChildComponent,
    ShoppingComponent,
    ChildrenComponent,
    MainComponent,
    Table1Component,
    Table2Component,
    FormulairesComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    FormsComponent,
    CustomDirectiveComponent,
    HoverColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
