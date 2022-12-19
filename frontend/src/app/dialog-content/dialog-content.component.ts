import { Component, Input } from '@angular/core';
import { SubjectInServiceService } from '../subject-in-service.service';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent {
  @Input() label: string | undefined;
  constructor(private SubjectInService: SubjectInServiceService){}
  predizione: string="";
  confidenza: string="";


  data: string[] = [];
  ngOnInit(): void {
    this.SubjectInService.currentData.subscribe((e) => this.data.push(e));
    this.predizione+=this.data;
  }
}
