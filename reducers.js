var immutable = require("immutable");

module.exports = {
    update: function(state, action) {
        if(action.type === "UPDATE_NAME") {
            return state.set("name", action.name);
        } else if(action.type === "UPDATE_ROLL_NUMBER") {
            return state.set("rollNumber", action.rollNumber);
        }
        return state;
    }
};
