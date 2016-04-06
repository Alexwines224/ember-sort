import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  
  title: DS.attr('string'),
  member: DS.attr('boolean', { defaultValue: true }),
  slices: DS.hasMany('slice'),

  titleNotEmpty: Ember.computed.notEmpty('title'),
  isDisabled: Ember.computed.not('titleNotEmpty')

  
});