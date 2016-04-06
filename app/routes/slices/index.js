import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		return this.store.findAll('slice');
	},

	actions: {

		deleteSlice(slice) {
			let confirmation = confirm("Are you sure you want to delete this slice?");

			if (confirmation) {
				slice.destroyRecord();
			}
		}

	}

});
