routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {



    $stateProvider.state({
        name: 'gallery',
        url: '/gallery',
        component: 'gallery', 
        resolve: {
            albums: ['albumService', function(albums) {
                return albums.getAlbums();
            }],
            add: ['imageService', function(images) {
                return function(image) {
                    images.add(image)
                        .catch(console.log);
                };
            }], 

            addAlbum: ['albumService', function(albums) {
                return function(album) {
                    albums.addAlbum(album)
                    .then(saved => this.albums.push(saved))
                    .catch(console.log);
                };
            }]
        },

    });

    $stateProvider.state({
        name: 'gallery.admin',
        url: '/admin',
        // component: 'galleryAdmin', 
        views: {
            one: {template:'<p> I\'m number one </p>'},
            two: {template:'<p> I\'m number two </p>'} 
        }
        
    });

    $stateProvider.state({
        name: 'gallery.albums',
        url: '/albums/:album',
        component: 'galleryAlbums', 
        params: {
            album: {dynamic: true},
        },

        resolve: {
            album: ['$transition$', t => t.params().album || '']
        }
    });

    $stateProvider.state({
        name: 'about', 
        url: '/about',
        component: 'about'
    });

    $stateProvider.state({
        name: 'welcome',
        url: '/',
        component: 'welcome'
    });
    $urlRouterProvider.otherwise('/');
}