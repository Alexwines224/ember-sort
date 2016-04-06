import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		return this.store.findAll('design');
	},

	actions: {

		addDesign(design) {
			design.set('member', true);
			design.save();
		},

		removeDesign(design) {
			design.set('member', false);
			design.save();
		},

		deleteDesign(design) {
			let confirmation = confirm("Are you sure you want to delete this design?");

			if (confirmation) {
				design.destroyRecord();
			}
		}

	}

});