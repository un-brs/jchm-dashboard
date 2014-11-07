App.service('jchmResources', ["$resource", "JCHM_PARAMS", 
function($resource, jchm_params) {
    var url = jchm_params.api;

    var options = { 
            method: 'JSONP', 
            params: {format: 'jsonp', callback: 'JSON_CALLBACK'}
    };

    var options_arr = angular.copy(options);
    options_arr.isArray = true;

    var User = $resource(url + '/users/:userId', 
        {userId:'@id'}, 
        {
          get: options
        }
    );

    var OrgUnit = $resource(url + '/orgunits/:orgUnitId', 
        {orgUnitId:'@id'}, 
        {
          get: options,
          query: options_arr
        }
    );

    var OrgUnitModule = $resource(url + '/orgunitmodules/:orgUnitModuleId', 
        {orgUnitModuleId:'@id'}, 
        {
          get: options_arr,
          query: options_arr
        }
    );

    return {
        User: User,
        OrgUnit: OrgUnit
    };
}]
);
