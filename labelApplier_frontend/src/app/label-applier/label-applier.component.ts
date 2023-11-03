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

  annotations: Annotation[] = [];

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

  exportToJson() {
    const formattedAnnotations = this.annotations.map(annotation => {
      const annotatedText = this.textToLabel.substring(annotation.startIndex, annotation.endIndex);
      return {
        start: annotation.startIndex,
        end: annotation.endIndex,
        label: annotation.label,
        text: annotatedText,
      };
    });

    const jsonExportData = {
      document: this.textToLabel,
      annotation: formattedAnnotations,
    };

    const jsonBlob = new Blob([JSON.stringify(jsonExportData, null, 2)], { type: 'application/json' });
    const url = window.URL.createObjectURL(jsonBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'annotations.json';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
}
