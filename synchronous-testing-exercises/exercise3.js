module.exports = Toaster;


function Toaster(){
  var vm = this;
  vm.powerStatus = 'off';
  vm.toastingStatus = 'off';
  vm.power = function(){
    if(vm.powerStatus === 'on'){
      vm.powerStatus = 'off';
    } else if (vm.powerStatus === 'off') {
      vm.powerStatus = 'on';
    } else if (vm.powerStatus === 'on' && vm.toastingStatus === 'on'){
      vm.powerStatus = 'off';
      vm.toastingStatus = 'off';
    }
  }
  vm.toast = function(){
    if(vm.powerStatus === 'off'){
      vm.toastingStatus = 'off';
    } else if (vm.powerStatus === 'on') {
      vm.toastingStatus = 'on';
    }
  }
}
