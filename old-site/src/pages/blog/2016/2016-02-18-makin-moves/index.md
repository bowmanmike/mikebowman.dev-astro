---
published: true
date: 2016-02-18
title: Makin' Moves
slug: makin-moves
---

Got some fun stuff coming up this week, so hold on to your hats folks, we're
going in!

First off, and probably most obviously: I've changed platforms! I'm not blogging
on Medium any more, but rather on my very own personal domain and website. Last
weekend I bought bowmanmike.com kinda on a whim, but domains aren't that
expensive, and it seems like a good career move to have my own domain name.
[mikebowman.com](http://www.mikebowman.com) is unfortunately taken by a
real-estate agent from Texas, but he didn't think about the inversion, so HAH!
Take that, Mike Bowman. I thought about going for bikemowman.com, but this
seemed more professional. Turns out, buying domain names is a pretty painless
process, and not super expensive. Unless, that is, you're looking at buying a
super-trendy website that ends in *.io*. bikemowman.io was going for like $45 a
year. I snagged bowmanmike.com for around $15 for the year, which seemed like a
good deal.

As you may have also noticed, I've also put together a little personal website
here. As much as I'd like to, I can't take credit for hand-coding all the stuff
you're looking at now, though that's kinda the ultimate goal. This website was
generated with a sweet static-site generator called
[Jekyll](http://jekyllrb.com), which does pretty much all the legwork for me.
(Except for the fact that the header bar sticks to the top of the window when
you scroll down. I did that part. I really like when websites do that, so I
program it into pretty much everything I make. Who knows why. I just like it,
ok??) Jekyll isn't quite as user-friendly as something like Wordpress, but for
someone in my position, it's just right. It lets me write my posts and
everything in [Atom](http://atom.io), the program I use at Bitmaker to write all
my code. I can store all the files on my local hard drive, rather than having to
deal with a database like Wordpress, and then [Github](http://github.com) offers
basic free web hosting on [Github Pages](http://pages.github.com). Jekyll is
pretty much built with Github Pages in mind, so when I'm ready to update my
site, I just push all my changes to a github repo ([this
one](http://github.com/bowmanmike/bowmanmike.github.io)), and the site updates
automatically. For someone who's been bashed in the face with git repeatedly for
the past 6 weeks, it's a super straightforward process. Then it's just a matter
of configuring the domain name to point to the right place, and *voila*, there's
your page. Jekyll is cool because it's totally customizable, so once I get a bit
more free time, I'll be able to change the way the page looks a bit. Seems like
a good way to practice a bit of front end design and jQuery and stuff.

On to the academic pursuits of the week! If you look back at the previous post
here, you'll see it's a tic-tac-toe game I made. It's kinda neat, I think. You
can pick any size board, and the browser will generate a board of that size, and
you can play tic-tac-toe. Tic-tac-toe is surprisingly challenging to program.
The logic behind determining the winner isn't as simple as you might expect. I
ended up assigning x-y coordinates to every square on the board, and writing a
program to compare the coordinates of each player's squares until one of them is
a winning combination. It took some fiddling, but it works on any size board,
which is fun! Now to figure out how to program in a computer opponent...

This week we've been learning about Ajax. Ajax, for the uninformed, stands for
Asynchronous Javascript And Xml. Kinda meaningless-sounding, but it's a good
acronym. For a bit of background, let's go back in time. Back in the good old
days of the internet (before like, 2006), whenever you wanted to update the
content on the page with information from the database, you had to reload the
entire page. I remember in the early days of Facebook having to refresh the page
to see if I had any new notifications (not that I did that obsessively or
anything. Totally didn't do that) (Definitely not) (Not even a little). Ajax
allows websites to use Javascript to ask the server for information from the
database whenever you tell it to (usually triggered by an event, like submitting
a form, pressing a key, or scrolling the page), and dynamically editing a small
section of the page to reflect the new information. Pretty much every site you
interact with these days uses Ajax, because it dramatically speeds up page load
times. It makes things feel snappier, and lets the site be a bit more responsive
and dynamic. Your Gmail inbox is a good example. Every time you open an email,
the browser sends an Ajax request to the server, rather than a full on HTTP
request (which I've never mentioned before, and are kinda intense. Read more
[here](http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)
if you're interested. Be warned, it's pretty technical. But it's how the
internet works, so it's kinda worthwhile I'd say.). Basically, the browser asks
the server for the content of the individual email, rather than the entire page.
It's way faster. It's a tricky thing to implement and use, but I'm getting
there. It's super useful, and we were told today that we'll use it in every
project we ever work on, so it's definitely worthwhile.

It's pretty hard to believe we're at the end of the 6th week of the program.
It's flown by, and I've gotta start thinking about final project ideas already.
I totally have no ideas at all, so if any of you have any cool app ideas, send
them my way! Next week we do a final big assignment. Starting the week after, we
spend the rest of the course working on our final projects, up until our
official presentation day on the 22nd (I think) of March.

As always, thanks for reading, those of you who make it this far. Since I'm not
using Medium anymore, I don't get their cool readership statistics. I've hooked
up this site with Google Analytics, but the information they send my way is, so
far at least, suuuuuuuper sophisticated and detailed, but it'll be a while
before I figure out where the meaningful data on that page is. But that's also
kinda fun.

Anyways, that's it for the moment. I wanna get some more work done tonight on
Bwitter, our tiny little Twitter clone for practicing Ajax. (Yes, it's a mix of
Twitter and Bitmakaer) (Yes, Twitmaker would've been a better name. Our teacher
knows this) (But if it were called Twitmaker, they'd be called Twits, which
isn't as funny as Bweets) So thanks for reading, I hope you like my shiny new
platform! Check it out, poke around, tell me about things that are broken or
whatever, or make suggestions. I've got a list of things to tweak so far, but
anything y'all notice would be helpful!

Enjoy the weekend, and may the force be with you.
