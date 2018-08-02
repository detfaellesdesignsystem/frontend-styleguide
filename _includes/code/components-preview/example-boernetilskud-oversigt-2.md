--- 
permalink: /preview-components/example-boernetilskud-oversigt-2.html
layout: iframed 
title: Example-boernetilskud-oversigt-2.html
---
<header class="header" role="banner">

    <!--1A: Portal header -->
    <div class="portal-header">
        <div class="container portal-header-inner">
            <a href="javascript:void(0);" title="Hjem" aria-label="logo link" class="logo"></a>
            <button class="button button-secondary button-menu-open js-menu-open ml-auto"
                aria-haspopup="menu" title="Åben mobil menu">Menu</button>

            <!-- 1B: Portal header: info + actions-->
            <div class="portal-info">

                <p class="user"><b class="username">Christian Emil Vestergaard Christiansen</b>                    </p>

                <a href="#" class="button button-secondary" role="button">
                    Log ud
                </a>
            </div>
        </div>
    </div>

    <!--2A: Solutiuon header -->
    <div class="solution-header">
        <div class="container solution-header-inner">
            <div class="solution-heading content">
                <a href="#" title="Hjem" aria-label="logo link">
                    Familieydelser - børnetilskud
                </a>
            </div>

            <!--2B: Solution header: Authority name + text-->
            <div class="solution-info">
                <!-- nav-secondary -->

                <h6 class="h6 authority-name"> Ministeriet for Eksempel</h6>

                <p>Tlf.: 33 28 38 38</p>

            </div>
        </div>
    </div>

    <div class="overlay"></div>
    <nav role="navigation" class=" nav">
        <!-- collapsible-->
        <button class="button button-tertiary button-menu-close js-menu-close" title="Luk mobil menu">
            <svg class="icon-svg "><use xlink:href="#close"></use></svg> Luk
        </button>

        <!-- 3: Main navigation-->
        <div class="navbar navbar-primary">
            <!--3A: Main navigation-->
            <div class="navbar-inner container">
                <ul class="nav-primary">
                    <li>
                        <a href="/frontend-styleguide/pages/page-templates/boernetilskud/boernetilskud-oversigt"
                            class="nav-link current" title="Designsystem">
                            <span>Oversigt</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link" title="Eksempler">
                            <span>Beskeder</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link" title="Kom godt i gang">
                            <span>Udbetalinger</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link" title="Fællesoffentlige krav">
                            <span>Sager</span>
                        </a>
                    </li>
                    <li>
                        <a href="/frontend-styleguide/pages/page-templates/boernetilskud/boernetilskud-1"
                            class="nav-link" title="Fællesoffentlige krav">
                            <span>Ansøgninger</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link" title="Fællesoffentlige krav">
                            <span>Ændringer</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link" title="Fællesoffentlige krav">
                            <span>Dokumentation</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 3: Main navigation end-->

        <div class="portal-info-mobile">
            <p class="user"><b>Christian Emil Vestergaard Christiansen</b></p>
            <a href="#" class="button button-secondary button-signout">
                Log ud
            </a>
        </div>

        <div class="solution-info-mobile">
            <p><b>Erhvervsministeriet</b></p>
            <p>
                <button class="button-unstyled button-contact" data-micromodal-trigger="modal-contact">Kontakt<svg class="icon-svg "><use xlink:href="#menu-right"></use></svg></button>
            </p>
        </div>

    </nav>
    <!-- collapsible nav end-->
</header>

<main class="container page-container">
    <header class="page-header">
        <h1>Oversigt</h1>
        <p class="font-lead">Brug en af de følgende funktioner, til at administrere børnetilskud:</p>
    </header>
    <section class="page-content content">
        <div class="row">

            <div class="col-12 col-sm-12 col-md-4 col-lg-4">
                <div class="card">
                    <div class="card-header">
                        <p class="h6 header-title" title="Card header" aria-label="Card header">Beskeder</p>
                    </div>
                    <div class="card-content gray-background py-4">
                        <div class="content">
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <svg class="icon-svg-large"><use xlink:href="#message"></use></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-action">
                        <div class="action-links">
                            <a href="#">Læs beskeder omkring dine aktive sager</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mt-6 mt-md-0">
                <div class="card">
                    <div class="card-header">
                        <p class="h6 header-title" title="Card header" aria-label="Card header">Udbetalinger</p>
                    </div>
                    <div class="card-content gray-background py-4">
                        <div class="content">
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <svg class="icon-svg-large"><use xlink:href="#cash-multiple"></use></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-action">
                        <div class="action-links">
                            <a href="#">Se tidligere og kommende udbetalinger</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mt-6 mt-md-0">
                <div class="card">
                    <div class="card-header">
                        <p class="h6 header-title" title="Card header" aria-label="Card header">Sager</p>
                    </div>
                    <div class="card-content gray-background py-4">
                        <div class="content">
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <svg class="icon-svg-large"><use xlink:href="#folder-multiple"></use></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-action">
                        <div class="action-links">
                            <a href="#">Få status på dine nuværende sager</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">

            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mt-6">
                <div class="card">
                    <div class="card-header">
                        <p class="h6 header-title" title="Card header" aria-label="Card header">Ansøgninger</p>
                    </div>
                    <div class="card-content gray-background py-4">
                        <div class="content">
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <svg class="icon-svg-large"><use xlink:href="#file-document-box"></use></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-action">
                        <div class="action-links">
                            <a href="/frontend-styleguide/pages/page-templates/boernetilskud/boernetilskud-1">Se aktive og tidligere ansøgninger</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mt-6">
                <div class="card">
                    <div class="card-header">
                        <p class="h6 header-title" title="Card header" aria-label="Card header">Ændringer</p>
                    </div>
                    <div class="card-content gray-background py-4">
                        <div class="content">
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <svg class="icon-svg-large"><use xlink:href="#settings"></use></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-action">
                        <div class="action-links">
                            <a href="#">Foretag ændringer omkring dit børnetilskud</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mt-6">
                <div class="card">
                    <div class="card-header">
                        <p class="h6 header-title" title="Card header" aria-label="Card header">Dokumentation</p>
                    </div>
                    <div class="card-content gray-background py-4">
                        <div class="content">
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <svg class="icon-svg-large"><use xlink:href="#book-open"></use></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-action">
                        <div class="action-links">
                            <a href="#">Opslagsværk for hvordan børnetilskud fungerer</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<footer>
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-6 footer-col">
                    <div class=" align-left ">
                        <ul class="unstyled-list">
                            <li>
                                <span class="h6 weight-semibold">Ministeriet for Eksempel</span>
                            </li>
                            <li>
                                <p>Styrelsen for Eksempel</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 footer-col">
                    <div class=" align-right ">
                        <ul class="unstyled-list">
                            <li>
                                <a class="function-link" href="mailto:support@example.dk">support@example.dk</a>
                            </li>
                            <li>
                                <a class="function-link" href="tel:12 34 56 78">12 34 56 78</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>