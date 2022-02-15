import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})


export class HomePageComponent implements OnInit, AfterViewInit {
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

  }

}
