angular.module('meusServicos', ['ngResource'])
	.factory('enderecoService', function($resource, $http) {
		return {
			getCEPs: function(cidade,logradouro, rua) {
				return $http.get('https://viacep.com.br/ws/GO/' + cidade + '/' + logradouro + '%20' + rua + '/json/')
			}
		};
	});