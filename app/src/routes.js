routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {

    $stateProvider.state({
        name: 'welcome',
        url: '/',
        component: 'welcome'
    });

    $stateProvider.state({
        name: 'gallery',
        url: '/gallery',
        component: 'gallery'
    });

    $stateProvider.state({
        name: 'gallery.admin',
        url: '/admin',
        component: 'galleryAdmin'
    });

    $stateProvider.state({
        name: 'gallery.albums',
        url: '/:view?album',
        component: 'galleryAlbums', 
        params: {
            view: {dynamic: true},
            album: {dynamic: true},
        },

        resolve: {
            view: ['$transition$', t => t.params().view || 'thumbnail'],
            album: ['$transition$', t => t.params().album || '']
        }
    });

    $stateProvider.state({
        name: 'about', 
        url: '/about',
        component: 'about'
    });

    $urlRouterProvider.otherwise('/');
}