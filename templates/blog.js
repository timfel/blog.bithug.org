(function() {
  var loadScript;
  if (typeof loadScript != "undefined" && loadScript !== null) {
    return;
  }
  loadScript = function(file, callback, async) {
    var s, script;
    script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.async = async != null ? async : true;
    if (callback) {
      script.onload = callback;
    }
    s = document.getElementsByTagName('script')[0];
    return s.parentNode.insertBefore(script, s);
  };
  loadScript('http://hyphenator.googlecode.com/svn/tags/Version%203.0.0/Hyphenator.js', function() {
    Hyphenator.config({
      intermediatestate: 'visible'
    });
    return Hyphenator.run();
  });
  loadScript('http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js', function() {
    var currentPage;
    currentPage = false;
    return loadScript('http://timeago.yarp.com/jquery.timeago.js', function() {
      return loadScript('http://github.com/rkh/deferrable/raw/master/lib/deferrable.js', function() {
        var lastEmbed, loadEmbedded, preparePage;
        lastEmbed = new Deferrable;
        loadEmbedded = function(file, callback) {
          var deferred, unlock;
          deferred = lastEmbed;
          lastEmbed = new Deferrable;
          unlock = lastEmbed.callback();
          return deferred.onSuccess(function() {
            var buffer, wrappedCallback, writeWas;
            buffer = '';
            writeWas = document.write;
            document.write = function(content) {
              return buffer = buffer.concat(content);
            };
            wrappedCallback = function() {
              document.write = writeWas;
              callback(buffer);
              return unlock();
            };
            return loadScript(file, wrappedCallback, false);
          });
        };
        if (history.pushState != null) {
          $(document).ready(function() {
            var currentPath, directionTo, loadPage, switchTo, wrapper;
            currentPage = $('article[data-source]');
            currentPath = function() {
              return currentPage[0].getAttribute('data-source');
            };
            wrapper = $('.blog');
            loadPage = function(path) {
              var page, selector;
              selector = "article[data-source='" + path + "']";
              page = $("article[data-source='" + path + "']");
              if (page.lenght > 0) {
                return page;
              } else {
                return $.get(path, function(data) {
                  page = $(data).find("article[data-source]");
                  page.hide();
                  wrapper.append(page);
                  if (typeof Hyphenator != "undefined" && Hyphenator !== null) {
                    Hyphenator.run();
                  }
                  return page;
                });
              }
            };
            directionTo = function(path) {
              var current, next;
              current = articles.indexOf(currentPath());
              next = articles.indexOf(path);
              if (current === next || current === -1 || next === -1) {
                return 0;
              }
              if (current < next) {
                return 1;
              } else {
                return -1;
              }
            };
            switchTo = function(path) {
              var data;
              document.title = titles[path];
              $('.comments').html('&nbsp;');
              currentPage.css({
                opacity: 0
              });
              data = loadPage(path);
              currentPage.hide();
              currentPage = data.page[0];
              currentPage.show();
              preparePage();
              return currentPagePage.css({
                opacity: 1
              });
            };
            window.onpopstate = function(event) {
              var path;
              path = currentPath();
              if (path && path !== '' && document.location.pathname !== path) {
                return switchTo(document.location.pathname);
              }
            };
            return $('a[href^="/"]').live('click', function(event) {
              var path;
              path = this.getAttribute("href");
              history.pushState(true, titles[path], path);
              switchTo(path);
              return event.preventDefault();
            });
          });
        }
        preparePage = function() {
          var comments;
          $('p > a[href^="http://gist.github.com/"]:only-child').each(function(index, element) {
            return loadEmbedded("" + element.href + ".js?file=" + element.innerHTML, function(gist) {
              var wrapper;
              wrapper = $(element).parent();
              wrapper.html(gist);
              return wrapper.next().css({
                'text-indent': 0
              });
            });
          });
          comments = currentPage ? currentPage.find('.comments') : $('.comments');
          window.disqus_identifier = document.location.pathname;
          window.disqus_url = "" + document.location;
          window.disqus_developer = 1;
          comments.html('<div id="disqus_thread"></div>');
          loadScript('http://blogbithug.disqus.com/embed.js');
          return $("time.timeago").timeago();
        };
        return $(document).ready(function() {
          $('#dsq-loading-problem a:first-child').live('click', function(event) {
            event.preventDefault();
            return window.location.reload();
          });
          return preparePage();
        });
      });
    });
  });
  window._gaq || (window._gaq = []);
  window._gaq.push(['_setAccount', 'UA-25791824-1']);
  window._gaq.push(['_trackPageview']);
  loadScript('http://www.google-analytics.com/ga.js');
}).call(this);
