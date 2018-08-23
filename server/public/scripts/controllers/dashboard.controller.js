app.controller('DashboardController', ['$http', function ($http) {
    console.log('DashboardController has been loaded');
    const vm = this;

    vm.petToAdd = {
        ownerName: '',
        petName: '',
        petBreed: '',
        petColor: '',
        petAttitude: '',
        petSwag: ''
    }

    vm.petsFromDb = { list: [{
        ownerName: '',
        petName: '',
        petBreed: '',
        petColor: '',
        petAttitude: '',
        petSwag: ''

     }]};
    
     vm.addPet = function (pet){
         $http({
             method: 'POST',
             url: '/dashboard',
             data: pet
         }).then( function ( response ){
             console.log( 'dashboard controller - addPet() - response:', response.data);
         }).catch( function (error){
             console.log('dashboard controller  - addPet() error:', error.statusText);
         })
     }

}]);