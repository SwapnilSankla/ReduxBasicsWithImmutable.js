# ReduxBasicsWithImmutable.js

As Redux does not guarantee of immutability we can use Immutable.js to make state immutable. We need to make following changes in ReduxBasics app to make state immutable.

1. Store.js: Now the initial state is a immutable Map created with help of immutable.fromJS function.
2. Reducers.js: Reducers no more use Object.assign. Instead it uses state.set(key, value). This results into a new state. Original
   state is not mutated.
3. Sample.js: To convert from Immutable object to normal JS, toJs() function is used.   

Reference: https://facebook.github.io/immutable-js/
