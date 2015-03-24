<!DOCTYPE html>
<html lang='en'>
  <!-- Hello dear source reader, feel free to wander around. -->
  <head>
    <!-- I *love* UTF-8 -->
    <meta charset='utf-8' />
    <title>blog.bithug.org</title>
    <script src='/articles.js?YjBmOTgzYg==' type='text/javascript'></script>
    <script src='/blog.js?YjBmOTgzYg==' type='text/javascript'></script>
    <link href='/blog.css?YjBmOTgzYg==' rel='stylesheet' type='text/css' />
    <link href='http://feeds.feedburner.com/blogbithugorg' rel='alternate' title='blog.bithug.org' type='application/rss+xml' />
  </head>
  <body class='hyphenate'>
    <!-- IE 9 supports CSS3/HTML5, or at least that's what I'm told. -->
    <!--[if lt IE 9]>
      <script src='http://ajax.googleapis.com/ajax/libs/chrome-frame/1/CFInstall.min.js' type='text/javascript'></script>
      <div id='prompt'></div>
      <script type='text/javascript'>
        //<![CDATA[
          window.attachEvent("onload", function() { CFInstall.check({ mode: "inline", node: "prompt" })});
        //]]>
      </script>
    <![endif]-->
    <div class='blog'>
      <article data-source='/articles.js'>
        <div class='header'>
          Coding and stuff
          <div class='subtitle'>Because, because, because of the wonderful things he does</div>
        </div>
        <nav>
          <a class='link first' href='/2010/06/jax.html' title='Git talk @ JaX 2010'>&lt;&lt;</a>
          <span class='link prev'>&lt;</span>
          <span class='link next'>&gt;</span>
          <a class='link last' href='/2012/08/qoppa.html' title='Qoppa - a language to learn abo&hellip;'>&gt;&gt;</a>
        </nav>
        <aside>
          <p>
            <a href='http://feeds.feedburner.com/blogbithugorg' rel='alternate' title='Subscribe to my feed' type='application/rss+xml'>
              <img alt='Subscribe to my feed' src='/images/feed-icon.png' />
            </a>
          </p>
          <div>About me</div>
          <img src='http://www.gravatar.com/avatar/36fee2e65c9c0ed678fe3b7d862ed271?s=80' />
          <p>This blog was started to track my progress on my RubySoc 2010 project, Ruby C extension support for JRuby. It is now used for other things, too. Expect mostly Ruby topics.</p>
          
          <p>I&#8217;m studying for a master&#8217;s degree at <a href='http://www.hpi.uni-potsdam.de/'>Hasso Plattner Institute</a>, <a href='http://www.uni-potsdam.de/'>University Of Potsdam</a>, I&#8217;m mainly at the <a href='http://www.hpi.uni-potsdam.de/hirschfeld/'>Software Architecture Group</a>. Once a week I also work as a software engineer at <a href='http://www.finn.de/'>Finnlabs</a>.</p>
          
          <p>If you want to know what technical topics I&#8217;m working on, follow me on <a href='http://twitter.com/timfelgentreff'>Twitter</a>. Most of the code I&#8217;m talking about is on <a href='http://github.com/timfel'>GitHub</a>, which is the central hub for my contributions to varous FOSS projects. I am also increasingly working on <a href='/research.html'>research</a> related stuff. I sometimes give <a href='/presentations.html'>presentations</a>.</p>
          <h3>Posts</h3>
          <article>
            <div class='date'>2012/08/27</div>
            <a href='/2012/08/qoppa.html'>Qoppa - a language to learn about Fexpr's</a>
          </article>
          <article>
            <div class='date'>2012/05/31</div>
            <a href='/2012/05/thesis.html'>Master Thesis Progress</a>
          </article>
          <article>
            <div class='date'>2012/02/22</div>
            <a href='/2012/02/cloud-foundry-squeak.html'>CloudFoundry for Smalltalk applications</a>
          </article>
          <article>
            <div class='date'>2011/09/08</div>
            <a href='/2011/09/maglev-debug.html'>Debugging on steroids - what Ruby should learn from Smalltalk</a>
          </article>
          <article>
            <div class='date'>2010/11/28</div>
            <a href='/2010/11/powersaving-on-macbook.html'>Linux PM on Macbook Pro</a>
          </article>
          <article>
            <div class='date'>2010/11/10</div>
            <a href='/2010/11/rsoc.html'>Ruby Summer of Code Wrap-Up</a>
          </article>
          <article>
            <div class='date'>2010/10/23</div>
            <a href='/2010/10/redcar-syntax-checks.html'>Syntax Checking For Redcar</a>
          </article>
          <article>
            <div class='date'>2010/09/26</div>
            <a href='/2010/09/redcar-debug.html'>A Redcar debugger interface</a>
          </article>
          <article>
            <div class='date'>2010/08/14</div>
            <a href='/2010/08/benchmarking-rdiscount.html'>Benchmarking RDiscount</a>
          </article>
          <article>
            <div class='date'>2010/07/13</div>
            <a href='/2010/07/thin-on-jruby.html'>Thin on JRuby</a>
          </article>
          <article>
            <div class='date'>2010/07/09</div>
            <a href='/2010/07/capi-the-thin-gem-and-not-much-to-show.html'>JRuby commit flag</a>
          </article>
          <article>
            <div class='date'>2010/06/18</div>
            <a href='/2010/06/first-week-of-rubysoc.html'>First week of RubySOC</a>
          </article>
          <article>
            <div class='date'>2010/06/07</div>
            <a href='/2010/06/jax.html'>Git talk @ JaX 2010</a>
          </article>
        </aside>
        <header>
          <h1 property='dc:title' xmlns:dc='http://purl.org/dc/elements/1.1/'></h1>
          <div class='author'>
            by
            <a href='mailto:timfelgentreff@gmail.com' property='cc:attributionName' xmlns:cc='http://creativecommons.org/ns#'>Tim Felgentreff</a>
            ,
            <time class='timeago' datetime='2015-03-24T18:01:51+01:00' pubdate='pubdate'>2015/03/24, 18:01 CET</time>
          </div>
        </header>
        <section class='content'>
          var articles;
          articles = [
            "/2010/06/jax.html",
            "/2010/06/first-week-of-rubysoc.html",
            "/2010/07/capi-the-thin-gem-and-not-much-to-show.html",
            "/2010/07/thin-on-jruby.html",
            "/2010/08/benchmarking-rdiscount.html",
            "/2010/09/redcar-debug.html",
            "/2010/10/redcar-syntax-checks.html",
            "/2010/11/rsoc.html",
            "/2010/11/powersaving-on-macbook.html",
            "/2011/09/maglev-debug.html",
            "/2012/02/cloud-foundry-squeak.html",
            "/2012/05/thesis.html",
            "/2012/08/qoppa.html"
          ];
          titles   = {
            "/2010/06/jax.html": "Git talk @ JaX 2010",
            "/2010/06/first-week-of-rubysoc.html": "First week of RubySOC",
            "/2010/07/capi-the-thin-gem-and-not-much-to-show.html": "JRuby commit flag",
            "/2010/07/thin-on-jruby.html": "Thin on JRuby",
            "/2010/08/benchmarking-rdiscount.html": "Benchmarking RDiscount",
            "/2010/09/redcar-debug.html": "A Redcar debugger interface",
            "/2010/10/redcar-syntax-checks.html": "Syntax Checking For Redcar",
            "/2010/11/rsoc.html": "Ruby Summer of Code Wrap-Up",
            "/2010/11/powersaving-on-macbook.html": "Linux PM on Macbook Pro",
            "/2011/09/maglev-debug.html": "Debugging on steroids - what Ruby should learn from Smalltalk",
            "/2012/02/cloud-foundry-squeak.html": "CloudFoundry for Smalltalk applications",
            "/2012/05/thesis.html": "Master Thesis Progress",
            "/2012/08/qoppa.html": "Qoppa - a language to learn about Fexpr's"
          };
        </section>
        <br />
        <section class='license'>
          <a rel="cc:attributionURL" href="http://github.com/rkh/rkh.im">This work</a> is licensed under a
          <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/de/deed.en">Creative Commons
          Attribution-ShareAlike 3.0 Germany License</a>. Any source code included is, unless stated otherwise,
          licensed under a <a rel="licenses" href="http://creativecommons.org/licenses/MIT/">MIT License</a>.
        </section>
        <section class='comments'>
          <!-- I both love and hate disqus -->
        </section>
      </article>
    </div>
  </body>
</html>
