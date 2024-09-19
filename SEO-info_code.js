var documentUrl = document.URL;
if (document.querySelector('link[rel="canonical"]') !==  null){
    var documentCanonical = document.querySelector('link[rel="canonical"]').href;}
else {var documentCanonical = '<span style="color:#f00;">Canonical nicht gesetzt!</span>'};
if(document.querySelector('meta[name="description"]') !== null){
    var snippet = document.querySelector('meta[name="description"]').content;
    var snippetLength = snippet.length;}
else{var snippet = '<span style="color:#f00;">Meta-Description nicht gesetzt!</span>';
    var snippetLength = 'n.v.'; };
if(document.querySelector('title') !== null){
    var title = document.querySelector('title').textContent;
    var titleLength = title.length;}
else{var title = '<span style="color:#f00;">Title nicht gesetzt!</span>';
    var titleLength = 'n.v.';};
if(document.querySelector('meta[name="robots"]') !== null){
    var robots = document.querySelector('meta[name="robots"]').content;}
else{var robots = '<span style="color:#f00;">Meta-Robots nicht gesetzt!</span>'};

if(document.querySelectorAll('h1, h2, h3, h4, h5, h6').length > 0){
    var headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    var headingList = [];
    headings.forEach(function(heading) {
        headingList.push({
            node: heading.nodeName,
            text: heading.textContent,
            classes: Array.from(heading.classList).join(' ')
        });
    });}
else{var headingList = [];};

var newWindow = window.open('', 'seoWindow', 'width=768, height=700');
newWindow.document.write('<html><head><link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">');
newWindow.document.write('</head><body ><div class="w3-padding-large" style="width:90%;margin:auto;"><h1>🔎 SEO Info</h1>');
newWindow.document.write('<table class="w3-table-all w3-card-2 w3-hoverable w3-small" style="table-layout: fixed;overflow-wrap: break-word;"><thead><tr class="w3-blue"><th>Index-Information</th><th>Wert</th></thead><tbody><tr><td>URL</td><td>' + documentUrl + '</td></tr><tr><td>Canonical</td><td>' + documentCanonical + '</td></tr><tr><td>Robots</td><td>' + robots + '</td></tr></tbody></table><br>');
newWindow.document.write('<table class="w3-table-all w3-card-2 w3-hoverable w3-small" style="table-layout: fixed;overflow-wrap: break-word;"><thead><tr class="w3-blue"><th>Meta-Element</th><th>Inhalt</th><th>Text-Länge</th></thead><tbody><tr><td>Title</td><td>' + title + '</td><td> ' + titleLength + '</td></tr><tr><td>Description</td><td>' + snippet + '</td><td>' + snippetLength + '</td></tr></tbody></table><br>');
newWindow.document.write('<table class="w3-table-all w3-card-2 w3-hoverable w3-small" style="table-layout: fixed;overflow-wrap: break-word;"><thead><tr class="w3-blue"><th>Überschriftenklasse</th><th>Überschrift</th><th>CSS-Klassen</th></tr></thead><tbody>');
if (headingList.length > 0){
    headingList.forEach(function(heading) {
        newWindow.document.write('<tr><td>' + heading.node + '</td><td>' + heading.text + '</td><td>' + heading.classes + '</td></tr>');
    });}
else{newWindow.document.write('<tr><td> n.v. </td><td> n.v. </td><td> n.v. </td></tr>');};
newWindow.document.write('</tbody></table><br><button class="w3-button w3-block w3-round-xxlarge w3-blue w3-hover-red" onclick="window.close()">schlie&szlig;en</button><p class="w3-small">📧 mit freundlicher Unterstützung von <a href="http://www.seoseb.de/">@seoseb</a></p></div></body></html>');
newWindow.document.close();
