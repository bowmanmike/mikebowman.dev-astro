---
title: 'There and Back Again and Back Again and Back Again and Ba...'
date: 2022-10-21
slug: there-and-back-again-and-back-again
published: true
---

In an office in a city there lived a programmer. Sitting at his desk, (or
standing, thanks to his adjustable desk), noice-cancelling headphones in place,
typing away on his fancy keyboard with RGB backlights, happily immersed in
Neovim. Err, wait. That's not right. Happily immersed in Visual Studio Code.
Ahh, not quite. Happily immersed in Neovim. Dang. Doesn't feel right. Ok, last
try. Unhappily immersed in whichever text editor he'd happened to decide on for
that week.

Does this sound familiar? I surely can't be the only one out there who just
can't seem to settle on a text editor. It feels silly, I feel like I'm spending
way too much mental energy on something so... boring? bland? uninteresting?
unproductive? all of the above? Who knows. But since I'm probably not the only
person to have felt this way, I've decided to share my experience a little, and
hopefully shed some light on the value of things being _good enough_.

In the beginning, I used Atom. It was what they suggested us to use when I was
at my bootcamp. It was neat. It had cool colourschemes, and convenient keyboard
shortcuts. No problems there. Until one day I decided to take a look at the
mystical terminal-based text editor, Vim.

Vim was a bit of a crazy experience. My first encounter with Vim in the wild
was when I was first learning about Git and typed `git commit` in the terminal.
I found myself in a screen I couldn't exit. Like so many others, I ended up
just closing the terminal, before I was able to figure out that I was inside a
program called Vim. Then, again, like so many others, I googled "How to exit
Vim?", and was led to [one of the most popular Stack Overflow posts of all
time](https://stackoverflow.com/questions/11828270/how-do-i-exit-vim). This
isn't a post about why vim and modal editing is undisputably the best way to
edit text, so I won't go into detail. But suffice to say, once I figured out
how to quit, I was in it. I loved it. I felt so fast, so slick, so cool. Flying
around the document without using a mouse, coding at the speed of thought -- it
was awesome. I was hooked.

Ok, it wasn't quite such smooth sailing. Vim is pretty barebones by default, so
it didn't take long for me to fall down the rabbit hole of plugins and
personalized configuration. While I forget the precise details, at some point I
was pointed towards Neovim, a community-driven fork of the original Vim
codebase. It promised async plugin execution, faster and more community-driven
feature development, but an otherwise Vim-equivalent experience.

So once again, I hopped over. I swapped out my old single-threaded plugins for
new, fancy, Neovim-only plugins. I loved it. I had asynchronous linting and
formatting of my code, I had a keyboard shortcut to run the test under my
cursor, I could fuzzy-find files in a snap, and even live-grep the entire
codebase without even thinking about it. Once again, I loved it.

As Neovim matured, so did my configuration. Eventually, Neovim introduced Lua
as a configuration language, supplementing the somewhat esoteric Vimscript it
had been using before. This was a big jump. Plugins could be written in a nicer
language, so plugins got better! Then Neovim added built-in support for the
Language Server Protocol, and other awesome pieces like Treesitter. Between
these two features, we were assured, you'll have complete support for _any_
programming language you choose! It'll be perfect!

Of course, these promises were _slightly_ too good to be true. While you could
certainly get Neovim configured with deep language integrations for just about
anything, doing so took a lot of work. Getting LSP config files set up,
installing, managing, and configuring external tools to do your formatting and
linting, plugins with overlapping functionality -- all this made it a bit of a
pain. While I was able to get things _mostly_ working, my setup always felt
somewhat janky, and I often didn't _really_ know how things were wired up under
the hood.

The attentive reader may have noticed at this point that I've only spoken about
(Neo)Vim, as if that is the only editor I've used all these years, since I gave
up on Atom. As the title of this article may indicate, that isn't quite the
case. At some point during this journey, Microsoft released Visual Studio Code,
which was a pretty direct competitor to Atom, and other desktop text editors.
VSCode promised speed, extensibility, customizability, deep integrations with
Javascript and Typescript (another Microsoft invention), and more. As often
happens with things like this, I was tempted by the new shiny toy. So I
downloaded it, gave it a go. It worked well, it was clean and felt snappy. It
had a Vim mode plugin, which is a hard requirement for me. I liked it, and I
liked that you could configure it by clicking options in a settings menu, and
you could add plugins by searching a marketplace. That level of smoothness and
ease was refreshing, coming from Vim.

And so now I had two great options on my hands. My custom, hacked-together,
mostly-working Neovim setup, which I'd spent a lot of time customizing, setting
up keyboard shortcuts, getting the colourscheme just the way I liked, all that
kind of stuff. And on the other hand, VSCode, which was shiny and polished and
seemed a bit easier to get up and running.

So what did I do? I flip flopped, relentlessly. I'd spend a week in one editor,
a month in the other, an afternoon back in the first, three days in the other,
then back to the first for six months. It got to be a bit silly. I was so
indecisive. I liked them both, but just couldn't land on one over the other.

And so, for the majority of the past ~2 years, I told myself, just stick with
Neovim, make it yours, make it work, and don't let yourself get distracted. And
I did, and it worked! Mostly. Things kept breaking, mostly related to external
tools. I couldn't get Prettier to run on my Javascript codebases, or the Ruby
langauge server wouldn't start up properly. I tried a few out-of-the-box Vim
configurations (LunarVim, NvChad), but those were just too different from my
own setup, that I eventually gave up on them. Not to mention that they had
similar problems to my personalized setup as well.

And so, finally, I decided. Let's go back to VSCode. Let's stick with it for a
while, and see where we land. Turns out VSCode has a Neovim plugin, which lets
you configure your editor with a Vim config file, and even lets you use Vim
plugins. I've got things configured mostly the way I like them. Prettier
_just works_ when I'm in a javascript file. Tweaking config options doesn't
required googling _"how to do X in vim"_. It's clean and polished, and
relatively snappy. I'm still missing a few keybinds I used to have, and I
still prefer using iTerm instead of the VSCode built-in terminal. I miss
`vim-fugitive` and `vim-test` in particular, but VSCode has decent
replacements for both.

So here we are. My roundabout journey to VSCode. I'm committing myself to stick
here for a while at least, to really give it a go. Part of the problem with
Neovim was that I was so into the idea of customizing my workspace that I'd
often find myself spending more time tweaking my config than actually working.
VSCode hasn't allowed me that kind of customizability yet, so I think that's a
win. And here's the crux of the matter. A text editor is a tool. Yes, your
tools need to be comfortable, they need to work well. But the more important
thing is _what you do with that tool_, and for me, VSCode is good enough to let
me be productive and happy. I'd been on a search for the perfect text editor,
when what I really needed was one that was _good enough_ for me to get my work
done. Don't let perfect be the enemy of good, as they always say, whoever they
are. I'm customizing VSCode, sure. But I'm not spending anywhere near the time
I was customizing Vim. Find something that works, make it comfortable for you,
but focus on what that tool lets do you, rather than the tool itself.

At least, that's what works for me.

If you've read this far, thank you for taking the time to listen to this rant!
And now, off to check out the new shiny toy, [Zed](https://zed.dev)!
