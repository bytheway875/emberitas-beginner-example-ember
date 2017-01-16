import Ember from 'ember';

export default Ember.Controller.extend({
  focusColor: null,
  actions: {
    setFocusColor(color){
      console.log('set focus color');
      this.set('focusColor', color);
    }
  }
});
