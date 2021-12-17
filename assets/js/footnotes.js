var hoverNotes;

window.addEventListener("load", function () {
    var sups = document.getElementsByTagName("sup");
    for (var i = 0; i < sups.length; i++) {
        var sup = sups[i];
        if (sup.id && sup.id.startsWith("fnref")) {

            var footnote = document.getElementById(sup.id.replace("fnref", "fn"));

            var hoverNote = document.createElement("span");
            hoverNote.innerHTML = footnote.innerHTML;
            hoverNote.className = "hoverNote";

            var backRef = hoverNote.querySelector(".footnote-backref");
            backRef.remove();

            sup.appendChild(hoverNote);

            sup.firstChild.addEventListener("click", function (event) {
                this.nextSibling.classList.toggle("active-footnote");
                console.log("sup.firstChild");
                event.preventDefault();
            });
        }
    }
    hoverNotes = document.getElementsByClassName("hoverNote");

    document.addEventListener("mousedown", function (event) {
        if (event.target.className == "footnote-ref"
            || event.target.className == "hoverNote"
            || event.target.parentNode.className == "hoverNote"
            || event.target.nodeName == "HTML") {
                console.log("doc");
            return;
        }

        for (var i = 0; i < hoverNotes.length; i++) {
            if(hoverNotes[i].contains(event.target)) {
                return;
            }
        }

        for (var i = 0; i < hoverNotes.length; i++) {
            hoverNotes[i].classList.remove("active-footnote");
        }
    });

    var footnoteSec = document.querySelector(".footnotes");
    if (footnoteSec) {
        footnoteSec.style.display = "none";
    }
});
