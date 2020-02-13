---
type: component
title: "Eksternt link"
parent: Links-kode
order: 20
component: external-link
componentTitle: "Eksempel på eksternt link"
---

{:.h4}
### HTML Struktur

{% include code/syntax.html component="external-link" %}

Du kan definere et eksternt link i koden ved at sætte klassen `icon-link` på `a` elementet. Derudover skal du tilføje SVG ikonet inline: `<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg>`.

For at kunne bruge denne metode, husk da at inkludere SVG ikon samlingen i toppen af hver side under `<body>`.