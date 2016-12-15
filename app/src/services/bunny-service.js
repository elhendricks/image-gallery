bunnyService.$inject = ['$http', 'apiUrl'];

export default function bunnyService($http, apiUrl) {
    return {
        get() {
            return $http.get(`${apiUrl}/bunnies`)
            .then(res => res.data);
        },

        remove(id) {
            console.log(1, 'bunny-service id', id);
            return $http.delete(`${apiUrl}/bunnies/${id}`)
                .then(res => res.data);
        },

        add(bunny) {
            return $http.post(`${apiUrl}/bunnies`, bunny)
                .then(res => res.data);
        }
    };
}


 
