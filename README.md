ember-root-url
==============================================================================

This addon provides the `root-url` helper:

```hbs
<img src={{root-url "images/hello.png"}} />
```

It's purpose is to make it easy to express a URL relative to your application's rootURL.

Explanation
------------------------------------------------------------------------------

Because Ember apps handle their own routing, they need to know their own rootURL. This is configured in your `config/environment.js`.

If your app includes some assets, those assets will also be available under the rootURL.

If you want a portable way to refer to those assets, you need to construct their URLs relative to rootURL. Otherwise the links can break if you deploy your app under a new rootURL.




Installation
------------------------------------------------------------------------------

```
ember install ember-root-url
```


Usage
------------------------------------------------------------------------------

If you have an image in your app's `public/images/hello.png`, you can link to it like:

```hbs
<img src={{root-url "images/hello.png"}} />
```

Assuming you are using the default `rootURL` of `/`, it will render like:

```hbs
<img src="/images/hello.png" />
```

And if you have a customized rootURL of "/my-app", it will render like

```hbs
<img src="/my-app/images/hello.png" />
```

Of course it's fine to pass any value, it doesn't need to be a literal:

```hbs
<img src={{root-url model.imageURL}} />
```

You can also build root-relative URLs in JavaScript using `service:root-url`:

```js
export default MyComponent extends Component {
  rootUrl: service(),

  @computed
  get helloUrl() {
    return this.rootUrl.build('images/hello.png')
  }
}
```


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-root-url`
* `yarn install`

### Linting

* `yarn lint:js`
* `yarn lint:js --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `yarn test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
