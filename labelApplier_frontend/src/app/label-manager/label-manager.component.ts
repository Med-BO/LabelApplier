import { Component, OnInit } from '@angular/core';
import { LabelServiceService } from '../services/label-service.service';

@Component({
  selector: 'app-label-manager',
  templateUrl: './label-manager.component.html',
  styleUrls: ['./label-manager.component.css']
})
export class LabelManagerComponent implements OnInit {
  labels: any = [];

  constructor(private labelService: LabelServiceService) {}

  ngOnInit() {
    this.labelService.getAllLabels().subscribe((data) => {
      this.labels = data;
      console.log(this.labels);
    });
  }
}
