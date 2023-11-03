import { Component, OnInit } from '@angular/core';
import { LabelServiceService } from '../services/label-service.service';

@Component({
  selector: 'app-label-manager',
  templateUrl: './label-manager.component.html',
  styleUrls: ['./label-manager.component.css']
})
export class LabelManagerComponent implements OnInit {
  labels: any = [];
  modalVisibility: boolean = false;
  labelName = "";
  labelColor = "";

  constructor(private labelService: LabelServiceService) {}

  ngOnInit() {
    this.labelService.getAllLabels().subscribe((data) => {
      this.labels = data;
      console.log(this.labels);
    });
  }

  deleteLabel(label_name: string) {
    this.labelService.deleteLabel(label_name).subscribe((data) => {
      console.log(data);
      this.labelService.getAllLabels().subscribe((data) => {
        this.labels = data;
      });
    });
  }

  openAddLabelModal() {
    this.modalVisibility = true;
  }

  addLabel() {
    this.labelService.addLabel(this.labelName, this.labelColor).subscribe((data) => {
      this.modalVisibility = false;
      this.labelService.getAllLabels().subscribe((data) => {
        this.labels = data;
      });
    });
  }
}
