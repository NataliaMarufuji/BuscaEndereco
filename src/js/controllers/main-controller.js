angular.module('app').controller('MainController', ['$scope', 'enderecoService', function($scope, enderecoService) {

    $scope.enderecos = [];
    $scope.dadosBusca = {cidade: 'Goiânia', rua: '', logradouro: ''};
    $scope.nenhumResultado = false;
    $scope.error = false;

	$scope.buscaEndereco = function(){
        if($scope.validarLogradouro()){
            $scope.error = false;

            enderecoService.getCEPs($scope.dadosBusca.cidade, $scope.dadosBusca.logradouro, $scope.dadosBusca.rua)
                .then(function successCallback(response) {
                    $scope.enderecos = response.data;
                    $scope.dadosBusca.rua = '';
                    $scope.dadosBusca.logradouro = '';
                    $scope.validarResultado($scope.enderecos);

                   enderecoService.salvarBusca($scope.dadosBusca)
                                    .then(function successCallback(response) {
                                        console.log("Dados salvos com sucesso");
                                    }, function errorCallback(response) {
                                        alert("Erro ao salvar no Banco de dados");
                                    });

                }, function errorCallback(response) {
                    alert("Erro ao buscar endereços");
            });
        }
    }

    $scope.validarResultado = function(resultado){
        if(resultado.length == 0){
            $scope.nenhumResultado = true;
        }else{
            $scope.nenhumResultado = false;
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