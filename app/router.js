import EmberRouter from '@ember/routing/router';
import config from 'tds/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('section', function() {
    this.route('index');
    this.route('add');
    this.route('add-product');
    this.route('edit', {path: 'edit/:id'}, function() {
      this.route('edit', {path: 'edit/:id'});
      this.route('add-product');
    });
  });
  this.route('board');
  this.route('index',{path : '/index'});
  this.route('index',{path : "/"})
  this.route('order',{path : "/order/:id"});
});
