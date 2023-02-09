
import { Component, OnInit } from '@angular/core';
import { Restaurants } from 'src/app/_Models/restaurants.model';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from 'src/app/Services/restaurants.service';

@Component({

  selector: 'app-customerpage',
  templateUrl: './customerpage.component.html',
  styleUrls: ['./customerpage.component.css']

})

export class CustomerpageComponent implements OnInit {

  Restaurants:Restaurants[]=[];
  constructor(private r:RestaurantsService, private router:ActivatedRoute){ }



  ngOnInit(): void {

    this.router.params.subscribe(params =>{
      if(params['searchItem'])
      this.Restaurants=this.r.getAll().filter(rest=>rest.name?.toLowerCase().includes(params['searchItem'].toLowerCase()));
   else

    this.Restaurants=this.r.getAll();

    })

  }

}
