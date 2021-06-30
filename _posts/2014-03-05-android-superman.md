---
layout: post
title: Android Superman
date: 2014-03-05 16:24:43.000000000 -07:00
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Development
tags:
- Android
meta:
  _edit_last: '50576885'
  _publicize_pending: '1'
author:
  login: snard6
  email: snard6@gmail.com
  display_name: snard6
  first_name: Brad
  last_name: Grimm
permalink: "/2014/03/05/android-superman/"
---
My work recently awarded me a t-shirt, it is a little tradition at HireVue that when somebody does has a great achievement they are recognized with a customized shirt. &nbsp;Mine has a superman Android on the front, and on the back says:

12,000 Devices  
30 Screen Sizes  
8 OS Versions  
No Problem

![2014-03-04 20.19.31]({{ site.baseurl }}/assets/2014/03/2014-03-04-20-19-31.jpg?w=300)

![2014-03-04 20.19.44]({{ site.baseurl }}/assets/2014/03/2014-03-04-20-19-44.jpg?w=300)

First of all, it is super great to be appreciated. &nbsp;I know a shirt isn't a big thing, but there is a certain geek cred that goes along with it. &nbsp;HireVue appreciates their team members more than any other company I've worked for. &nbsp;Not only do they do a fantastic job showing it, but they truly mean it when they show it. &nbsp;I've worked for companies before where they 'show' you they appreciate you, but you don't feel that appreciation from day to day, so you feel almost like they are trying to buy your love.

So what was the achievement? &nbsp;Quite simply, I took an app with a 2.6 star rating, and bumped it up to a 4-star rating after working there for a few months.

Which was a huge relief!

I almost didn't switch jobs because of the rating. &nbsp;I knew people there, and each of them absolutely loved their job. &nbsp;We were in talks for multiple months before I finally took the dive. &nbsp;But every time I looked into their company I saw a lackluster 2.6 star rating, and the number of downloads only in the 10,000 - 50,000 category. &nbsp;I knew I would be in charge of a bad product, with less customers than most my other apps. &nbsp;I wasn't impressed.

In fact the only thing that got me over my apprehension was the freedom they were giving me to start a new Android app for managers. &nbsp;But first before I could, I had to fix their candidate app. &nbsp;I finally decided I was up to the challenge, and I'm very glad that I did.

So how did I take a 2.6 star app and turn it around? &nbsp;Honestly there were only two things:

1. Quality

Android is a tricky beast. &nbsp;It is even more difficult once you start dealing with audio and video. &nbsp;There are tons of devices, and many little issues here and there. &nbsp;It isn't easy to get it right on all the devices, no matter what anyone will tell you.

But that doesn't mean you **can't** get it right. &nbsp;There are a lot of really well supported apps, and a log of really great developers out there. &nbsp;It just means you have to put extra care and effort into getting it right.

I spent the first two months at HireVue really hammering on the app on as many devices I could find. &nbsp;I noticed a lot of strange procedures, and rewrote a lot of the code that did the video, network, and recording. &nbsp;I spent time making sure everything was threadsafe, and wrote a number of automated tests that simulated some really bizarre usage. &nbsp;Most importantly I didn't stop looking until I could verify that there was absolutely no way we could fix certain issues (usually by pouring through Android's open source code to verify the problem was there).

In short, I fixed the issues so we were confident we could run on the majority of devices on the market.

2. Ratings

I believe most people love the HireVue process. &nbsp;But the ratings were really poor because of two reasons.

First, a candidate with a poor experience was super likely to let us know with a bad rating, we had ruined their interview and quite possibly their potential to get a job. &nbsp;This is a big deal! &nbsp;Of course, most of that was addressed with the quality.

Second, assuming a candidate had a great experience they were already exhausted. &nbsp;An interview takes a lot of energy, and the last thing you want to do is then go rate the app you used to take it. &nbsp;Beyond this, we already had a survey at the end, so we could judge our candidate experience, this made it further&nbsp;unlikely for candidates to rate as they gave their feedback once. &nbsp;I had a imple idea. &nbsp;What if we made the last survey question a call to rate. &nbsp;A simple question: "Would you like to rate this app?" &nbsp;Since they were already in survey mode, they were much more likely to give good feedback.

Both worked like a charm, our bad ratings nearly stopped, and our good ratings started coming in more frequently.

And now I can move on to build an amazing manager app from scratch.

