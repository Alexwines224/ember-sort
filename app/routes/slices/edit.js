import Ember from 'ember';

export default Ember.Route.extend({

	model(params) {
		return this.store.findRecord('silce', params.slice_id);
	},

	setupController(controller, model) {
		this._super(controller, model);
		controller.set('title', 'Edit Slice');
		controller.set('buttonLabel', 'Update Slice');
	},

	renderTemplate() {
		this.render('slices/form');
	},

	actions: {

		saveSlice(slice) {
			slice.save().then(() => this.transitionTo('slices'));
		},

		willTransition(transition) {
			let model = this.controller.get('model');

			if (model.get('hasDirtyAttributes')) {
				let confirmation = confirm('You have unsaved changes, are you sure you want to exit?');

				if (confirmation) {
					model.rollbackAttributes();
				} else {
					transition.abort();
				}
			}
		}

	}

});
