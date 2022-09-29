(function(){
  'use strict';

  angular
  .module('app', [
    'app.CustomValidatorFactory',
    'directive.customValidation',
    'directive.customDateInput',
    'app.main.controller',    
    ]);
})()
