---
layout: post
title: Camera Design Decisions
date: 2014-11-04 08:07:30.000000000 -07:00
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Development
- Giveway Games
tags: []
meta:
  _edit_last: '50576885'
  geo_public: '0'
  _publicize_pending: '1'
author:
  login: snard6
  email: snard6@gmail.com
  display_name: snard6
  first_name: Brad
  last_name: Grimm
permalink: "/2014/11/04/camera-design-decisions/"
---
_A couple years ago I released one of my favorite apps, [Goofy Glass](https://play.google.com/store/apps/details?id=com.givewaygames.goofyglass).&nbsp; Since that initial release I have pushed out many updates.&nbsp; Along the way I have come across a variety of difficult design decisions.&nbsp; This latest release has been especially difficult,&nbsp;and so I've decided to recap the tradeoffs I made._

**Initial Design**

Two years ago the&nbsp;initial design of Goofy Glass&nbsp;was based on Android's open source camera. &nbsp;They locked the phone into a single orientation, and then handle "orientation changes" by monitoring the sensor and simply rotating all the elements on the screen manually.

[![rotate_gif]({{ site.baseurl }}/assets/2014/11/rotate_gif1.gif)](https://bradgrimm.files.wordpress.com/2014/11/rotate_gif1.gif)

While this isn't a very common design, it&nbsp;is actually a really smooth experience for a camera. &nbsp;There are three things that makes this nice:

1. _It is fast._ &nbsp;Since&nbsp;the layout doesn't change none of the surfaces or the camera have to be reinitialized.
2. _It makes taking pictures easy._&nbsp; It allows you to take photos&nbsp;with your left or&nbsp;right hand, from the top or bottom.
3. _It makes things simple._ &nbsp;With only one orientation to worry about, there is a lot less design to worry about.

**The Challenges**

This was great, and I loved having in my app. &nbsp;But&nbsp;over the last couple of years I've noticed some really big drawbacks to using this method.

_![device-2014-11-03-213857]({{ site.baseurl }}/assets/2014/11/device-2014-11-03-213857.png?w=187)Rotating buttons_  
In order for this method to work&nbsp;_everything_ has to be rotated manually. &nbsp;Initially this was simply buttons, so with a little code abstraction that was easy. &nbsp;But in order for this to work everything I ended up needing to rotate fragments, dialogs, action bar and event toast messages. &nbsp;And rotating some of these items required creativity and sometimes a worse layout. &nbsp;For instance, fragments all had to be perfectly square so they could rotate correctly.

_Problems with ads_  
One of the biggest problems has been with ads. &nbsp;For some reason still unknown to me, rotating ads causes all sorts of problems. &nbsp;On some devices they don't show, on others they only show&nbsp;only if you add&nbsp;background to them. &nbsp;They get copped funky if you're not careful, and&nbsp;the&nbsp;full page ads always show up toward the forced orientation. &nbsp;Goofy Glass actually has my lowest performing ads of all my apps, and this is one of the big reasons why.

_![device-2014-11-03-213305]({{ site.baseurl }}/assets/2014/11/device-2014-11-03-213305.png?w=187)Confusion w/ Software Buttons_  
On a phone with hardware buttons it is easy to miss this. &nbsp;Even on a phone with software buttons&nbsp;you probably won't notice, since phones tend to lock the software buttons toward the 'bottom' of the screen. &nbsp;But on a 7" tablet it is glaringly&nbsp;obvious. &nbsp;Most people use the 7 in portrait by default. &nbsp;When&nbsp;the app is locked in landscape,&nbsp;and the user is in portrait, the&nbsp;home button is on the left side of the screen, which is ugly and hard to find.

_Face detection woes (other filters)_  
And last, but not least, it was really cramping my style. &nbsp;Every filter I built I had to worry about rotations, and the impact it would have. &nbsp;For most filters, this isn't too terrible. &nbsp;But&nbsp;I've had plans to add face tracking to the app for a while, and it was getting complicated fast. &nbsp;Most of the programming for it&nbsp;is done,&nbsp;but finding a rotated face and rotating the effect to match the face was proving to be quite painful.

**The Solution**

[![device-2014-11-03-215315]({{ site.baseurl }}/assets/2014/11/device-2014-11-03-215315.png?w=187)](https://bradgrimm.files.wordpress.com/2014/11/device-2014-11-03-215315.png)I finally decided the cost of this design was too high. &nbsp;So&nbsp;in this latest update&nbsp;I decided to finally break it apart. &nbsp;And wow, did it turn out to be a&nbsp;_lot_ of work, much of the work was simply a process of undoing what was already in. &nbsp;The interesting thing&nbsp;is apparently the Google team had the same problems, because their latest updates don't lock the orientation anymore either.

I will admit I'm going to miss&nbsp;those smooth animations. &nbsp;Design is almost never straightforward. &nbsp;And contrary to popular belief no single design will win, there will always be tradeoffs in the decisions we make.

