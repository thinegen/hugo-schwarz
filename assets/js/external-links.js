var baseURLArray = [
    {{ if .Site.IsMultiLingual }}
        {{ range .Site.Languages }}
            {{ $langBaseUrl := urls.Parse .Params.BaseURL }}
            "{{ $langBaseUrl.Host }}",
        {{ end }}
    {{ else }}
        {{ $langBaseUrl := urls.Parse .Site.BaseURL }}
        "{{ $langBaseUrl.Host }}",
    {{ end }}
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
