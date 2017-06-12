var immutable = require("immutable");
var store = require("redux");
var reducer = require("./reducers");
var initialState = immutable.fromJS({
    name: "",
    rollNumber: 0
});

module.exports = {
    create: function () {
        return store.createStore(reducer.update, initialState);
    }
};
