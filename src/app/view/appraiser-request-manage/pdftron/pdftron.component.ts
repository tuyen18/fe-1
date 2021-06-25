import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import WebViewer from '@pdftron/webviewer';


@Component({
  selector: 'app-pdftron',
  templateUrl: './pdftron.component.html',
  styleUrls: ['./pdftron.component.css']
})
export class PdftronComponent implements AfterViewInit {
  @ViewChild('viewer') viewerRef: ElementRef;
  constructor() { }

  ngAfterViewInit(): void {
    WebViewer({
      path: '../assets/lib',
      initialDoc: 'assets/docs/ChungNhan (1).pdf'

    }, this.viewerRef.nativeElement)
  }

}
