angular.module('app').controller('MainController', ['$scope', 'enderecoService', function($scope, enderecoService) {

    $scope.enderecos = [];
    $scope.dadosBusca = {cidade: 'Goiânia', rua: '', logradouro: ''};
    $scope.error = false;

	$scope.buscaEndereco = function(){
        if($scope.validarLogradouro()){
            $scope.error = false;

            enderecoService.getCEPs($scope.dadosBusca.cidade, $scope.dadosBusca.logradouro, $scope.dadosBusca.rua)
                .then(function successCallback(response) {
                    $scope.enderecos = response.data;
                    $scope.dadosBusca.rua = '';
                    $scope.dadosBusca.logradouro = '';
                    console.log($scope.enderecos);
                    enderecoService.salvarBusca($scope.dadosBusca);
                }, function errorCallback(response) {
                    alert(response.status);
            });
        }
    }

    $scope.validarLogradouro = function(){
        if($scope.dadosBusca.logradouro.length < 3){
            $scope.error = true;
            return false;
        }
        return true;
    }
}]);