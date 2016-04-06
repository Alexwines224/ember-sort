import Ember from 'ember';

export default Ember.Route.extend({

	model(params) {
		return Ember.RSVP.hash({
			design: this.store.findRecord('design', params.design_id),
			slices: this.store.findAll('slice')
		});
	},

	actions: {

		addSlice(slice) {
			let design = this.controller.get('model.design');

			design.get('slices').pushObject(slice);
			slice.save();
		},

		removeSlice(slice) {
			let design = this.controller.get('model.design');

			design.get('slices').removeObject(slice);
			slice.save();
		}

	}


});
