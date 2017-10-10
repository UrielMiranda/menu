(function(){
  'use strict';

  angular
  .module('evaluacion',[])
  .controller('mainCtrl', mainCtrl);

  function mainCtrl(){
    var ctrl = this;    
    ctrl.allCareers = [
      {id:0, name:'Multimedia'},
      {id:2, name:'Quiropráctica'},
      {id:3, name:'Gerontología'},
      {id:4, name:'Humanidades'},
      {id:5, name:'Acupuntura'},
      {id:6, name:'Logística'},
      {id:7, name:'Gastronomía'}
    ];
  }
  
})();