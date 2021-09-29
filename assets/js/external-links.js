for(i = 0; i < document.links.length; i++) {
    var link = document.links[i];
    if (link.host !== location.host) {
        link.target = '_blank';
        link.rel = "noopener external";
        {{ if .Site.Params.markExternalLinks }}
            link.classList.add("external-link");
        {{ end }}
        console.log(link);
    } else {
        console.log(link);
    }
}