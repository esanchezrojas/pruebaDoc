'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">wplay-intranet documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/ActivosModule.html" data-type="entity-link" >ActivosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ActivosModule-fbb1ad28da29bf1914d90cf4e11cde363979664dde92ad5590e95d5375d560dac60afd86f0f0443af2e04494b26cc0cf3ce3a37f76f5ebdea45f05372dd83e81"' : 'data-target="#xs-components-links-module-ActivosModule-fbb1ad28da29bf1914d90cf4e11cde363979664dde92ad5590e95d5375d560dac60afd86f0f0443af2e04494b26cc0cf3ce3a37f76f5ebdea45f05372dd83e81"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ActivosModule-fbb1ad28da29bf1914d90cf4e11cde363979664dde92ad5590e95d5375d560dac60afd86f0f0443af2e04494b26cc0cf3ce3a37f76f5ebdea45f05372dd83e81"' :
                                            'id="xs-components-links-module-ActivosModule-fbb1ad28da29bf1914d90cf4e11cde363979664dde92ad5590e95d5375d560dac60afd86f0f0443af2e04494b26cc0cf3ce3a37f76f5ebdea45f05372dd83e81"' }>
                                            <li class="link">
                                                <a href="components/ActivoListaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivoListaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReporteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReporteComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ActivosRoutingModule.html" data-type="entity-link" >ActivosRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ActualizacionEmpleadoModule.html" data-type="entity-link" >ActualizacionEmpleadoModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ActualizacionEmpleadoRoutingModule.html" data-type="entity-link" >ActualizacionEmpleadoRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-223b875826032bb672de44656445656f92d19bb50629a9ca7b66be9ce60afe71ce0f74d68c9ad1a3538843eaff2d82e06557426d76abb9745fe726acf06152cd"' : 'data-target="#xs-components-links-module-AppModule-223b875826032bb672de44656445656f92d19bb50629a9ca7b66be9ce60afe71ce0f74d68c9ad1a3538843eaff2d82e06557426d76abb9745fe726acf06152cd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-223b875826032bb672de44656445656f92d19bb50629a9ca7b66be9ce60afe71ce0f74d68c9ad1a3538843eaff2d82e06557426d76abb9745fe726acf06152cd"' :
                                            'id="xs-components-links-module-AppModule-223b875826032bb672de44656445656f92d19bb50629a9ca7b66be9ce60afe71ce0f74d68c9ad1a3538843eaff2d82e06557426d76abb9745fe726acf06152cd"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AsignarActivosModule.html" data-type="entity-link" >AsignarActivosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AsignarActivosModule-1b8b820c561c494b721899de98333902674c8ff9fc2620ae52cb27bff980bdb98c723c96e39992527079a1e4673853f8b7862dd4592955ba53f1fc0789abd456"' : 'data-target="#xs-components-links-module-AsignarActivosModule-1b8b820c561c494b721899de98333902674c8ff9fc2620ae52cb27bff980bdb98c723c96e39992527079a1e4673853f8b7862dd4592955ba53f1fc0789abd456"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AsignarActivosModule-1b8b820c561c494b721899de98333902674c8ff9fc2620ae52cb27bff980bdb98c723c96e39992527079a1e4673853f8b7862dd4592955ba53f1fc0789abd456"' :
                                            'id="xs-components-links-module-AsignarActivosModule-1b8b820c561c494b721899de98333902674c8ff9fc2620ae52cb27bff980bdb98c723c96e39992527079a1e4673853f8b7862dd4592955ba53f1fc0789abd456"' }>
                                            <li class="link">
                                                <a href="components/AsignarActivosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AsignarActivosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AsignarActivosRoutingModule.html" data-type="entity-link" >AsignarActivosRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CambioContrasenaModule.html" data-type="entity-link" >CambioContrasenaModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CambioContrasenaRoutingModule.html" data-type="entity-link" >CambioContrasenaRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClasificadorModule.html" data-type="entity-link" >ClasificadorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClasificadorModule-860c91fa4e83887e1de2954f6fc95c0c0637d3c01d195c75d237aad2d8b8f50815a70c9fac2d399e98599abee38fdcf67f8b45d85b3ad706a946c9184c7743ab"' : 'data-target="#xs-components-links-module-ClasificadorModule-860c91fa4e83887e1de2954f6fc95c0c0637d3c01d195c75d237aad2d8b8f50815a70c9fac2d399e98599abee38fdcf67f8b45d85b3ad706a946c9184c7743ab"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClasificadorModule-860c91fa4e83887e1de2954f6fc95c0c0637d3c01d195c75d237aad2d8b8f50815a70c9fac2d399e98599abee38fdcf67f8b45d85b3ad706a946c9184c7743ab"' :
                                            'id="xs-components-links-module-ClasificadorModule-860c91fa4e83887e1de2954f6fc95c0c0637d3c01d195c75d237aad2d8b8f50815a70c9fac2d399e98599abee38fdcf67f8b45d85b3ad706a946c9184c7743ab"' }>
                                            <li class="link">
                                                <a href="components/ClasificadorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClasificadorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClasificadorRoutingModule.html" data-type="entity-link" >ClasificadorRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ConfiguracionModule.html" data-type="entity-link" >ConfiguracionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ConfiguracionModule-09d49e2d89cd29da0795a22b129076b512614b4837642bc700bde2b44e5e9f67ff3d140d103a8a98d6db2df37753ceca4fc32fd475d1245e31ce863e2c4db963"' : 'data-target="#xs-components-links-module-ConfiguracionModule-09d49e2d89cd29da0795a22b129076b512614b4837642bc700bde2b44e5e9f67ff3d140d103a8a98d6db2df37753ceca4fc32fd475d1245e31ce863e2c4db963"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConfiguracionModule-09d49e2d89cd29da0795a22b129076b512614b4837642bc700bde2b44e5e9f67ff3d140d103a8a98d6db2df37753ceca4fc32fd475d1245e31ce863e2c4db963"' :
                                            'id="xs-components-links-module-ConfiguracionModule-09d49e2d89cd29da0795a22b129076b512614b4837642bc700bde2b44e5e9f67ff3d140d103a8a98d6db2df37753ceca4fc32fd475d1245e31ce863e2c4db963"' }>
                                            <li class="link">
                                                <a href="components/CrearClasificadorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CrearClasificadorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConfiguracionRoutingModule.html" data-type="entity-link" >ConfiguracionRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EmpleadosModule.html" data-type="entity-link" >EmpleadosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EmpleadosModule-b82f2175558edb80fbb47e469c0807a22e7f3252a62d54c1060b8dad8dfccfc9f73524a7ec60652b0fc26a8435ed05dbce7e219003d671c5a9dc24229750d50d"' : 'data-target="#xs-components-links-module-EmpleadosModule-b82f2175558edb80fbb47e469c0807a22e7f3252a62d54c1060b8dad8dfccfc9f73524a7ec60652b0fc26a8435ed05dbce7e219003d671c5a9dc24229750d50d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EmpleadosModule-b82f2175558edb80fbb47e469c0807a22e7f3252a62d54c1060b8dad8dfccfc9f73524a7ec60652b0fc26a8435ed05dbce7e219003d671c5a9dc24229750d50d"' :
                                            'id="xs-components-links-module-EmpleadosModule-b82f2175558edb80fbb47e469c0807a22e7f3252a62d54c1060b8dad8dfccfc9f73524a7ec60652b0fc26a8435ed05dbce7e219003d671c5a9dc24229750d50d"' }>
                                            <li class="link">
                                                <a href="components/EjemploComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EjemploComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmpleadoActualizarInicioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmpleadoActualizarInicioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmpleadoEstudiosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmpleadoEstudiosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmpleadoHijosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmpleadoHijosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmpleadoListaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmpleadoListaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmpleadoMascotasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmpleadoMascotasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmpleadoNuevoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmpleadoNuevoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmpleadoNuevoCortoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmpleadoNuevoCortoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmpleadoPendienteAplicarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmpleadoPendienteAplicarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmpleadoVehiculoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmpleadoVehiculoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MisDatosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MisDatosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EmpleadosRoutingModule.html" data-type="entity-link" >EmpleadosRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ErrorModule.html" data-type="entity-link" >ErrorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ErrorModule-974838cf27c20cf0e1a29c2f9c893203d260349052842614b30ce7b1247331842f14d4eda884a105c223cf988407144adf2df3bc2a97714c122168279e2ea60d"' : 'data-target="#xs-components-links-module-ErrorModule-974838cf27c20cf0e1a29c2f9c893203d260349052842614b30ce7b1247331842f14d4eda884a105c223cf988407144adf2df3bc2a97714c122168279e2ea60d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ErrorModule-974838cf27c20cf0e1a29c2f9c893203d260349052842614b30ce7b1247331842f14d4eda884a105c223cf988407144adf2df3bc2a97714c122168279e2ea60d"' :
                                            'id="xs-components-links-module-ErrorModule-974838cf27c20cf0e1a29c2f9c893203d260349052842614b30ce7b1247331842f14d4eda884a105c223cf988407144adf2df3bc2a97714c122168279e2ea60d"' }>
                                            <li class="link">
                                                <a href="components/ErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ErrorRoutingModule.html" data-type="entity-link" >ErrorRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-067a80e1614f95f99f2e1230a3c90d2658e6b31dd6456ce1f3a9d51b61136f6d9a9e98b78ca12abd0ac3086a0dceeb2d1cf4d1701044df47de8b3cd37508429d"' : 'data-target="#xs-components-links-module-HomeModule-067a80e1614f95f99f2e1230a3c90d2658e6b31dd6456ce1f3a9d51b61136f6d9a9e98b78ca12abd0ac3086a0dceeb2d1cf4d1701044df47de8b3cd37508429d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-067a80e1614f95f99f2e1230a3c90d2658e6b31dd6456ce1f3a9d51b61136f6d9a9e98b78ca12abd0ac3086a0dceeb2d1cf4d1701044df47de8b3cd37508429d"' :
                                            'id="xs-components-links-module-HomeModule-067a80e1614f95f99f2e1230a3c90d2658e6b31dd6456ce1f3a9d51b61136f6d9a9e98b78ca12abd0ac3086a0dceeb2d1cf4d1701044df47de8b3cd37508429d"' }>
                                            <li class="link">
                                                <a href="components/ChartRechargeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChartRechargeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChartWhitdrawComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChartWhitdrawComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FavoritesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FavoritesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IndicatorsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IndicatorsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/JobsModule.html" data-type="entity-link" >JobsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JobsModule-3efaffcd5e172721d845e97da38c67b2dd21d4e9636f62fba1358f776151dffb9dd1c5dbb8eeeafacab1722175aa7b971f55968e415d2334620dc51fe86a9615"' : 'data-target="#xs-components-links-module-JobsModule-3efaffcd5e172721d845e97da38c67b2dd21d4e9636f62fba1358f776151dffb9dd1c5dbb8eeeafacab1722175aa7b971f55968e415d2334620dc51fe86a9615"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JobsModule-3efaffcd5e172721d845e97da38c67b2dd21d4e9636f62fba1358f776151dffb9dd1c5dbb8eeeafacab1722175aa7b971f55968e415d2334620dc51fe86a9615"' :
                                            'id="xs-components-links-module-JobsModule-3efaffcd5e172721d845e97da38c67b2dd21d4e9636f62fba1358f776151dffb9dd1c5dbb8eeeafacab1722175aa7b971f55968e415d2334620dc51fe86a9615"' }>
                                            <li class="link">
                                                <a href="components/HvComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HvComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PublicacionesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PublicacionesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JobsRoutingModule.html" data-type="entity-link" >JobsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-21056d4e531196c5bd1768944ceab459fb4430e421187d0baa009f64810d68882264024d7bf1a0f8f70a95a6df99073aaf6a64dd9c6ce12046e0159f89edaca1"' : 'data-target="#xs-components-links-module-LoginModule-21056d4e531196c5bd1768944ceab459fb4430e421187d0baa009f64810d68882264024d7bf1a0f8f70a95a6df99073aaf6a64dd9c6ce12046e0159f89edaca1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-21056d4e531196c5bd1768944ceab459fb4430e421187d0baa009f64810d68882264024d7bf1a0f8f70a95a6df99073aaf6a64dd9c6ce12046e0159f89edaca1"' :
                                            'id="xs-components-links-module-LoginModule-21056d4e531196c5bd1768944ceab459fb4430e421187d0baa009f64810d68882264024d7bf1a0f8f70a95a6df99073aaf6a64dd9c6ce12046e0159f89edaca1"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link" >LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MenuModule.html" data-type="entity-link" >MenuModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MenuModule-759635326a7ae5e80beaa3586a9a37a4c5e9ae2736e4699a7313d562a5fdf5314b01e95bf4753966e7165f35fa4f62b56ca26405803c0a7b45c19ecbb186c054"' : 'data-target="#xs-components-links-module-MenuModule-759635326a7ae5e80beaa3586a9a37a4c5e9ae2736e4699a7313d562a5fdf5314b01e95bf4753966e7165f35fa4f62b56ca26405803c0a7b45c19ecbb186c054"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MenuModule-759635326a7ae5e80beaa3586a9a37a4c5e9ae2736e4699a7313d562a5fdf5314b01e95bf4753966e7165f35fa4f62b56ca26405803c0a7b45c19ecbb186c054"' :
                                            'id="xs-components-links-module-MenuModule-759635326a7ae5e80beaa3586a9a37a4c5e9ae2736e4699a7313d562a5fdf5314b01e95bf4753966e7165f35fa4f62b56ca26405803c0a7b45c19ecbb186c054"' }>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuPerfilComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuPerfilComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PerfilComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PerfilComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubmenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubmenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MenuRoutingModule.html" data-type="entity-link" >MenuRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundModule.html" data-type="entity-link" >PageNotFoundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageNotFoundModule-74930cda74231b4b829761f452cb7edb080c715ff26db5aa3048fb3ef13593ffb05ddc3b8b181399a6cb078dc1e7295b4f0e01f7c99d04f9b54183c67aafd90e"' : 'data-target="#xs-components-links-module-PageNotFoundModule-74930cda74231b4b829761f452cb7edb080c715ff26db5aa3048fb3ef13593ffb05ddc3b8b181399a6cb078dc1e7295b4f0e01f7c99d04f9b54183c67aafd90e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageNotFoundModule-74930cda74231b4b829761f452cb7edb080c715ff26db5aa3048fb3ef13593ffb05ddc3b8b181399a6cb078dc1e7295b4f0e01f7c99d04f9b54183c67aafd90e"' :
                                            'id="xs-components-links-module-PageNotFoundModule-74930cda74231b4b829761f452cb7edb080c715ff26db5aa3048fb3ef13593ffb05ddc3b8b181399a6cb078dc1e7295b4f0e01f7c99d04f9b54183c67aafd90e"' }>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundRoutingModule.html" data-type="entity-link" >PageNotFoundRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PerfilesModule.html" data-type="entity-link" >PerfilesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PerfilesModule-253e28a892c0a4f3a219a2ec05b5891a0d84973228390f8ebfffae7ca29b4573d6e10387da850f3dfd61c2c6d551288f15adad0534c5975646055494dd4d7deb"' : 'data-target="#xs-components-links-module-PerfilesModule-253e28a892c0a4f3a219a2ec05b5891a0d84973228390f8ebfffae7ca29b4573d6e10387da850f3dfd61c2c6d551288f15adad0534c5975646055494dd4d7deb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PerfilesModule-253e28a892c0a4f3a219a2ec05b5891a0d84973228390f8ebfffae7ca29b4573d6e10387da850f3dfd61c2c6d551288f15adad0534c5975646055494dd4d7deb"' :
                                            'id="xs-components-links-module-PerfilesModule-253e28a892c0a4f3a219a2ec05b5891a0d84973228390f8ebfffae7ca29b4573d6e10387da850f3dfd61c2c6d551288f15adad0534c5975646055494dd4d7deb"' }>
                                            <li class="link">
                                                <a href="components/MiembrosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MiembrosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavegacionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavegacionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PerfilesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PerfilesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PerfilesRoutingModule.html" data-type="entity-link" >PerfilesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PrimeNgModule.html" data-type="entity-link" >PrimeNgModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductosModule.html" data-type="entity-link" >ProductosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProductosModule-92ffc067a60467f2f070c2184c31348bd460f810fde4fd16b82dfa5d08a213b4ccf0620fc7da60ce611c9b3934cca9e74e57af1f60fba6db579c8be448bdf192"' : 'data-target="#xs-components-links-module-ProductosModule-92ffc067a60467f2f070c2184c31348bd460f810fde4fd16b82dfa5d08a213b4ccf0620fc7da60ce611c9b3934cca9e74e57af1f60fba6db579c8be448bdf192"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductosModule-92ffc067a60467f2f070c2184c31348bd460f810fde4fd16b82dfa5d08a213b4ccf0620fc7da60ce611c9b3934cca9e74e57af1f60fba6db579c8be448bdf192"' :
                                            'id="xs-components-links-module-ProductosModule-92ffc067a60467f2f070c2184c31348bd460f810fde4fd16b82dfa5d08a213b4ccf0620fc7da60ce611c9b3934cca9e74e57af1f60fba6db579c8be448bdf192"' }>
                                            <li class="link">
                                                <a href="components/CargInventarioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CargInventarioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CrearProductosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CrearProductosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HojaDeVidaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HojaDeVidaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListarProductosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListarProductosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductosRoutingModule.html" data-type="entity-link" >ProductosRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProveedoresModule.html" data-type="entity-link" >ProveedoresModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProveedoresModule-959842e48d1b784888751da6a4716d6fa7011c86529165d2908159c8b6ad1d4612eb48d028a002e75f93be77a0a68606bdbb03dc7755cc6bfffd89beab767aba"' : 'data-target="#xs-components-links-module-ProveedoresModule-959842e48d1b784888751da6a4716d6fa7011c86529165d2908159c8b6ad1d4612eb48d028a002e75f93be77a0a68606bdbb03dc7755cc6bfffd89beab767aba"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProveedoresModule-959842e48d1b784888751da6a4716d6fa7011c86529165d2908159c8b6ad1d4612eb48d028a002e75f93be77a0a68606bdbb03dc7755cc6bfffd89beab767aba"' :
                                            'id="xs-components-links-module-ProveedoresModule-959842e48d1b784888751da6a4716d6fa7011c86529165d2908159c8b6ad1d4612eb48d028a002e75f93be77a0a68606bdbb03dc7755cc6bfffd89beab767aba"' }>
                                            <li class="link">
                                                <a href="components/EditarContactoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditarContactoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListarProveedorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListarProveedorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistrarContactoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistrarContactoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistrarProductoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistrarProductoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistrarProveedorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistrarProveedorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProveedoresRoutingModule.html" data-type="entity-link" >ProveedoresRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RePersonalModule.html" data-type="entity-link" >RePersonalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RePersonalModule-bf6c2c8f2d41321018462b75616fb35068009804c4f4b9895cccbb0e685a795bc606863ce5b38f720e56bbb513c65ba912a409a296448eb877eb0e41f9efaf8d"' : 'data-target="#xs-components-links-module-RePersonalModule-bf6c2c8f2d41321018462b75616fb35068009804c4f4b9895cccbb0e685a795bc606863ce5b38f720e56bbb513c65ba912a409a296448eb877eb0e41f9efaf8d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RePersonalModule-bf6c2c8f2d41321018462b75616fb35068009804c4f4b9895cccbb0e685a795bc606863ce5b38f720e56bbb513c65ba912a409a296448eb877eb0e41f9efaf8d"' :
                                            'id="xs-components-links-module-RePersonalModule-bf6c2c8f2d41321018462b75616fb35068009804c4f4b9895cccbb0e685a795bc606863ce5b38f720e56bbb513c65ba912a409a296448eb877eb0e41f9efaf8d"' }>
                                            <li class="link">
                                                <a href="components/ReAgregarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReAgregarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReGestionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReGestionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RePersonalRoutingModule.html" data-type="entity-link" >RePersonalRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-3043cd3dd18006aa8d6bcd814a32a7e5e0c7393203af52a1bf96b1868efb1ac84d0990fe80fc39526f5e577b9a67bfd501cc238867d9aacb673ddd23e8eadffc"' : 'data-target="#xs-components-links-module-SharedModule-3043cd3dd18006aa8d6bcd814a32a7e5e0c7393203af52a1bf96b1868efb1ac84d0990fe80fc39526f5e577b9a67bfd501cc238867d9aacb673ddd23e8eadffc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-3043cd3dd18006aa8d6bcd814a32a7e5e0c7393203af52a1bf96b1868efb1ac84d0990fe80fc39526f5e577b9a67bfd501cc238867d9aacb673ddd23e8eadffc"' :
                                            'id="xs-components-links-module-SharedModule-3043cd3dd18006aa8d6bcd814a32a7e5e0c7393203af52a1bf96b1868efb1ac84d0990fe80fc39526f5e577b9a67bfd501cc238867d9aacb673ddd23e8eadffc"' }>
                                            <li class="link">
                                                <a href="components/CaptchaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaptchaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-3043cd3dd18006aa8d6bcd814a32a7e5e0c7393203af52a1bf96b1868efb1ac84d0990fe80fc39526f5e577b9a67bfd501cc238867d9aacb673ddd23e8eadffc"' : 'data-target="#xs-directives-links-module-SharedModule-3043cd3dd18006aa8d6bcd814a32a7e5e0c7393203af52a1bf96b1868efb1ac84d0990fe80fc39526f5e577b9a67bfd501cc238867d9aacb673ddd23e8eadffc"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-3043cd3dd18006aa8d6bcd814a32a7e5e0c7393203af52a1bf96b1868efb1ac84d0990fe80fc39526f5e577b9a67bfd501cc238867d9aacb673ddd23e8eadffc"' :
                                        'id="xs-directives-links-module-SharedModule-3043cd3dd18006aa8d6bcd814a32a7e5e0c7393203af52a1bf96b1868efb1ac84d0990fe80fc39526f5e577b9a67bfd501cc238867d9aacb673ddd23e8eadffc"' }>
                                        <li class="link">
                                            <a href="directives/NumberOnlyDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NumberOnlyDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/VacacionesModule.html" data-type="entity-link" >VacacionesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VacacionesModule-ce4fe0370d3321b5a9c1ef8374655b75a98abc30588d5d3c673906aa0b58d3ee91c0b7e4ecbc31523d237726b91fd444bb0a82aec5b7bc4bb30e1376ec3ddb3b"' : 'data-target="#xs-components-links-module-VacacionesModule-ce4fe0370d3321b5a9c1ef8374655b75a98abc30588d5d3c673906aa0b58d3ee91c0b7e4ecbc31523d237726b91fd444bb0a82aec5b7bc4bb30e1376ec3ddb3b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VacacionesModule-ce4fe0370d3321b5a9c1ef8374655b75a98abc30588d5d3c673906aa0b58d3ee91c0b7e4ecbc31523d237726b91fd444bb0a82aec5b7bc4bb30e1376ec3ddb3b"' :
                                            'id="xs-components-links-module-VacacionesModule-ce4fe0370d3321b5a9c1ef8374655b75a98abc30588d5d3c673906aa0b58d3ee91c0b7e4ecbc31523d237726b91fd444bb0a82aec5b7bc4bb30e1376ec3ddb3b"' }>
                                            <li class="link">
                                                <a href="components/AgregarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AgregarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GestionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GestionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GestionJefeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GestionJefeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/VacacionesRoutingModule.html" data-type="entity-link" >VacacionesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ValidateQrModule.html" data-type="entity-link" >ValidateQrModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ValidateQrModule-6fae6721e6083c9ae6420897b9e8268df134072ca4d1b5e0a60225f6307195e451f46c56be0b1a38aa3e768ada13a2b9fd599328565a75e202449377befce752"' : 'data-target="#xs-components-links-module-ValidateQrModule-6fae6721e6083c9ae6420897b9e8268df134072ca4d1b5e0a60225f6307195e451f46c56be0b1a38aa3e768ada13a2b9fd599328565a75e202449377befce752"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ValidateQrModule-6fae6721e6083c9ae6420897b9e8268df134072ca4d1b5e0a60225f6307195e451f46c56be0b1a38aa3e768ada13a2b9fd599328565a75e202449377befce752"' :
                                            'id="xs-components-links-module-ValidateQrModule-6fae6721e6083c9ae6420897b9e8268df134072ca4d1b5e0a60225f6307195e451f46c56be0b1a38aa3e768ada13a2b9fd599328565a75e202449377befce752"' }>
                                            <li class="link">
                                                <a href="components/ValidateQrComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ValidateQrComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ValidateQrRoutingModule.html" data-type="entity-link" >ValidateQrRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ContainerComponent-1.html" data-type="entity-link" >ContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContainerComponent-2.html" data-type="entity-link" >ContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContainerComponent-3.html" data-type="entity-link" >ContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContainerComponent-4.html" data-type="entity-link" >ContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContainerComponent-5.html" data-type="entity-link" >ContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContainerComponent-6.html" data-type="entity-link" >ContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContainerComponent-7.html" data-type="entity-link" >ContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContainerComponent-8.html" data-type="entity-link" >ContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContainerComponent-9.html" data-type="entity-link" >ContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContainerComponent-10.html" data-type="entity-link" >ContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContainerComponent-11.html" data-type="entity-link" >ContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContainerComponent-12.html" data-type="entity-link" >ContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RecuperaClaveComponent.html" data-type="entity-link" >RecuperaClaveComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SolicitudesGestionComponent.html" data-type="entity-link" >SolicitudesGestionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SolicitudesNuevasComponent.html" data-type="entity-link" >SolicitudesNuevasComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#directives-links"' :
                                'data-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/NumberOnlyDirective.html" data-type="entity-link" >NumberOnlyDirective</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CleanRootScope.html" data-type="entity-link" >CleanRootScope</a>
                            </li>
                            <li class="link">
                                <a href="classes/CupoRootScope.html" data-type="entity-link" >CupoRootScope</a>
                            </li>
                            <li class="link">
                                <a href="classes/DataService.html" data-type="entity-link" >DataService</a>
                            </li>
                            <li class="link">
                                <a href="classes/IpRootScope.html" data-type="entity-link" >IpRootScope</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoggedRootScope.html" data-type="entity-link" >LoggedRootScope</a>
                            </li>
                            <li class="link">
                                <a href="classes/NameRootScope.html" data-type="entity-link" >NameRootScope</a>
                            </li>
                            <li class="link">
                                <a href="classes/PermitsRootScope.html" data-type="entity-link" >PermitsRootScope</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProfileRootScope.html" data-type="entity-link" >ProfileRootScope</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProfileTypeRootScope.html" data-type="entity-link" >ProfileTypeRootScope</a>
                            </li>
                            <li class="link">
                                <a href="classes/Responsabilidades.html" data-type="entity-link" >Responsabilidades</a>
                            </li>
                            <li class="link">
                                <a href="classes/TokenRootScope.html" data-type="entity-link" >TokenRootScope</a>
                            </li>
                            <li class="link">
                                <a href="classes/UsuarioRootScope.html" data-type="entity-link" >UsuarioRootScope</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ActivoService.html" data-type="entity-link" >ActivoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ActivosService.html" data-type="entity-link" >ActivosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ActualizaEmpleadoService.html" data-type="entity-link" >ActualizaEmpleadoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AsignarActivosService.html" data-type="entity-link" >AsignarActivosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CambioContrasenaService.html" data-type="entity-link" >CambioContrasenaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CentroDineroService.html" data-type="entity-link" >CentroDineroService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClasificadorService.html" data-type="entity-link" >ClasificadorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfiguracionService.html" data-type="entity-link" >ConfiguracionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConsultaBoxService.html" data-type="entity-link" >ConsultaBoxService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConsultaPasarelaService.html" data-type="entity-link" >ConsultaPasarelaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmpleadosService.html" data-type="entity-link" >EmpleadosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JobsService.html" data-type="entity-link" >JobsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LogAliadosService.html" data-type="entity-link" >LogAliadosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MaestroConfiguracionService.html" data-type="entity-link" >MaestroConfiguracionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MenuOptionsService.html" data-type="entity-link" >MenuOptionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MenuService.html" data-type="entity-link" >MenuService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PerfilesService.html" data-type="entity-link" >PerfilesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductoService.html" data-type="entity-link" >ProductoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProveedoresService.html" data-type="entity-link" >ProveedoresService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QrService.html" data-type="entity-link" >QrService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RePersonalService.html" data-type="entity-link" >RePersonalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RestauraContrasenaService.html" data-type="entity-link" >RestauraContrasenaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RetraccionService.html" data-type="entity-link" >RetraccionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenIpService.html" data-type="entity-link" >TokenIpService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UtilService.html" data-type="entity-link" >UtilService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VacacionesService.html" data-type="entity-link" >VacacionesService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/HeaderInterceptor.html" data-type="entity-link" >HeaderInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/CheckSessionGuard.html" data-type="entity-link" >CheckSessionGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/LoginGuard.html" data-type="entity-link" >LoginGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Activo.html" data-type="entity-link" >Activo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ActivoLista.html" data-type="entity-link" >ActivoLista</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Cargo.html" data-type="entity-link" >Cargo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Centro.html" data-type="entity-link" >Centro</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ciudad.html" data-type="entity-link" >ciudad</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ciudad-1.html" data-type="entity-link" >ciudad</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ciudad-2.html" data-type="entity-link" >ciudad</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ciudad-3.html" data-type="entity-link" >ciudad</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ciudad-4.html" data-type="entity-link" >ciudad</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ciudad-5.html" data-type="entity-link" >ciudad</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ciudad.html" data-type="entity-link" >Ciudad</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CiudadExpedicion.html" data-type="entity-link" >CiudadExpedicion</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Clasificador.html" data-type="entity-link" >Clasificador</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Clasificador-1.html" data-type="entity-link" >Clasificador</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Clasificador-2.html" data-type="entity-link" >Clasificador</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Consultabox.html" data-type="entity-link" >Consultabox</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConsultaPasarela.html" data-type="entity-link" >ConsultaPasarela</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Data.html" data-type="entity-link" >Data</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataNavegacion.html" data-type="entity-link" >DataNavegacion</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Empleado.html" data-type="entity-link" >Empleado</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Empleado-1.html" data-type="entity-link" >Empleado</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Empleado-2.html" data-type="entity-link" >Empleado</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Empleado-3.html" data-type="entity-link" >Empleado</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmpleadoLista.html" data-type="entity-link" >EmpleadoLista</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmpleadoLista-1.html" data-type="entity-link" >EmpleadoLista</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmpleadoLista-2.html" data-type="entity-link" >EmpleadoLista</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmpleadoLista-3.html" data-type="entity-link" >EmpleadoLista</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmpleadoLista-4.html" data-type="entity-link" >EmpleadoLista</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmpleadoLista-5.html" data-type="entity-link" >EmpleadoLista</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmpleadoLista-6.html" data-type="entity-link" >EmpleadoLista</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Estudio.html" data-type="entity-link" >Estudio</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Hijo.html" data-type="entity-link" >Hijo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Imagen.html" data-type="entity-link" >Imagen</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Logaliados.html" data-type="entity-link" >Logaliados</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Login.html" data-type="entity-link" >Login</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MaestroConfiguracion.html" data-type="entity-link" >MaestroConfiguracion</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Mascota.html" data-type="entity-link" >Mascota</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Menu.html" data-type="entity-link" >Menu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Menu-1.html" data-type="entity-link" >Menu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NavMenu.html" data-type="entity-link" >NavMenu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Pasarela.html" data-type="entity-link" >Pasarela</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Perfil.html" data-type="entity-link" >Perfil</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Perfil-1.html" data-type="entity-link" >Perfil</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PerfilMenu.html" data-type="entity-link" >PerfilMenu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PerfilSubmenu.html" data-type="entity-link" >PerfilSubmenu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Producto.html" data-type="entity-link" >Producto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Producto-1.html" data-type="entity-link" >Producto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductoLista.html" data-type="entity-link" >ProductoLista</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductoP.html" data-type="entity-link" >ProductoP</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Proveedor.html" data-type="entity-link" >Proveedor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Qr.html" data-type="entity-link" >Qr</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RecoverPass.html" data-type="entity-link" >RecoverPass</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RePersonal.html" data-type="entity-link" >RePersonal</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RePersonal-1.html" data-type="entity-link" >RePersonal</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResponseModel.html" data-type="entity-link" >ResponseModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Retraccion.html" data-type="entity-link" >Retraccion</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State.html" data-type="entity-link" >State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SubMenu.html" data-type="entity-link" >SubMenu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SubMenu-1.html" data-type="entity-link" >SubMenu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TokenIp.html" data-type="entity-link" >TokenIp</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TreeNode.html" data-type="entity-link" >TreeNode</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TreeNode-1.html" data-type="entity-link" >TreeNode</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TreeNode-2.html" data-type="entity-link" >TreeNode</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TreeNode-3.html" data-type="entity-link" >TreeNode</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TreeNode-4.html" data-type="entity-link" >TreeNode</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TreeNode-5.html" data-type="entity-link" >TreeNode</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Vacaciones.html" data-type="entity-link" >Vacaciones</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Vacaciones-1.html" data-type="entity-link" >Vacaciones</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Vacaciones-2.html" data-type="entity-link" >Vacaciones</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Vacaciones-3.html" data-type="entity-link" >Vacaciones</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Vehiculo.html" data-type="entity-link" >Vehiculo</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});