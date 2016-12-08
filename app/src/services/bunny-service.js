bunnyService.$inject(['$http', 'apiUrl'])

export default function bunnyService($http, apiUrl) {
    return {
        get() {
            return $http.get(`${apiUrl}/bunnies`)
            .then(res => res.data);
        }, 

        
    }
}


 
