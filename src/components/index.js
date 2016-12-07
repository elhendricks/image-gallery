import angular from 'angular';
import imageInfo from './image-info/image-info';

const module =  angular.module('components', []);

module.component('imageInfo', imageInfo);

export default module.name;