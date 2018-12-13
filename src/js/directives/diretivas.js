angular.module('diretivas', [])
	.directive('painelDeEnderecos', function() {

		var ddo = {};

		ddo.restrict = "AE";
        ddo.transclude = true;

        ddo.scope = {
            logradouro: '@',
            bairro: '@',
            cep: '@'
        };

        ddo.template = '<li class="collection-item">{{logradouro}} - {{bairro}} - {{cep}}</li>';  

		return ddo;
	})