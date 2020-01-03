export default function new_reducer(TYPENAME, initialState, transform) {
  return function(state = undefined, action) {
    // manage default
    if (state === undefined) {
      if (initialState.call !== undefined) {
        // call initialState if it is a function
        state = initialState(state, action);
      } else {
        // otherwise don't
        state = initialState;
      }
    }

    // do not manage other actions in this reducer
    if (action.type !== TYPENAME) return state;
  
    // deep copy state
    let stateCopy = JSON.parse(JSON.stringify(state));
    // support in place and idempotetent return styles the same way
    stateCopy = transform(stateCopy, action);

    return stateCopy;
  }
}
