---
permalink: "/kode/komponenter/modal/"
parentlink: /kode/komponenter/
layout: styleguide
type: component
title: Modalvindue
category: Kode_category
subcategory: Kode
description: "Dokumentation på implementering af modal."
tags: 
---

{% include code/preview-box.html component="modal" title="Eksempel på modal komponent" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/modal/#retningslinjer">Retningslinjer</a></li>
    <li><a href="/komponenter/modal/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="modal" %}

### Javascript
Modal komponenten kræver JavaScript for at fungere. Man kan enten gøre brug af `DKFDS.init()` eller initiere komponenten manuelt med nedenstående:

{% highlight javascript %}
let modal = new DKFDS.Modal(document.getElementById('MODAL-ID'));
modal.init();
{% endhighlight %}


#### Funktioner

{:.table}
| Funktion     | Beskrivelse      |
|--------------|------------------|
| modal.show() | Viser en modal   |
| modal.hide() | Skjuler en modal |


#### Events

{:.table}
| Event key           | Element       | Beskrivelse                                                                       |
|---------------------|---------------|-----------------------------------------------------------------------------------|
| fds.modal.hidden    | Modal element | Når en modal skjules, bliver eventet `fds.modal.hidden` udløst på modal elementet |
| fds.modal.shown     | Modal element | Når en modal vises, bliver eventet `fds.modal.shown` udløst på modal elementet    |
