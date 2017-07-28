# Ember-request-observer

[![Build Status](https://travis-ci.org/FutoRicky/ember-request-observer.svg?branch=master)](https://travis-ci.org/FutoRicky/ember-request-observer)
[![Ember Observer Score](https://emberobserver.com/badges/ember-request-observer.svg)](https://emberobserver.com/addons/ember-request-observer)

Ember service to observe when a request is in progress

![](http://imgur.com/XBdn1Uj.gif)

Versions
-------------
Current version is running ember-cli >= `2.8.0`


Installation
-------------
`ember install ember-request-observer`

Usage
-------------
Inject the service to controller or component

`requestObserver: Ember.inject.service('request-observer')`

Use the `requestInProgress` method like so: `requestObserver.requestInProgress`

| result | description              |
| ------ | ------------------------ |
|true    | a request is in progress |
|false   | no requests in progress  |

It can be used on the controller/component as well as in the template like so:

`{{requestObserver.requestInProgress}}`

Contributions
-------------

All contributions are welcomed and encouraged.

Please make all pull requests to the `dev` branch.

Thanks!

