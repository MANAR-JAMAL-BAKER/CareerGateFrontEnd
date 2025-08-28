import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LanguageService } from '../../../../core/services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { LocalizedPipe } from '../../../pipes/localized.pipe';
import { AccordionModule } from 'primeng/accordion';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-careers-filters',
  imports: [
    TranslateModule,
    LocalizedPipe,
    CommonModule,
    AccordionModule,
    DialogModule,
    SelectModule,
    FormsModule
  ],
  templateUrl: './careers-filter.component.html',
  styleUrls: ['./careers-filter.component.scss'],
})
export class CareersFilterComponent {
  @Input() companies: any[] = [];
  @Input() locations: any[] = [];
  @Input() jobTypes: any[] = [];
  @Input() categories: any[] = [];

  @Input() filters: any = { companies: [], locations: [], types: [], categories: [] };
  @Output() filtersChange = new EventEmitter<any>();

  @Input() sortOptions: any[] = [];
  @Input() sortOption: any;
  @Output() sortOptionChange = new EventEmitter<any>();

  showFilter = false;
  tempFilters: any = { companies: [], locations: [], types: [], categories: [] };

  constructor(public languageService: LanguageService) {}

  openFilters() {
    this.tempFilters = JSON.parse(JSON.stringify(this.filters));
    this.showFilter = true;
  }

  toggleFilter(array: string[], value: string) {
    const index = array.indexOf(value);
    if (index >= 0) array.splice(index, 1);
    else array.push(value);
  }

  clearAll() {
    this.tempFilters.companies = [];
    this.tempFilters.locations = [];
    this.tempFilters.types = [];
    this.tempFilters.categories = [];
  }

applyFilters() {
  this.filtersChange.emit(JSON.parse(JSON.stringify(this.tempFilters)));
  this.showFilter = false;
}
}
