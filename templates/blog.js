(function() {
  var loadScript;

  if (typeof loadScript !== "undefined" && loadScript !== null) {
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

  loadScript('/lib/Hyphenator.js', function() {
    Hyphenator.config({
      intermediatestate: 'visible'
    });
    return Hyphenator.run();
  });

  loadScript('/lib/jquery.min.js', function() {
    var currentPage;
    currentPage = false;
    return loadScript('/lib/jquery.timeago.js', function() {
      return loadScript('/lib/deferrable.js', function() {
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
            var currentPath, wrapper;
            currentPage = $('article[data-source]');
            currentPath = function() {
              return currentPage[0].getAttribute('data-source');
            };
            return wrapper = $('.blog');
          });
        }
        preparePage = function() {
          var comments;
          $('p > a[href^="http://gist.github.com/"]:only-child').each(function(index, element) {
            return loadEmbedded(element.href + ".js?file=" + element.innerHTML, function(gist) {
              var wrapper;
              wrapper = $(element).parent();
              wrapper.html(gist);
              return wrapper.next().css({
                'text-indent': 0
              });
            });
          });
          $('p > a[href^="http://www.youtube.com/embed/"]:only-child').each(function(index, element) {
            var wrapper;
            wrapper = $(element).parent();
            return wrapper.html("<iframe src=\"" + element.href + "\" class=\"ytVideo\" frameborder=\"0\" allowfullscreen=\"1\" />");
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
          $('#dsq-loading-problem a:first-child').on('click', function(event) {
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
