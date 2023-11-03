import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LabelServiceService } from '../services/label-service.service';
import { Annotation, NgxAnnotateTextComponent } from 'ngx-annotate-text';

@Component({
  selector: 'app-label-applier',
  templateUrl: './label-applier.component.html',
  styleUrls: ['./label-applier.component.css']
})
export class LabelApplierComponent implements OnInit {
  @ViewChild('annotateText') ngxAnnotateText?: NgxAnnotateTextComponent;

  textToLabel = "";
  labels: any[] = [];

  constructor(
    private route: ActivatedRoute, 
    private labelService: LabelServiceService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.textToLabel = params['text'].toString();
    });
    this.labelService.getAllLabels().subscribe((data) => {
      this.labels = data;
      console.log(this.labels);
    });
  }

  annotations: Annotation[] = [
    new Annotation(3, 11, 'Date', '#0069d9'),
    new Annotation(36, 45, 'City', '#dc3545'),
    new Annotation(47, 52, 'Country', '#28a745'),
    new Annotation(77, 85, 'Time', '#5a6268'),
  ];

  events: string[] = [];

  addAnnotation(label: string, color: string): void {
    
    if (!this.ngxAnnotateText) {
      return;
    }

    const selection = this.ngxAnnotateText.getCurrentTextSelection();
    console.log(selection);
    if (!selection) {
      console.log("test");
      return;
    }

    if (this.ngxAnnotateText.isOverlappingWithExistingAnnotations(selection)) {
      alert('The selected text is already annotated.');
      return;
    }

    const annotation = new Annotation(selection.startIndex, selection.endIndex, label, color);
    this.annotations = this.annotations.concat(annotation);
    this.events.push(`Added '${annotation}'`);
  }

  onClickAnnotation(annotation: Annotation) {
    this.events.push(`Clicked on '${annotation}'`);
  }

  onRemoveAnnotation(annotation: Annotation): void {
    this.events.push(`Removed '${annotation}'`);
  }
}
