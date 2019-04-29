--- 
permalink: /preview-components/overflow-menu-left.html
layout: iframed 
title: Overflow-menu-left.html
---
<div class="container pt-6 pl-8">

    <div class="overflow-menu  overflow-menu--open-left ">
        <button class="button-overflow-menu js-dropdown "
            data-js-target="#overflow2" aria-haspopup="true"
            aria-expanded="false">
            Overflow menu
            <svg class="icon-svg"><use xlink:href="#dots-vertical"></use></svg>
            <span class="sr-only">Åbner overflow menu</span>
        </button>
        <div class="overflow-menu-inner" id="overflow2" aria-hidden="true">

            <ul class='overflow-list'>
                <li><button>Option 1</button></li>
                <li><button>Option 2</button></li>
                <li><a href='#'>Option 3 as link</a></li>
                <li><button>Option 4 is longer text</button></li>
            </ul>

        </div>
    </div>

</div>