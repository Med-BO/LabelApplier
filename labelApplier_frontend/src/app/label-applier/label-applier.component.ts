import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LabelServiceService } from '../services/label-service.service';

@Component({
  selector: 'app-label-applier',
  templateUrl: './label-applier.component.html',
  styleUrls: ['./label-applier.component.css']
})
export class LabelApplierComponent implements OnInit {
  textToLabel: string = "";
  labels: any[] = [];

  constructor(
    private route: ActivatedRoute, 
    private labelService: LabelServiceService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.textToLabel = params['text'];
      console.log(this.textToLabel);
    });
    this.labelService.getAllLabels().subscribe((data) => {
      this.labels = data;
      console.log(this.labels);
    });
  }
}
