import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-dash',
  standalone: true,
  imports: [NgIf],
  templateUrl: './dash.component.html',
  styleUrl: './dash.component.css'
})
export class DashComponent {
dashId:unknown;

constructor(private route:ActivatedRoute){}
ngOnInit(){
  this.dashId = this.route.snapshot.paramMap.get('id');
  console.log(this.dashId);
  
}
}
