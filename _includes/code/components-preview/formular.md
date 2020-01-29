--- 
permalink: /preview-components/formular.html
layout: example-contained 
title: Formular.html
---
<h1 class="h2">Dine kontaktoplysninger</h1>
<form>
    <!-- Felt start: Navn -->
    <div class="form-group">
        <label class="form-label " for="navn" id="form-label-navn">
            Navn
        </label>

        <input class="form-input   " id="navn" value="" name="navn"
            type="text">
    </div>
    <!-- Felt slut: Navn -->

    <!-- Felt start: Kørekort -->
    <div class="form-group">
        <fieldset>
            <legend class="h4">Har du kørekort?</legend>
            <ul class="nobullet-list">
                <li>
                    <input id="kort-ja" type="radio" name="kontakt"
                        value="kort-ja" class="form-radio  radio-large " />
                    <label for="kort-ja" id="form-label-kort-ja"
                        class="">Ja </label>

                </li>
                <li>
                    <input id="kort-nej" type="radio" name="kontakt"
                        value="kort-nej"
                        class="form-radio  radio-large " />
                    <label for="kort-nej" id="form-label-kort-nej"
                        class="">Nej </label>

                </li>
            </ul>
        </fieldset>
    </div>
    <!-- Felt slut: Kørekort -->

    <!-- Knap start -->
    <button class="button button-primary mt-9">
        Gem oplysninger
    </button>
    <!-- Knap slut -->
</form>