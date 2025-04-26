---
title: "Simple Feature Flags in Ruby"
date: 2022-09-01
slug: simple-feature-flags-in-ruby
published: true
---

Deploying new code to production can be nerve-wracking. Things can break,
unexpected behaviours can show up, all kinds of things can go sideways. It’s
extremely important to be able to quickly revert changes, in the case that
things go wrong unexpectedly. There are a bunch of different ways to approach
this, but here I’ll be talking about Feature Flags.

<!-- endexcerpt -->

**NOTE** There is some preamble here before we get to the code snippets. If
you'd like to skip directly to the full code, [click here](#full-code), or
scroll to the bottom!

First, what’s a feature flag? I’m sure there’s a proper technical definition,
but as far as I’m concerned, a feature flag (sometimes called a feature toggle),
is a mechanism to enable or disable features *on the fly* without deploying
anything new or changing any code. Ideally, you should be able to enable or
disable a feature instantaneously. Depending on the particular implementation,
it may not be *quite* that fast, but within seconds-to-minutes, rather than
minutes-to-hours.

Another important use-case for feature flags is to regulate which of your users
have access to a particular feature. This can be useful for things like
beta-testing a new integration, A/B testing a new layout, or slowly opening the
floodgates to ensure that a new code path can hold up to production traffic.

Now, you may be thinking, isn’t this a solved problem? Aren’t there like, a
million, libraries in every language that will implement this for you? And to
that I say, yes, yes there are. Some very smart people have thought about this
problem, and put good work into solving it. Libraries like
[Flipper](https://github.com/jnunemaker/flipper) for Ruby, [Fun With
Flags](https://github.com/tompave/fun_with_flags) for Elixir, and even full-on
SAAS products like [LaunchDarkly](https://launchdarkly.com/) can help you
implement sophisticated, robust feature flags for your application. But! As we
all know, sometimes, adding a library or integrating with a full-on external
provider is WAY overkill for your needs. And that's why we're here today.

In my experience, the simplest way to manage feature flags in a
small-to-medium-sized application, especially with a small (or one-person) dev
team, is to use environment variables. Check if the variable is enabled, and use
that to determine whether or not to show the feature. Simple enough. However,
this barebones approach quickly runs into some limitations. What if, for
example, you need to check for the variable in multiple places? What if you need
to send the feature flag status to a client-side application? What if a flag has
more complex states than just `on` and `off`?

When I came across this problem, I decided to put together a *slightly* more
sophisticated system to streamline the process of checking the status of a flag,
and for distributing that knowledge throughtout an application.

At it’s core, my solution involved a class for each flag. Something like this:

```ruby
class NewLayoutFeatureFlag
  class << self
    def value
      ENV["NEW_LAYOUT_ENABLED"]
    end

    def parse
      return true if value == "true"
      return value.split(",").map(&:to_i) if value&.match?(/[0-9,]+/)

      false
    end

    def enabled_for_user?(user_id)
      parsed = parse
      return parsed if [true, false].include?(parsed)

      parsed.include?(user_id)
    end
  end
end

```

In my use-case, I had a flag that could be in one of 3 states: `on`, `off`, or
enabled for a subset of users, identified by ID, which looks like this:
`2,23,432` -- a comma-separated list of IDs for which to enable the flag. In
this particular case, the flag is stored in an environment variable, but that is
certainly not a requirement of this method.

For me, the key to this approach is the simplicity of it’s interface. Wherever I
am in my application, I can call `NewLayoutFeatureFlag.enabled_for_user?` with
the user ID, and get back whether or not the flag is enabled for that user. The
Flag itself knows *how* to check whether a particular user should be able to use
a feature. This interface allows the flag code to be as simple or as complex as
it needs to be. It could do a DB lookup, it could store the state in Redis, or
perform some work to determine whether or not the flag should be enabled.

Having a simple interface like this allows you to use the flag in some really
nice patterns. Need to enforce the flag in a controller action? No problem,
stick it in a `before_action` call, like this.

```ruby
class FooController < ApplicationController
  before_action :check_new_layout_feature_flag

  ...

  private

  def check_new_layout_feature_flag
    unless NewLayoutFeatureFlag.enabled_for_user?(@user.id)
      render json: {errors: "This feature is not enabled for this account"},
               status: :unprocessable_entity
    end
  end
end
```

Need to share the state of the flags with other clients via an HTTP call?
Simple. Something like this is a quick solution.

```ruby
class FeatureFlagsController < ApplicationController
  before_action :set_user

  def show
    flag_klass = flags[params[:flag]]

    render json: {
      params[:flag] => !!flag_klass&.enabled_for_user?(@user.id)
    }, status: :ok
  end

  private

  def flags
    {
      "new_layout_enabled" => NewLayoutFeatureFlag,
      ...
    }
  end
end

# and in config/routes.rb

get "/feature_flags/:flag" => "feature_flags#show"
```

This kind of architecture makes it simple to add new flags. You could even add a
`FeatureFlagsController#index` action to return the status of *all* the flags
for a current user.

Another important feature of this feature flag design is that the default
position of all the flags is `off`. I don't want any functionality to sneak
through the feature flags. If a user passes bad data, if something goes wrong
internally, I want the feature turned off. Of course, that logic may change
depending on the use case. But again, that speaks to the flexibility of this
approach. You could even integrate this inteface with a third-party like
LaunchDarkly or Flipper, if you decided you need to have a mix of in-house and
externally-managed feature flags.

While I’m sure this solution doesn’t cover all possible feature flag use-cases,
I’ve found it’s a solid solution for my needs. It’s structured enough that I
don’t need to think any further about how to check the status of a flag, but
it’s flexible enough to allow me to use different types of flags for different
use cases.

To wrap up, I’d like to thank YOU, the reader, for making it this far! It’s a
bit more text than I’d envisioned, but I hope it has some value. If you loved
the article, or hated it, or have any tips or corrections, please reach out to
me at mike@mikebowman.dev! I’m also a freelance developer with lots of
experience in Rails, Elixir/Phoenix, and React! If you like my work and could
use some extra hands on your project, please don’t hesitate to reach out! I’m
always open to new connections!

#### Full Code

```ruby
# flag implementation
class NewLayoutFeatureFlag
  class << self
    def value
      ENV["NEW_LAYOUT_ENABLED"]
    end

    def parse
      return true if value == "true"
      return value.split(",").map(&:to_i) if value&.match?(/[0-9,]+/)

      false
    end

    def enabled_for_user?(user_id)
      parsed = parse
      return parsed if [true, false].include?(parsed)

      parsed.include?(user_id)
    end
  end
end

# controller
class FeatureFlagsController < ApplicationController
  before_action :set_user

  def show
    flag_klass = flags[params[:flag]]

    render json: {
      params[:flag] => !!flag_klass&.enabled_for_user?(@user.id)
    }, status: :ok
  end

  private

  def flags
    {
      "new_layout_enabled" => NewLayoutFeatureFlag
    }
  end

  def set_user
    # set user from params, session, etc.
    @user = ...
  end
end

# config/routes.rb
get "/feature_flags/:flag" => "feature_flags#show"
```
