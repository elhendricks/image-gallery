routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {



    $stateProvider.state({
        name: 'gallery',
        url: '/gallery',
        component: 'gallery',
        abstract: true,
        default: '.admin',
        resolve: {
            albums: ['albumService', function(albums) {
                return albums.getAlbums();
            }],
        },

    });

    $stateProvider.state({
        name: 'gallery.admin',
        url: '/admin',
        resolve: {
            add: ['imageService', function(images) {
                return function(image) {
                    return images.add(image)
                    .then(img => this.images.push(img));
                };
            }], 
            addAlbum: ['albumService', function(albums) {
                return function(album) {
                    return albums.addAlbum(album)
                        .then(alb => this.albums.push(alb));
                };
            }]
        },
        component: 'galleryAdmin', 
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
        name: 'gallery.albums.thumbnail',
        url: '/thumbnail',
        component: 'thumbnail'
    });

    $stateProvider.state({
        name: 'gallery.albums.detail',
        url: '/detail',
        component: 'detail'
    });

    $stateProvider.state({
        name: 'gallery.albums.information',
        url: '/information',
        component: 'information'
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