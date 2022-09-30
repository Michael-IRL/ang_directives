(function(){
  function customNumberDirective(){
    return {
      restrict: 'A',
      require: 'ngModel',
      scope:{
        number: '=ngModel'
      },
      template: `<div>
  <input type="text" name="{{elementName}}" id="{{elementName}}" ng-model="number"/>
</div>`,
      link: function(scope, element, attrs, modelCtrl){
        scope.elementName = attrs.name
      }
    }
  }

  angular
    .module('directive.customNumber',[])
    .directive('customNumber',customNumberDirective);
})()