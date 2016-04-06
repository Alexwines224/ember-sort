import Ember from 'ember';

export default Ember.Route.extend({

	model(params) {
		return this.store.findRecord('design', params.design_id);
	},

	setupController(controller, model) {
		this._super(controller, model);
		controller.set('title', 'Edit Design');
		controller.set('buttonLabel', 'Update Design');
	},

	renderTemplate() {
		this.render('designs/form');
	},

	actions: {

		saveDesign(design) {
			design.save().then(() => this.transitionTo('designs'));
		},

		willTransition(transition) {

			let model = this.controller.get('model');

			if (model.get('hasDirtyAttributes')) {

				let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

				if (confirmation) {
					model.rollbackAttributes();
				} else {
					transition.abort();
				}


			}

		}

	}

});
