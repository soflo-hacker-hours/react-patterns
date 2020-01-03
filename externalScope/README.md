# external scoping

This allows javascript external to React to communicate with functions inside the React context.

## an example of the problem

Google Login button might look like this:

``` javascript
  render() {
    return (
      <div className="g-signin2" data-onsuccess="onSignIn"></div>
    );
  }
```

`data-onsuccess` does not work with `{this.onSignIn}`, so something else is necessary.

## function wrapper

Build a function that changes the "this" context, and otherwise does what you want.

``` javascript
class Auth extends Component {

//...

  onSignIn(self) {
    return function (googleUser) {
      self.props.performAction(googleUser.getAuthResponse().id_token);
    };
  }

//...
```

## global scope the function

Pass in current `this` object to generate a function bound to the Component.

Set `window.function` to make it global scope.


``` javascript
  componentDidMount() {
    window.onSignIn = this.onSignIn(this);
  }
```

## caveat

If the component is unmounted, this will die a horrible death.
