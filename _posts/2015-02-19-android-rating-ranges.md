---
layout: post
title: Android Rating Ranges
date: 2015-02-19 07:00:55.000000000 -07:00
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Android
- Development
tags: []
meta:
  _wpas_skip_facebook: '1'
  _wpas_skip_google_plus: '1'
  _wpas_skip_twitter: '1'
  _wpas_skip_linkedin: '1'
  _wpas_skip_tumblr: '1'
  _wpas_skip_path: '1'
  _edit_last: '50576885'
  geo_public: '0'
  _publicize_pending: '1'
author:
  login: snard6
  email: snard6@gmail.com
  display_name: snard6
  first_name: Brad
  last_name: Grimm
permalink: "/2015/02/19/android-rating-ranges/"
---
As a developer with a variety of apps in the store&nbsp;my ratings are&nbsp;super important to me. &nbsp;But even more important than the actual ratings of my apps are the perceived ratings of my apps. &nbsp;What exactly do I mean? &nbsp;Well I think this comic by Randall Munroe sums it up best:

[![star_ratings]({{ site.baseurl }}/assets/2015/02/star_ratings.png?w=289)](https://bradgrimm.files.wordpress.com/2015/01/star_ratings.png)

Quite frankly that little sliver of pixels can make a huge difference. &nbsp;Especially the jump from 3.5 stars to 4.0 stars. &nbsp;But one of the things I've always found interesting is what '3.5 stars' actually means. &nbsp;Where exactly is the cutoff? &nbsp;Does 3.5 stars mean 3.5 or lower? &nbsp;Or does it mean the closest star value (3.25 to 3.75)? &nbsp;Or does it mean something completely different?

Well it turns out it isn't really straightforward to answer this question for two big reasons:

1) Stars are different in different locations. &nbsp;The web shows stars different than the app, and at times different pages have showed them different as well.

Here's Goofy glass on mobile with 4.5 stars on the left, and 4.0 stars on the right (web).

[![Goofy Overview Mobile]({{ site.baseurl }}/assets/2015/02/goofy-overview-mobile.png?w=169)](https://bradgrimm.files.wordpress.com/2015/01/goofy-overview-mobile.png) [![Goofy Overview Web]({{ site.baseurl }}/assets/2015/02/goofy-overview-web.png?w=195)](https://bradgrimm.files.wordpress.com/2015/01/goofy-overview-web.png)

2) The metric changes from time to time. &nbsp;Users probably never notice, but what a 4.0 app is today, isn't necessarily what it was yesterday.

**The Old Metric**

What was the old metric? &nbsp;Well it was actually relatively simple compared to how it works now. &nbsp;The old rule was simple, round to the nearest half star. &nbsp;So for instance:

4.75 - 5.0 &nbsp; = 5 stars  
4.25 - 4.75 = 4.5 stars  
3.75 - 4.25 = 4 stars.  
And so on...

This meant that from a realistic perspective most of my apps fit into the 4-star rating. &nbsp;My voice changers (notoriously low rated) fit into the 3.5 stars, and Goofy Glass at one point broke into 4.5 stars.

Then one day&nbsp;tons more reviews started rolling in. &nbsp;In fact&nbsp;I started getting as many as 5x to 10x more reviews. &nbsp;What had changed? &nbsp;The Play Store started prompting users to rate apps with the promise of providing similar&nbsp;apps the user would love. &nbsp;This had two side effects: &nbsp;1) Lot's more ratings were showing up on apps. &nbsp;2) The ratings were generally lower (though arguably more accurate). &nbsp;Users often just uninstall an uninteresting app, but now were being prompted for a rating. &nbsp;They also were&nbsp;asked a slightly different question... &nbsp;Instead of: "What should this app be rated?" it was: "Would you like us to&nbsp;find apps similar to this one?" &nbsp;And that question effects ratings significantly.

