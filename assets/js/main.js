

window.addEventListener("load", function () {
    var pics = document.getElementsByClassName("article-img");
  for (var i = 0; i < pics.length; i++) {
    var pic = pics[i];
  
    pic.addEventListener("click", function () {
      this.parentElement.classList.add("lightbox");
      document.body.classList.add("lightbox-enabled");
    });
  }

  var closeBtns = document.getElementsByClassName("lightbox-close");
  for (var i = 0; i < closeBtns.length; i++) {
    var closeBtn = closeBtns[i];

    closeBtn.addEventListener("click", function () {
      this.parentElement.classList.remove("lightbox");
       document.body.classList.remove("lightbox-enabled");
    });
  }
});


  var baseURLArray = [
    {{ if .Site.IsMultiLingual }}
        {{ range .Site.Languages }}
            {{ $langBaseUrl := urls.Parse .Params.BaseURL }}
            {{ if not (eq $langBaseUrl.Host "") }}
                "{{ $langBaseUrl.Host }}",
            {{ end }}
        {{ end }}
    {{ end }}
    "{{ (urls.Parse .Site.BaseURL).Host }}",
];

for(i = 0; i < document.links.length; i++) {
    var link = document.links[i];
    if (!baseURLArray.includes(link.host)) {
        link.target = '_blank';
        link.rel = "noopener external";
        {{ if .Site.Params.markExternalLinks }}
            link.classList.add("external-link");
        {{ end }}
    } else {
        // internal link
    }
}