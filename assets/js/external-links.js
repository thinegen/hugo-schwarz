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
    console.log(link, link.host);
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
