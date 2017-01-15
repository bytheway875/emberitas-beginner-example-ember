import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      id: null,
      name: 'My New Palette',
      colors: [
        {red: randomColorCode(), blue: randomColorCode(), green: randomColorCode()},
        {red: randomColorCode(), blue: randomColorCode(), green: randomColorCode()},
        {red: randomColorCode(), blue: randomColorCode(), green: randomColorCode()},
        {red: randomColorCode(), blue: randomColorCode(), green: randomColorCode()},
        {red: randomColorCode(), blue: randomColorCode(), green: randomColorCode()}
      ]
    };
  },
});

function randomColorCode(){
  return Math.floor(Math.random() * 256)
}
