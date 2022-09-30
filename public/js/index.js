(function(){
  'use strict';

  angular
  .module('app', [
    'app.CustomValidatorFactory',
    'directive.customValidation',
    'directive.customDateInput',
    'directive.customNumber',
    'app.main.controller',    
    ]);
})()
