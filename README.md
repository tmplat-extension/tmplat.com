# template-extension.org

The home for [Template](https://template-extension.org) is hosted on [GitHub Pages](https://pages.github.com) using
[Jekyll](https://jekyllrb.com).

## Install

In order to serve this website locally you will need the following:

* [Ruby](https://www.ruby-lang.org/en/) v2.0.0 or higher
  * Instructions can be found in the [official documentation](https://www.ruby-lang.org/en/downloads/)
* [Bundler](http://bundler.io)
  * Install using `gem install bundler`

Once you have these installed you'll need to install the website dependencies. This can be easily done using
`bundle install`.

In order to build the website you simply need to run `jekyll build` which will generate the files in a `_site`
directory. However, it's much easier have Jekyll build automatically and continuously in the background while you make
changes and serve the files locally. This can easily be done running `jekyll serve` which will run on an available port
(commonly `4000`). You can find the port in the output of this command. For example;

```
Server address: http://127.0.0.1:4000/
```
