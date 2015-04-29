angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	$scope.items = [];
	console.log('hola');
	for (var i = 0; i < 1000; i++) {
		$scope.items.push(i);
	}
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
