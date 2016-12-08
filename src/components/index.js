import angular from 'angular';
import imageApp from './image-app/image-app';
import imageInfo from './image-info/image-info';
import thumbnail from './thumbnail/thumbnail';
import imageDetail from './image-detail/image-detail';

const module =  angular.module('components', []);

module.component('imageApp', imageApp);
module.component('imageInfo', imageInfo);
module.component('thumbnail', thumbnail);
module.component('imageDetail', imageDetail);

export default module.name;