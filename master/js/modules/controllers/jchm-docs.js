/**=========================================================
 * Module: jchm-docs.js
 * Provides a simple demo for typeahead
 =========================================================*/

App.controller('JChmDocsCtrl', 
    ["$scope", "$state", "$q", "jchmResources", function ($scope, $state, $q, jchmResources) {
        // var User = $resource('http://localhost:8000/users/:userId?format=jsonp', {userId:'@id'}, 
        //     {
        //       get: { 
        //         method: 'JSONP', 
        //         params: {format: 'jsonp', callback: 'JSON_CALLBACK'} 
        //         }
        //     }
        // );
        // $scope.is_loading = true;
        console.debug($state.params.orgUnitId);
        $scope.org = jchmResources.OrgUnit.get({orgUnitId:$state.params.orgUnitId});
}]);