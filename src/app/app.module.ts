import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HomeBanerContentComponent } from './home-baner-content/home-baner-content.component';
import { HomeNumberContentComponent } from './home-number-content/home-number-content.component';
import { WhyExaGridComponent } from './why-exa-grid/why-exa-grid.component';
import { SectionComponent } from './why-exa-grid/section/section.component';
import { BackupFutureComponent } from './backup-future/backup-future.component';
import { VideoModalComponent } from './video-modal/video-modal.component';
import { RansomwareRecoveryComponent } from './ransomware-recovery/ransomware-recovery.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { HomeScaleComponent } from './home-scale/home-scale.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HomeBanerContentComponent,
    HomeNumberContentComponent,
    WhyExaGridComponent,
    SectionComponent,
    BackupFutureComponent,
    VideoModalComponent,
    RansomwareRecoveryComponent,
    RecoveryComponent,
    HomeScaleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
