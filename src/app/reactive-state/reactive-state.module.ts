import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveStateRoutingModule } from './reactive-state-routing.module';
import { CandidatListComponent } from './components/candidat-list/candidat-list.component';
import { SingleCandidateComponent } from './components/single-candidate/single-candidate.component';
import { CandidatesService } from './services/candidates.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CandidatListComponent, SingleCandidateComponent],
  imports: [CommonModule, ReactiveStateRoutingModule, SharedModule],
  providers: [CandidatesService],
})
export class ReactiveStateModule {}
