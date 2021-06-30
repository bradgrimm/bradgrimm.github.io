---
layout: post
title: Android Scene Transitions
date: 2014-01-14 19:30:32.000000000 -07:00
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Development
tags:
- Android
- example
- open source
meta:
  _edit_last: '50576885'
  _publicize_pending: '1'
  _oembed_e3a657574d42fe3d8fa9bf35a4b98c9e: "{{unknown}}"
  _oembed_25941a90254fcc41d6d67e981ca1e127: "{{unknown}}"
  _oembed_1509112c23b9aaf5bb22d2df37154781: "{{unknown}}"
author:
  login: snard6
  email: snard6@gmail.com
  display_name: snard6
  first_name: Brad
  last_name: Grimm
permalink: "/2014/01/14/android-scene-transitions/"
---
One of the less published features of Android KitKat 4.4 was the addition of a new animation framework for Scene Transitions. This is a really nifty framework for developers, because it allows easily providing two layouts and letting the system handle the animations between them. This can be a powerful but simple way to change views around with beautiful animations. While animations in general have been around forever (and they saw a great update with honeycomb) this just makes it even easier. Now you simply provide scenes via xml and let the system do its magic.

Of course with all the new features of Android there is always the question: “When will it be available?”. Since it will probably be years before Android KitKat+ is over 50% of the devices, it is easy to quickly discount the code and move on. Fortunately, though, all the code is Open Source, so I made an attempt to backport the code in a Scene Transitions support library.

In the end the refactoring wasn’t too difficult. Most of the code moved over with minimal problems. But I did run into two big snags, both due to new code.

1) Missing suppressLayout.  
New to KitKat ViewGroup’s have a hidden method called suppressLayout. The code is fairly simple, it essentially prevents a layout from being called for some duration of time. The hope was to be able to copy this code over, but my attempt was ruined when I found out that ViewGroup’s layout method is declared as final (which is where the suppression code is). So in order to get this to compile I simply stripped the suppress layout feature.

2) Missing setTransitionAlpha.  
New to KitKat View’s have a transition alpha that is composited with their view alpha. The original idea was once again to extend a custom View for this feature. But, since this is applied to all the children in the layout it would be super painful to create a custom view for each of them. Once again the code is stripped. I believe this means views with an alpha less than one won’t work correctly. But if they are few and far between the code could be retrofitted such that only those would have to be replaced.

The result was a mostly working scene transitions. Because of the missing features it is clear to me there will be cases where this won’t work correctly. So use at your own risk.

The final product can be found here:  
https://github.com/snard6/Android-Scene-Transition

