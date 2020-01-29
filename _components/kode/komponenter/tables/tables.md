---
permalink: /kode/komponenter/tables/
parentlink: /kode/komponenter/
title: Tabeller
layout: styleguide
type: component
category: Kode_category
subcategory: Kode
anchor: true
subnav:
- text: Uden ramme
  href: '#uden-ramme'
- text: Zebralinjer
  href: '#zebralinjer'
- text: Responsiv
  href: '#responsiv'
- text: Scroll
  href: '#scroll'
- text: Linjehøjde
  href: '#linjehøjde'
---

{% include code/preview-box.html component="table" title="Eksempel på tabel" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/tables/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/tables/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="table" %}

Man kan gøre brug af <a href="/kode/utilities/#bredde-i-procent">hjælpeklasser</a> til at definere bredde på kolonner.

{:#javascript}
### Javascript

Man kan sætte de korrekte attributter automatisk, hvis man ønsker en responsiv tabel. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
new DKFDS.ResponsiveTable(document.getElementByID('TABLE-ID'));
{% endhighlight %}

## Varianter

{:#uden-ramme}
### Uden ramme
For at fjerne den yderste ramme tilføj klassen `table--borderless` til `<table>`.

{:#zebralinjer}
### Zebralinjer
Man kan sætte zebralinjer på en tabel med klassen `table--zebra` på `<table`.


{:#responsiv}
### Responsiv tabel

Attributten `data-title` bør tilføjes til hver `<td>`, således at en label bliver tilføjet for hver celle på mindre skærme.

Attributten kan sættes automatisk ved brug af <a href="#javascript">JavaScript</a>.

{% highlight html %}
<tr>
    <td data-title="Affaldstype">Bioaffald og kompost</td>
    <td data-title="Farvekode">Beige</td>
    <td data-title="Beskrivelse">Alt madaffald uden fødevareemballage.</td>
    <td data-title="Hvor ender det?">Bioaffaldet kommes i bionedbrydelige poser, som bliver komposteret til muld.</td>
</tr>
{% endhighlight %}

{:#scroll}
### Scroll på tabel
En tabel er som udgangspunkt ikke responsiv, men man kan gøre den responsiv til en vis grad ved at tilføje vandret scroll.

Sæt `<table>` elementet i en `<div>`, som har klassen `table--responsive-scroll`.

{:#linjehøjde}
### Linjehøjde

### Kompakt
Tilføj klassen `table--compact` på `<table>`

### Ekstra kompakt
Tilføj klassen `table--extracompact` på `<table>`