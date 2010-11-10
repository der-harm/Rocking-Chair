# A small CouchDB based feed reader

A simple feed reading app that can easily be distributed. It uses [Superfeedr](http://superfeedr.com) to grab feed updates. You will need to open your own Superfeedr Subscriber account.

# Why is this cool?

So I reckon you have some old and busted RSS or ATOM feeds that you need to pull from whenever you want updates, right? Of course, you can use existing feed readers, but you may also want to have some blazing fast interface, and that won't happen unless the this app is local. And guess what? You can bring your Rocking Chair home! Literally. That's one of the great features of CouchDB.

Rocking-Chair is built on Couchpubtato, which makes any Couch database act like a valid PubSubHubbubb subscriber endpoint.

Of course, this is still mostly alpha and there is a ton of feature you may want that are not here, but guess what, you can contribute too :) I will also make sure I add the features I need (mobile friendly UI, self-updating, HTML5 notifications, social network sharing... etc). It's currently not _safe_ to use as it runs in [admin party mode](http://guide.couchdb.org/draft/security.html). 

# How-to

You need to use at least a CouchDB hosted publicly (so that Superfeedr can post updates to it), but I'll assume you're working with a free Couch hosted by [CouchOne](http://couchone.com/get). You can also obviously set one on your own server.

Rocking-Chair is a CouchApp, which means that you'll have install the [CouchApp command line utility](http://couchapp.org/page/installing) to deploy it.

Once you have the couchapp utility working, <code>git clone</code> this repo and go into this folder and execute <code>couchapp init</code>.

Then, you need to go get Subscriber account at [Superfeedr](http://superfeedr.com). Once created, confirm it. Enter your superfeedr credentials in the <code>\_attachments/index.html</code> file (line 144 and 145, or lookup <code>superfeedr_login</code>).

Then, deploy your couchapp by running <code>couchapp push http://your.couchone.com/push</code> it will deploy the application's design document and you should be good to go. Just visit the URL that was returned by the <code>push</code> command and you should be able to start adding feeds. You can also check [this little demo](http://superfeedr.couchone.com/push/_design/push/index.html).

## Replication [optional]

Setup a couchdb locally, open your browser at <code>http://localhost:5984/_utils/</code>, create a database called <code>push</code>. Then, in the right column, click on <code>Replicator</code> and fill-in the replication settings. Don't forget to select the <code>continuous</code> option, and your local version will mirror the remote one. It's also much much faster in your browser, because it's just using the local store!

# TODO

- Put the various settings in the design document so users don't have to edit the file.
- Make the app secure :
    - password protected
    - https for hub subscriptions, and HMAC signatures verifications
- do a mobile phone UI
- try replication on an Android
- ...

# License

The MIT License

Copyright (c) 2010 Julien Genestoux, Max Ogden and Tyler Gillies

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.