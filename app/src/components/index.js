import angular from 'angular';

import camelcase from 'camelcase';
import path from 'path';

const context = require.context('./', true, /^\.\/(?!index).+?\.js$/);

// import imageApp from './image-app/image-app';
// import information from './information/information';
// import thumbnail from './thumbnail/thumbnail';
// import detail from './detail/detail';

const module =  angular.module('components', []);

context.keys().forEach(key => {
    const name = camelcase(path.basename(key, '.js'));

    module.component(name, context(key).default);
});

// module.component('imageApp', imageApp);
// module.component('information', information);
// module.component('thumbnail', thumbnail);
// module.component('detail', detail);

export default module.name;