import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({

	title: DS.attr('string'),
	design: DS.belongsTo('design'),

	titleNotEmpty: Ember.computed.notEmpty('title'),
	isDisabled: Ember.computed.not('titleNotEmpty')
  
});
