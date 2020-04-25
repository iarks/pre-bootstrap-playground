import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pre-bootstrap-playground';

  private doc: Document;


	// I initialize the service.
	// --
	// NOTE: When I first tried to approach this problem, I was going to try and use the
	// core Renderer service; however, it appears that the Renderer cannot be injected
	// into a service object (throws error: No provider for Renderer!). As such, I am
	// treating THIS class as the implementation of the DOM abstraction (so to speak),
	// which can be overridden on a per-environment basis.
	constructor( @Inject( DOCUMENT ) doc: any ) {
    let event = new Event("appready");
    doc.dispatchEvent(event);
  }
  
  
}
