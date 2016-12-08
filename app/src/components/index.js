import angular from 'angular';

import camelcase from 'camelcase';
import path from 'path';

const context = require.context('./', true, /^\.\/(?!index).+?\.js$/);

// import imageApp from './image-app/image-app';
// import imageInfo from './image-info/image-info';
// import thumbnail from './thumbnail/thumbnail';
// import imageDetail from './image-detail/image-detail';

const module =  angular.module('components', []);

context.keys().forEach(key => {
    const name = camelcase(path.basename(key, '.js'));

    module.component(name, context(key).default);
});

// module.component('imageApp', imageApp);
// module.component('imageInfo', imageInfo);
// module.component('thumbnail', thumbnail);
// module.component('imageDetail', imageDetail);

export default module.name;