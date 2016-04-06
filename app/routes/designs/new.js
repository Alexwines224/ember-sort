import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		return this.store.createRecord('design');
	},

	setupController(controller, model) {
		this._super(controller, model);
		controller.set('title', 'New Design');
		controller.set('buttonLabel', 'Save Design');
	},

	renderTemplate() {
		this.render('designs/form');
	},

	actions: {

		saveDesign(newDesign) {
			newDesign.save().then(() => this.transitionTo('designs'));
		},

		willTransition() {
			this.controller.get('model').rollbackAttributes();
		}

	}

});
