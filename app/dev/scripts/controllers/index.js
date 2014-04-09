define(['vent'], function (vent) { 'use strict';
  return {
    mockup: function() {
        console.log('controller:mockup');
        vent.trigger('nav:mockup');
    }
  };
});