/**=========================================================
 * Module:jchm-organizations.js
 * Provides a simple demo for typeahead
 =========================================================*/

App.controller('JChmOrgUnitsCtrl', 
    ["$scope", "$q", "jchmResources", function ($scope, $q, jchmResources) {
        // var User = $resource('http://localhost:8000/users/:userId?format=jsonp', {userId:'@id'}, 
        //     {
        //       get: { 
        //         method: 'JSONP', 
        //         params: {format: 'jsonp', callback: 'JSON_CALLBACK'} 
        //         }
        //     }
        // );
        $scope.is_loading = true;
        jchmResources.OrgUnit.query().$promise.then(
            function(orgs) {
                $scope.orgs = orgs;
            }
        );
}]);