---
published: false
---
**Views over Fragments** - Fragments are good in theory, but not in practice. As explained [here](https://corner.squareup.com/2014/10/advocating-against-android-fragments.html) Fragment transition state errors are notoriously difficult to debug. Views are simpler with fewer lifecycle methods; anything you want to use a Fragment for can be done with Views instead, because Views have been around since the beginning (Fragments were added later). A few components are easier with Fragments, like DialogFragments and ViewPager, only because the default implementations take care of UI interactions smoothly.

**Crash fast: Square's approach to Android crashes**

<strong>Singletons - </strong>The <a href="http://en.wikipedia.org/wiki/Singleton_pattern" target="_blank">Singleton </a>pattern is everywhere in the Android framework. Any libraries you use will likely keep around a Singleton instance. They’re super useful. <a href="https://developer.android.com/training/volley/requestqueue.html#singleton" target="_blank">Here’s</a> an implementation example.

<strong>Careful using <a href="http://developer.android.com/reference/android/os/AsyncTask.html" target="_blank">Async Tasks</a> - </strong>Sometimes you need long-running operations to be done in the background, so as not to block the UI thread. Just make sure that you gracefully handle the cases when the task returns and the calling Activity doesn’t exist anymore, or the app has backgrounded, or when the task just fails (perhaps because it lost internet connection). Finally blocks are useful in these cases.

<strong>Memory Leaks - </strong>Try not to pass around Contexts. When you have to, make sure references to the Context aren’t kept around; otherwise, it can’t be garbage collected. <a href="https://www.youtube.com/watch?v=_CruQY55HOk" target="_blank">Here’s</a> a talk on common memory leak pitfalls, and using memory analyzer tools to debug memory leaks.

Edit July 4th - <a href="https://github.com/square/leakcanary">LeakCanary</a> is amazing.