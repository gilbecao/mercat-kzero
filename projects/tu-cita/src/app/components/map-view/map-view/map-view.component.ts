import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SiteStoreService } from '../../../core/unit/site-store.service';
import { Site } from '../../../core/interfaces/site.interface';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapViewComponent {
  public sites$ = this.siteStoreService.sites$;
  public constructor(private router: Router, private siteStoreService: SiteStoreService) {
    this.siteStoreService.loadSites();
  }

  public onMarkerClicked(site: Site): void {
    this.siteStoreService.selectedSite = site;
    this.router.navigate(['/reservation', { site: site.id }]);
  }
}
