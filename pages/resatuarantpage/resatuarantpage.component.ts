import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resatuarantpage',
  templateUrl: './resatuarantpage.component.html',
  styleUrls: ['./resatuarantpage.component.css']
})
export class ResatuarantpageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
