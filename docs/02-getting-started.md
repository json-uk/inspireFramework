---

##      meta       ##
title: Getting Started
description: Get started using inspireFramework. 
##      nav        ##
# Add category to this page
# used to assign to a list of child/sibling page links in aside
category: docs
# assign to nav group: header|footer
nav_group: header footer
# Permalink for page, page-name.html
permalink: index.html
##    layout       ##
layout: default
# set whether to include the aside. includes category navigation
include_aside: true
# adds custom classes to body
# string should be space-delimited
classes:
# Page heading
page_heading: Getting Started

---

Now you've read all about the great features in inspireFramework, let's dig in and get to work...

### Prerequisites
Since we're using Stylus, you're going to need a way to compile to CSS. For that I recommend 
[LiveReload](http://livereload.com/) it's magical! 

**Note:** inspireFramework uses Nib for Stylus. [Codekit](http://incident57.com/codekit/), doesn't support Nib (yet) but LiveReload does. Just saying....

Go download and install, I'll wait.... Ready? Ok, let's move on.

#### Sublime Text Users
There's a great GitHub client that will make your life simple. I highly recommend it: [Sublime Text Git Plugin](https://github.com/kemayo/sublime-text-git/wiki)


### Clone and Install
**Pick a version:**
- *Feeling edgy?* Clone the latest from master
        
```$ git clone https://github.com/dtigraphics/inspireFramework.git``

- If you'd rather play it safe, download a ```.zip``` from the [release list](https://github.com/dtigraphics/inspireFramework/releases)

Now you have inspireFramework on your machine. 

### Add some _inspire_ to your project
To add it to your project, you only need the ```/stylus/``` directory. 

Create a new _.styl_ file and @import the framework

        // relative path!
        @import "../stylus/inspireFramework";


### Run the docs Locally
If you want to run the docs locally, you'll need [Jekyll](http://jekyllrb.com/). If you're not interested skip to 
<!-- [](setting up the framework) -->

1. In terminal (or if you downloaded the Git plugin for sublime text) switch to the ```gh-pages``` branch.

2. Setup and run Jekyll from the _inspireFramework_ directory. To learn how to build 'gh-pages' using Jekyll, [RTFM](http://jekyllrb.com/docs/github-pages/) 

### Setup inspireFramework
Setup is easy. Most params can be left as-is. However there are a few you'll most likely want to customise...

Open ```config/settings.styl``` and poke around; every param includes comments. I recommend 

#### Basic params

    $dev-mode=false

If true, grid lines will overlay your pages, see [theming](theming.html) to set the color of these lines.

    $old-ie ?= true;

Set to false if you do not want to automatically provide fallbacks to IE < 9.

    $vendor-prefixes ?= webkit moz ms official

When using prefixed rules, this is the list of vendor prefixes to include.

#### Font Settings

    $baseFontSize = 16px;
Default element font size

    $lineHeightRatio = 1.5;
Multiplier of font-size

    $scaleFactor = 1.618;
Factor used for typographic rhythm


#### Grid Settings

    $gridMinWidth = 960;
    $gridMaxWidth = 1240;
Sets min/max widths for grid; _min_ used for 'fluid' layout type

    $colsTotal = 12;
Total number of grid columns

    $gridType = mobileFirst;
Sets the type of grid you'd like to use. Options are ```mobileFirst```, ```fluid```, or ```fixed```