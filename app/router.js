import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('designs', function() {
    this.route('new');
    this.route('edit', { path: '/:design_id/edit' });
    this.route('show', { path: '/:design_id' });
  });
  this.route('slices', function() {
    this.route('new');
    this.route('edit', { path: '/:slice_id/edit' });
  });
});

export default Router;
