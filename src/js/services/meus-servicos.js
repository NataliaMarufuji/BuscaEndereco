angular.module('meusServicos', ['ngResource'])
	.factory('enderecoService', function($resource, $http) {
		return {
			getCEPs: function(cidade,logradouro, rua) {
				return $http.get('https://viacep.com.br/ws/GO/' + cidade + '/' + logradouro + '%20' + rua + '/json/')
			},

			salvarBusca: function(dados){
				console.log("entrou");
				var apiKey = 'Oobs-XHtE02ImR8MoDXJpw1Bo6fAcGeh';
				var myDB = 'db-consultas';
				var myCollection = 'DadosBusca'
				var url = 'https://api.mlab.com/api/1/databases/'+myDB+'/collections/'+myCollection+'?apiKey='+apiKey

				return $http.post(url, dados);
			}
		};
	});