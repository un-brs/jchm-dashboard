App.service('jchmResources', ["$resource", function($resource) {
    var User = $resource('http://localhost:8000/users/:userId?format=jsonp', 
        {userId:'@id'}, 
        {
          get: { 
            method: 'JSONP', 
            params: {format: 'jsonp', callback: 'JSON_CALLBACK'} 
            }
        }
    );

    return {
        User: User
    }
}]
);
