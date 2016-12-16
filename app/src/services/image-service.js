imageService.$inject = ['$http', 'apiUrl'];

export default function imageService($http, apiUrl) {
    return {
        get() {
            return $http.get(`${apiUrl}/images`)
            .then(res => res.data);
        },

        remove(id) {
            return $http.delete(`${apiUrl}/images/${id}`)
                .then(res => res.data);
        },

        add(image) {
            return $http.post(`${apiUrl}/images`, image)
                .then(res => res.data);
        },

        getAlbums() {
            return $http.get(`${apiUrl}/albums`)
            .then(res => res.data);
        },

        removeAlbum(id) {
            return $http.delete(`${apiUrl}/albums/${id}`)
                .then(res => res.data);
        },

        addAlbum(album) {
            return $http.post(`${apiUrl}/albums`, album)
                .then(res => res.data);
        }


    };
}


 
