# dispatcher

react-redux makes use of connect to pass dispatch around.

Calling dispatch all the time feels like repeated steps that should be elimated.

## in the redux file

Wherever one likes to add redux stuff:

```
export function performActionWith(dispatch) {
  return function(update) {
    dispatch({
      type: TYPENAME,
      update
    });
  };
}
```

## in each component

The "setup" that must be performed in each component :(

Keep in mind the first parameter of connect() should be `mapStateToProps`, but
since this example doesn't need them, it is left undefined.

The `import` is a meaningless example.

It would be great to automate this step further somehow.

```
import { performActionWith } from '../redux/actioner';

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  performAction: performActionWith(dispatch),
});

export default connect(undefined, mapDispatchToProps)(MyComponent);
```

Usage in the component:

```
    this.props.performAction({params});
```

I find `this.props.action(params)` to be far cleaner than importing the action definition and dispatching it all over the place. To each, their own.
