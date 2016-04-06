import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		return this.store.createRecord('slice');
	},

	setupController(controller, model) {
		this._super(controller, model);
		controller.set('title', 'New Slice');
		controller.set('buttonLabel', 'Save Slice');
	},

	renderTemplate() {
		this.render('slices/form');
	},

	actions: {

		saveSlice(newSlice) {
			newSlice.save().then(() => this.transitionTo('slices'));
		},

		willTransition() {
			this.controller.get('model').rollbackAttributes();
		}

	}

});
