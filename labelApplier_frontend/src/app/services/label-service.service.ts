import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LabelServiceService {

  url: string = "";

  constructor(private httpClient: HttpClient) {
    this.url = "http://127.0.0.1:8000/labelApplier/";
  }

  getAllLabels() {
    return this.httpClient.get<any>(this.url+"allLabels/");
  }

  addLabel(label_name: string, label_color: string) {
    return this.httpClient.post(this.url + "post/", {
      "label_name": label_name,
      "label_color": label_color
    });
  }

  deleteLabel(label_name: string) {
    return this.httpClient.delete(this.url + "delete/" + label_name + "/");
  }
}
