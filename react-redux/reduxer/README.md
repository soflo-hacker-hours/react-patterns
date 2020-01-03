# reduxer

Builds common reducer functionality.

## placement

`${project_root}/utils/reduxer/index.js`

## example

```javascript
import new_reducer from '../../utils/reduxer';

let TYPENAME = 'myReduxThing';

const initialState = {};

let myReducer = new_reducer(TYPENAME, initialState, function(state, action) {
  state['new content'] = action.update;
  return state;
});
```
