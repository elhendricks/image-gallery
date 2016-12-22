albumService.$inject = ['$http', 'apiUrl'];

export default function albumService($http, apiUrl) {
    return {
        getAlbums() {
            return $http.get(`${apiUrl}/albums`)
            .then(res => res.data);
        },

        getAlbum(id) {
            return $http.get(`${apiUrl}/albums/${id}`)
            .then(res => res.data);
        },


        removeAlbum(id) {
            return $http.delete(`${apiUrl}/albums/${id}`)
                .then(res => res.data);
        },

        addAlbum(image) {
            return $http.post(`${apiUrl}/albums`, image)
                .then(res => res.data);
        },

    };  
}


 
