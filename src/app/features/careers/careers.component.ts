import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { JobListComponent } from "../../shared/components/careers/job-list/job-list.component";

@Component({
  selector: 'app-careers',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslatePipe, JobListComponent],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss'
})
export class CareersComponent {

}
