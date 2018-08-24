app.controller('DashboardController', ['$http', '$timeout', function ($http, $timeout) {
    console.log('DashboardController has been loaded');
    const vm = this;

    vm.testshow = false;
    vm.ownerID
    vm.ownerList = [];

    vm.petToAdd = {
        ownerID: '',
        petName: '',
        petBreed: '',
        petColor: '',
        petAttitude: '',
        petSwag: '',
        image_url: ''
    }

    vm.petsFromDb = [{
        ownerName: '',
        petName: '',
        petBreed: '',
        petColor: '',
        petAttitude: '',
        petSwag: ''

    }];
    // end globals

    vm.addPet = function (pet) {
        alert(vm.ownerID.id);
        pet.ownerID = vm.ownerID.id;
        $http({
            method: 'POST',
            url: '/dashboard',
            data: pet
        }).then(function (response) {
            console.log('dashboard controller - addPet() - response:', response.data);
        }).catch(function (error) {
            console.log('dashboard controller  - addPet() error:', error.statusText);
        })
    } // end addPet


    vm.getPets = function () {
        $http({
            method: 'GET',
            url: '/dashboard'
        }).then((response) => {
            console.log('back from pets table GET with: ', response.data);
            vm.petsFromDb = response.data;
        }).catch((error) => {
            console.log('error getting pets from db: ', error);
            alert('errer wh1l f3tching teh bebies O.O pls check');
        })
    } // end getCrew

    vm.getOwners = function () {
        $http({
            method: 'GET',
            url: '/dashboard/getOwners'
        }).then((response) => {
            console.log('back from owners table GET with: ', response.data);
            vm.ownerList = response.data;
        }).catch((error) => {
            console.log('error getting owners from db: ', error);
            alert('error getting owners list from db');
        })
    }

    vm.deleteHistory = function (historyId) {
        $http({
            method: 'DELETE',
            url: `/dashboard/${historyId}`
        }).then((response) => {
            vm.getPets();
        }).catch((error) => {
            console.log('error making delete hist request', error);
            alert('error deleting history line');
        });
    };

    vm.toggleStatus = function (checkInStatus, id) {
        console.log(checkInStatus, id);
        if (checkInStatus == 'Yes') {
            $http({
                method: 'PUT',
                url: '/dashboard/' + id,
                data: { status: 'No'}
            })
            
        }
        else if( checkInStatus == 'No'){
            $http({
                method: 'PUT',
                url: '/dashboard/' + id,
                data: { status: 'Yes'}
            })
        }

        vm.getPets(); 
        // halp // cant get either $timeout or setTimeout to delay this function call
        // halp // and so the dom is not updating in time to reflect the actual db data
    }; // end toggleStatus

    // calls on load
    vm.getPets();
    vm.getOwners();
    // end calls on load
}]);