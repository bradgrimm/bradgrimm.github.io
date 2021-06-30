---
layout: post
title: Android Isn't Left-Hand Friendly
date: 2014-12-08 07:30:17.000000000 -07:00
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories: []
tags:
- Android
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
permalink: "/2014/12/08/android-isnt-left-hand-friendly/"
---
While redesigning my app Goofy Glass, I came across this interesting finding.&nbsp; Android isn't left-hand friendly!&nbsp; Now I'm not left-handed, so this has never been a problem for me.&nbsp; But, I _am_ colorblind so I can relate to the frustration of designs excluding a minority of us and essentially making it unusable for us.

So... What do I mean it isn't left-handed friendly?

**Being Friendly**

_1) Software home buttons stays right._

If you have a device with software buttons, try it. &nbsp;You'll notice, the software buttons always stay on the bottom or the right, depending if it in&nbsp;portrait or landscape.

This get particularly weird when using the Google Camera app. &nbsp;That app _does_ attempt to support left-handed use. &nbsp;But this puts you weird position... you now are stuck using two hands in this orientation, where you would have been perfectly fine in the right-hand friendly version.

While it is nice to see Google does try to support it in some apps,&nbsp;the software buttons and the system in general do not.

&nbsp;

[![2014-12-07 22.06.39]({{ site.baseurl }}/assets/2014/12/2014-12-07-22-06-39.png?w=604)](https://bradgrimm.files.wordpress.com/2014/11/2014-12-07-22-06-39.png)

_2) No easy way for develops to support it on their own.&nbsp;_

While Android as a whole does a marvelous job of designing for any device, they don't make it easy to define a layout for landscape-left vs landscape-right. You can specify the based on size, density, language, and even orientation (portrait vs landscape)... but not which landscape version you are in.

This puts developers&nbsp;in a strange&nbsp;position of needing to handle all&nbsp;of the effort themselves. &nbsp;Assuming of course that their apps really need&nbsp;to change based on handedness at all, which admittedly isn't very common. &nbsp;But then again, I'm not left-handed, I'd be curious to see what other frustrations those who are have run into while using Android.

**Can It Be Done?**

Of course it can! &nbsp;Simply listen to the accelerometer and use that to determine your layout instead of using layout specific folders (as is traditional in Android). But be prepared for a lot more work in code, and a little bit more of a mess with your layouts.

This is exactly what I ended up doing with Goofy Glass. &nbsp;Since I was essentially creating a camera app similar in some regards to the build in Android camera. &nbsp;It&nbsp;tricky to do, but it was a bunch of extra effort, of course a lot of that effort was simply redesigning the layouts to look the way they should and making sure that all the&nbsp;lists were reversed in left-hand mode.

[![2014-12-07 22.25.51]({{ site.baseurl }}/assets/2014/12/2014-12-07-22-25-51.png?w=604)](https://bradgrimm.files.wordpress.com/2014/11/2014-12-07-22-25-51.png)

Anyway, I just thought it was interesting and a little disappointing, but overall probably not even important for most apps... as I doubt very few need to be specifically designed with that in mind.

