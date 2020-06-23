import { Component, OnInit } from '@angular/core';
import { CountryService } from './shared/county.service';
import { Country } from './shared/country';
import { Observable, Subject } from 'rxjs';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";
import {
  tap,
  switchMap,
  debounceTime,
  distinctUntilChanged
} from "rxjs/operators";
export interface VehicleData {
  store: string;
  year: number;
  make: number;
  model: number;
  Appraisal: number;
}

const logoURL = 
"../assets/images/EchoPark Logo@2x.png";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  loading: boolean = false;
  countries$: Observable<Country[]>;
  private searchTerms = new Subject<string>();

  constructor(private countryService: CountryService,private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {  this.matIconRegistry.addSvgIcon(
      "logo",
      this.domSanitizer.bypassSecurityTrustResourceUrl(logoURL));}

  search(term: string) {
    this.searchTerms.next(term);
  }
  dataSource: VehicleData[] = [
    {store: 'Yogurt', year: 159, make: 6, model: 24, Appraisal: 4},
    {store: 'Sandwich', year: 237, make: 9, model: 37, Appraisal: 4},
    {store: 'Eclairs', year: 262, make: 16, model: 24, Appraisal: 6},
    {store: 'Cupcakes', year: 305, make: 4, model: 67, Appraisal: 4},
    {store: 'Gingerbreads', year: 356, make: 16, model: 49, Appraisal: 4},
 ];
 displayedColumns: string[] = ['store', 'year', 'make', 'model','Appraisal'];
  ngOnInit(): void {
    this.countries$ = this.searchTerms.pipe(
      tap(_ => this.loading = true),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.countryService.searchCountry(term)),
      tap(_ => this.loading = false)
    )
  }

}
