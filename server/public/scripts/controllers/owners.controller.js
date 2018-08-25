app.controller('ownersController', ['$http', function ($http) {
    console.log('OwnersController has been loaded');
    const vm = this;

    vm.ownerID
    vm.ownerToAdd = {
        ownerID = '',
        ownerName = '',
        numberOfPets
    };

    vm.ownersFromDb = [{

    }];
    
    // end globals

    vm.addOwner = function (owner) {
        alert(vm.ownerID.id);
        owner.ownerID = vm.ownerID.id;
        $http({
            method: 'POST',
            url: '/owners',
            data: owner
        }).then(function (response) {
            console.log('owners controller addOwner() - response:', response.data);
        }).catch(function (error) {
            console.log('dashboard controller addOwner() error:', error.statusText);
        })
    };


}]);