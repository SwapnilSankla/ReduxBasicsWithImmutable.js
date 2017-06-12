var store = require('./store');
var action = require('./actions');
var seatMapStore = store.create();
console.log("seatMapStore Initial state:", seatMapStore.getState().toJS());
console.log("dispatch(action.updateNameAction('Swapnil')");
seatMapStore.dispatch(action.updateNameAction("Swapnil"));
console.log("dispatch(action.updateRollNumberAction(2)");
seatMapStore.dispatch(action.updateRollNumberAction(2));
console.log("Modifying name to sdfgh")
seatMapStore.getState().name = 'sdfgh'
console.log("Though name is modified, you get original object when you call seatMapStore.getState().toJS():",
    seatMapStore.getState().toJS());
console.log("Though name is modified, you get original name when you call seatMapStore.getState().toJS().name:", seatMapStore.getState().toJS().name);
console.log("However calling seatMapStore.getState().name returns mutated copy:", seatMapStore.getState().name);