[caption id="attachment\_408" align="alignnone" width="300"][![Screen Shot 2015-01-11 at 9.54.39 PM]({{ site.baseurl }}/assets/2015/02/screen-shot-2015-01-11-at-9-54-39-pm.png?w=300)](https://bradgrimm.files.wordpress.com/2015/01/screen-shot-2015-01-11-at-9-54-39-pm.png) Goofy Glass (Used to show a 4.3)[/caption]

&nbsp;

My apps all took a dive after that. &nbsp;Goofy Glass which had been trending upward for the past few months,&nbsp;started&nbsp;dipping without any indication as to why. &nbsp;And even worse, the 'recommendation' reviews don't come with comments, so no valid feedback comes through to help improve the app, if they ran into issues, or what they'd like to see to win them back.

**The New Metric (Mobile)**

I'm guessing Google noticed the dip in ratings. &nbsp;And since then they've played with a few different displays. &nbsp;The most recent one is particularly interesting. &nbsp;They've effectively gotten ride of whole stars in favor of half-star ratings. &nbsp;The new ratings are as follows:

5.00 = 5.0 stars  
4.01 - 4.99 = 4.5 stars  
4.00 = 4 stars (Must be exactly 4.0)  
3.01 - 3.99 = 3.5 stars

In my opinion this is really weird. &nbsp;That means that my painting app, which has generally favorable reviews gets lumped with my voice changers, which&nbsp;have pretty bad reviews. &nbsp;And&nbsp;if you take a look at the difference in graphs...&nbsp;you'll notice they really don't seem to fit into the same category. &nbsp;Palette Painter (with a 3.9 review) seems to have tons of fans with just a few haters. &nbsp;While Funny Voice Changer has almost as many haters and fans. &nbsp;Yet, they both show up with a 3.5 star rating to anyone looking.

[![2015-02-18 22.44.00]({{ site.baseurl }}/assets/2015/02/2015-02-18-22-44-00.png?w=169)](https://bradgrimm.files.wordpress.com/2015/01/2015-02-18-22-44-00.png) [![2015-02-18 22.18.58]({{ site.baseurl }}/assets/2015/02/2015-02-18-22-18-58.png?w=169)](https://bradgrimm.files.wordpress.com/2015/01/2015-02-18-22-18-58.png)

Now admittedly they've also made it easier to see the exact number (see the 3.9) on the app page itself. &nbsp;But of course that is after they click on the app, and if you are like me... 3.5 stars apps just aren't worth my time (while a 4.0 star app often is).

[![2015-02-18 22.52.30]({{ site.baseurl }}/assets/2015/02/2015-02-18-22-52-30.png?w=169)](https://bradgrimm.files.wordpress.com/2015/01/2015-02-18-22-52-30.png)

**The New Metric (Web)**

The web on the other hand does something completely different. &nbsp;They fill in stars as a percentage of the full star. &nbsp;What that means (in theory) is that if you had a 4.1 star rating it would show up with 10% of the last star filled.

I actually like idea if it can be implemented correctly. &nbsp;The only problem I see with the current iteration is that the percentage stars don't start on the left and right side of the star. &nbsp;They&nbsp;actually start in the space between. &nbsp;What this effectively means is a 4.2 star looks identical to a 4.0 star and a 3.9 star. &nbsp;While a 3.3 has a little tiny bit of a sliver being drawn in.

[caption id="attachment\_414" align="alignnone" width="300"][![Palette Painter]({{ site.baseurl }}/assets/2015/02/screen-shot-2015-02-18-at-3-58-43-pm.png?w=300)](https://bradgrimm.files.wordpress.com/2015/01/screen-shot-2015-02-18-at-3-58-43-pm.png) Palette Painter[/caption]

[caption id="attachment\_412" align="alignnone" width="300"][![Spot the Animals]({{ site.baseurl }}/assets/2015/02/screen-shot-2015-01-11-at-9-55-30-pm.png?w=300)](https://bradgrimm.files.wordpress.com/2015/01/screen-shot-2015-01-11-at-9-55-30-pm.png) Spot the Animals[/caption]

[caption id="attachment\_413" align="alignnone" width="300"][![Scary Voice Changer Pro]({{ site.baseurl }}/assets/2015/02/screen-shot-2015-01-11-at-10-07-06-pm.png?w=300)](https://bradgrimm.files.wordpress.com/2015/01/screen-shot-2015-01-11-at-10-07-06-pm.png) Scary Voice Changer Pro[/caption]

[caption id="attachment\_415" align="alignnone" width="300"][![Scary Voice Changer]({{ site.baseurl }}/assets/2015/02/screen-shot-2015-01-11-at-9-54-58-pm.png?w=300)](https://bradgrimm.files.wordpress.com/2015/01/screen-shot-2015-01-11-at-9-54-58-pm.png) Scary Voice Changer - Hey look: A sliver![/caption]

Effectively this means that the difference form web to mobile can be a full visual star. &nbsp;Anyway, I don't know if anyone else has noticed these weird ratings. &nbsp;And&nbsp;I'd be really curious to hear the reasonings behind them, but I just thought I'd call them as I see them.

&nbsp;

&nbsp;

