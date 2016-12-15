imageService.$inject = ['$http', 'apiUrl'];

export default function imageService($http, apiUrl) {
    return {
        get() {
            return $http.get(`${apiUrl}/images`)
            .then(res => res.data);
        },

        remove(id) {
            console.log(1, 'image-service id', id);
            return $http.delete(`${apiUrl}/images/${id}`)
                .then(res => res.data);
        },

        add(image) {
            return $http.post(`${apiUrl}/images`, image)
                .then(res => res.data);
        }
    };
}


 
