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





Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v3.12 or above
* Node.js v12 or above


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

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
