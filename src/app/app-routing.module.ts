import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingsComponent } from './modules/demo/bindings/bindings.component';
import { ComponentDirectiveComponent } from './modules/demo/component-directive/component-directive.component';
import { CustomDirectiveComponent } from './modules/demo/custom-directive/custom-directive.component';
import { DemoComponent } from './modules/demo/demo.component';
import { FormsComponent } from './modules/demo/forms/forms.component';
import { FormulairesComponent } from './modules/demo/formulaires/formulaires.component';
import { EnfantComponent } from './modules/demo/input-output/enfant/enfant.component';
import { InputOutputComponent } from './modules/demo/input-output/input-output.component';
import { PipesComponent } from './modules/demo/pipes/pipes.component';
import { MainComponent } from './modules/demo/services/main/main.component';
import { Table1Component } from './modules/demo/services/table1/table1.component';
import { Table2Component } from './modules/demo/services/table2/table2.component';
import { StructuralDirectiveComponent } from './modules/demo/structural-directive/structural-directive.component';
import { AuthComponent } from './modules/exo/auth/auth.component';
import { LoginComponent } from './modules/exo/auth/login/login.component';
import { RegisterComponent } from './modules/exo/auth/register/register.component';
import { ChronoComponent } from './modules/exo/chrono/chrono.component';
import { ExoComponent } from './modules/exo/exo.component';
import { ChildComponent } from './modules/exo/in-out/child/child.component';
import { InOutComponent } from './modules/exo/in-out/in-out.component';
import { ListUserComponent } from './modules/exo/list-user/list-user.component';
import { ChildrenComponent } from './modules/exo/shopping/children/children.component';
import { ShoppingComponent } from './modules/exo/shopping/shopping.component';
import { BannerComponent } from './shared/components/banner/banner.component';

const routes: Routes = [

    {path: 'demo', component: DemoComponent, children: [
      {path: 'bindings', component: BindingsComponent},
      {path: 'pipes', component: PipesComponent},
      {path: 'custom-directive', component: CustomDirectiveComponent},
      {path: 'component-directive', component: ComponentDirectiveComponent},
      {path: 'structural-directive', component: StructuralDirectiveComponent},
      {path: 'input-output', component: InputOutputComponent, children: [
        {path : 'enfant', component: EnfantComponent}
      ]},
      {path: 'services', component: MainComponent},
      {path: 'formulaires', component: FormulairesComponent},
      {path: 'forms', component: FormsComponent}
    ]},
    {path: 'exo', component: ExoComponent, children : [
      {path : 'auth', component : AuthComponent, children : [
        {path : 'register', component : RegisterComponent},
        {path : 'login', component : LoginComponent}
      ]},
      {path: 'chrono', component: ChronoComponent},
      {path: 'list-user', component: ListUserComponent},
      {path: 'in-out', component: InOutComponent, children: [
        {path: 'child', component: ChildComponent}
      ]},
      {path: 'shopping', component: ShoppingComponent, children: [
        {path: 'children', component: ChildrenComponent}
      ]}
    ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
