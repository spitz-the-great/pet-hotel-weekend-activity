app.controller('DashboardController', ['$http', function ($http) {
    console.log('DashboardController has been loaded');
    const vm = this;

    vm.test = 'ng test';

    vm.ownerList = [];

    vm.petToAdd = {
        ownerName: '',
        petName: '',
        petBreed: '',
        petColor: '',
        petAttitude: '',
        petSwag: ''
    }

    vm.petsFromDb =[{
        ownerName: '',
        petName: '',
        petBreed: '',
        petColor: '',
        petAttitude: '',
        petSwag: ''

     }];
    // end globals

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
     } // end addPet


     vm.getPets = function (){
         $http({
             method: 'GET',
             url: '/dashboard'
         }).then((response) => {
             console.log('back from pets table GET with: ', response.data);
             vm.petsFromDb = response.data;
         }).catch(( error ) =>{
             console.log('error getting pets from db: ', error);
            alert('errer wh1l f3tching teh bebies O.O pls check');
         })
     } // end getCrew
     vm.getPets();
}]);