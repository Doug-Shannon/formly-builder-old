(function() {
  'use strict';

  var MODULE = "formlyBuilderModule";
  var ngModule = angular.module(MODULE, []);
  
  require('./fbComposer')(ngModule);
  require('./fbMapper/')(ngModule);
})(); 
