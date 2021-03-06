---
permalink: /kode/komponenter/formular/
parentlink: /kode/komponenter/
title: Formular
layout: styleguide
type: component
category: Kode_category
description: "Dokumentation på implementering af formular."
tags:
subcategory: Kode
anchor: true
subnav:
- text: Kompleks
  href: '#kompleks'
---

{% include code/preview-box.html component="formular" title="Eksempel på formular" %}

## Eksempler og retningslinjer
<ul class="nobullet-list">
    <li><a href="/komponenter/formular/">Eksempler</a></li>
</ul>

## Installation

### HTML Struktur

{% include code/syntax.html component="formular" %}

Gør brug af `<div class="form-group">`, fieldset og overskrifter til at strukturere din formular.

Skærmlæsere følger rækkefølgen af formularelementerne, som de er angivet i koden.

Overhold derfor sammenhængen mellem den viste rækkefølge af formularelementer på skærmen og deres rækkefølge i koden og brug ikke CSS til at ændre på rækkefølgen af formularelementerne.

Gruppér sammenhængende formularelementer ved hjælp af fieldset og brug et enkelt legend for hvert fieldset, hvor det giver mening.

Tilføj label med korrekt `for` attribut, hvor værdien er ID'et på formularelementet det tilhører.

Sørg for at labels til formularelementer er meningsfulde og præcise.

Undgå placeholder-tekst. Browserne kan ikke garantere tilstrækkeligt kontrastniveau og teksten kan desuden forvirre brugerne. Placeholder-tekst forsvinder, når brugeren klikker i feltet, og dermed forsvinder information, som kunne gavne brugeren.

Tillad copy/paste i formularelementer, hvor brugeren selv skal indtaste oplysninger.

Formularelementer skal automatisk fremhæves, når brugeren navigerer til dem ved hjælp af tastaturet.

Sørg for at alle elementer står i register, dvs. at de står på linje og i et naturligt lodret læse-flow fra top til bund.

{:#kompleks}
#### Kompleks eksempel

{% include code/syntax.html component="fieldset-complex" link="true" %}
