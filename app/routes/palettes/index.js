
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        id: 1,
        name: 'Tropical',
        colors: [
          { red: 217, green: 33, blue: 32},
          { red: 231, green: 116, blue: 47},
          { red: 223, green: 165, blue: 58},
          { red: 177, green: 190, blue: 78},
          { red: 109, green: 179, blue: 136}
        ]
      },
      {
        id: 2,
        name: 'Cool',
        colors: [
          { red: 70, green: 131, blue: 193},
          { red: 63, green: 78, blue: 161},
          { red: 120, green: 28, blue: 129},
          { red: 0, green: 0, blue: 0},
          { red: 255, green: 255, blue: 255}
        ]
      }
    ];
  }
});
