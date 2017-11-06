function ndAudioInput(args) {
  
  // Set the DOM element (e.g. <input>)
  this.element = args.element || null;
  
  // Subscribe to events
  this.subscribe();
  
  // Create a custom event
  this.inputEvent = new CustomEvent("ndAudioInputEvent", { data: {} });
  
} // / ndAudioInput


/**
 * ndAudioInput - functions
 */
ndAudioInput.prototype = {
  
  subscribe : function() {
    /*
     * input
     */
    var input$ = Rx.Observable.fromEvent(this.element, 'input').debounce(300);
    
    // Subscribe to the input stream
    input$.subscribe(e => {    
      // Update data in custom event
      this.inputEvent.data = this.element.value;

      // Fire custom event
      document.body.dispatchEvent(this.inputEvent);
    });
    
    
    /**
     * ndSoundcloudEvent
     */
    var sc$ = Rx.Observable.fromEvent(document.body, 'ndSoundcloudEvent');

    // Subscribe to the ndSoundcloudEvent stream
    sc$.subscribe(e => {
      this.element.value = e.data;
    });
  },

}; // / ndAudioInput.prototype