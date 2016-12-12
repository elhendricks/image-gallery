import angular from 'angular';
import './scss/main.scss';
import components from './components';
import services from './services';

const app = angular.module('myApp', [components, services]);


// TODO: for production uncomment prod and comment out dev
const dev = 'http://localhost:3000/api';
// const prod = '/api';

app.value('apiUrl', dev);
// app.value('apiUrl', prod);

app.factory('apiUrl', function() {
    return dev;
    // return prod;
});