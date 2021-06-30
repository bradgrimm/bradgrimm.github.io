---
layout: post
title: ListView Customizations
date: 2014-01-16 05:02:47.000000000 -07:00
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Development
tags:
- Android
- pro-tip
meta:
  _edit_last: '50576885'
  _publicize_pending: '1'
author:
  login: snard6
  email: snard6@gmail.com
  display_name: snard6
  first_name: Brad
  last_name: Grimm
permalink: "/2014/01/16/listview-customizations/"
---
ListView is one of the most useful Android layout classes, but customizing it can be tricky. Part of that is simply glossing over some of the nice features that are already included. It is easy to simply extend BaseAdapter; it is easy and takes care of most the abstract methods for you. But doing so may make you miss some of the nifty built-in features. Below are 3 features you may be missing out on.

**1) Custom Types**  
It turns out that most really good looking ListView’s aren’t just a simple list. The items contain headers, sub-headers, different layouts for different children and so on. But if you extend BaseAdapter you lose all the ability to use custom types.

If you override:  
`public int getItemViewType(int position) {
return position % 4;
}`

public int getViewTypeCount() {  
return 4;  
}

And like magic you have multiple types. The above simply iterates over each type, but real examples would have complex criteria for which type a position is. Then inside your getView simply inflate different layouts for each type and the ListView handles the data for you.

` public int getView(int position View convertView, ViewGroup parent) {
int type = getItemViewType(position);
switch (...) {
case 0:
// Inflate type 0.
case 1:
// Inflate type 1.
}
return view;
}`

**2) Custom Separators**  
Next it may be useful to create custom dividers. But if you do this using items then your dividers will also be selectable. Another nifty method to override is isEnabled. By returning false the item will be visible, but will not be treated like an item but rather a divider.

`public boolean getEnabled() {
return false;
}`

public boolean areAllItemsEnabled() {  
return false;  
}

**3) Setting Stable Ids**  
The main advantage of stable ideas is the ability to do multi-selection on an ListView, GridView or other View. As long as your ids are unique, you can easily enable this feature by overriding:  
`public boolean hasStableIds() {
return true;
}
`

So while it may seem convenient to simply override the BaseAdapter, don’t forget all the nifty features you may be missing out on!

