angular.module('app').controller('MainController', ['$scope', 'enderecoService', function($scope, enderecoService) {

    function Endereco() {
        this.rua = '';
        this.logradouro = '';
        this.cidade = 'Goiânia';
    }

    $scope.enderecos = [];
    $scope.endereco = new Endereco();
    $scope.error = false;

	$scope.buscaEndereco = function(){
        if($scope.validarLogradouro()){
            $scope.error = false;

            $scope.adicionaBusca = function() {
                $http.post('/dadosBusca', $scope.endereco);
              }

            enderecoService.getCEPs($scope.endereco.cidade, $scope.endereco.logradouro, $scope.endereco.rua)
                .then(function successCallback(response) {
                    $scope.enderecos = response.data;
                    $scope.endereco.rua = '';
                    $scope.endereco.logradouro = '';
                    console.log($scope.enderecos);
                }, function errorCallback(response) {
                    alert(response.status);
                });;
        }
    }

    $scope.validarLogradouro = function(){
        if($scope.endereco.logradouro.length < 3){
            $scope.error = true;
            return false;
        }
        return true;
    }
}]);