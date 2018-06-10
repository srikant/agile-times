import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MenuModule,
  PanelModule,
  ChartModule,
  InputTextModule,
  ButtonModule,
  InputMaskModule,
  InputTextareaModule,
  EditorModule,
  CalendarModule,
  RadioButtonModule,
  FieldsetModule,
  DropdownModule,
  MultiSelectModule,
  ListboxModule,
  SpinnerModule,
  SliderModule,
  RatingModule,
  DataTableModule,
  ContextMenuModule,
} from 'primeng/primeng';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { StatisticComponent } from './statistic/statistic.component';
import { SettingsComponent } from './settings/settings.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile/profile.component';
import { FielderrorsComponent } from './fielderrors/fielderrors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlltimesComponent } from './alltimes/alltimes.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'alltimes', component: AlltimesComponent },
  { path: 'timesheet', component: TimesheetComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'settings', component: SettingsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    TimesheetComponent,
    StatisticComponent,
    SettingsComponent,
    ProjectsComponent,
    ProfileComponent,
    FielderrorsComponent,
    DashboardComponent,
    AlltimesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MenuModule,
    PanelModule,
    ChartModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule,
    InputTextareaModule,
    EditorModule,
    CalendarModule,
    RadioButtonModule,
    FieldsetModule,
    DropdownModule,
    MultiSelectModule,
    ListboxModule,
    SpinnerModule,
    SliderModule,
    RatingModule,
    DataTableModule,
    ContextMenuModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
