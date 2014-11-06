/**=========================================================
 * Module: demo-typeahead.js
 * Provides a simple demo for typeahead
 =========================================================*/

App.controller('JChmOrgUnitsCtrl', 
    ["$scope", "jchmResources", function ($scope, jchmResources) {
        // var User = $resource('http://localhost:8000/users/:userId?format=jsonp', {userId:'@id'}, 
        //     {
        //       get: { 
        //         method: 'JSONP', 
        //         params: {format: 'jsonp', callback: 'JSON_CALLBACK'} 
        //         }
        //     }
        // );
        $scope.is_loading = true;
        $scope.user = jchmResources.User.get({userId:1}, function() {
            $scope.is_loading = false;
        });
}]);