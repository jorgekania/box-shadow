<?php
include_once("./config/config.php");
?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-179041880-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-179041880-1');
    </script>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php
    echo "\n";
    foreach (SEO as $k => $v) {
        echo SEO[$k] . "\n";
    }
    ?>
    <link rel="icon" href="./img/css.svg" sizes="16x16 32x32" type="image/png">

    <!-- STYLES CSS -->
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.0/themes/smoothness/jquery-ui.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <link href='https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.13.1/css/all.css' rel='stylesheet'>
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/spectrum-colorpicker2/dist/spectrum.min.css">

    <link type="text/css" rel="stylesheet" href="./css/all.css">

    <script data-ad-client="ca-pub-8629327840737258" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
</head>

<body>

    <div class="container mt-3">

        <!-- NAVEGAÇÃO -->
        <nav class="navbar navbar-light bg-light">
            <a href="#" class="navbar-brand">
                <img src="./img/css.svg" width="30" height="30" alt="">
                CSS Generator
            </a>
            <ul class="nav  nav-pills">
                <li class="nav-item"><a class="nav-link" href="#">Box Shadow</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Gradient</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Border Radius</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Lorem Ipsum</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Lorem Ipsum IMG</a></li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-bars"></i>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Ação</a>
                        <a class="dropdown-item" href="#">Outra ação</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Algo mais aqui</a>
                    </div>
                </li>
            </ul>
        </nav>
        <div class="row justify-content-center mt-2 mb-3">
            <div class="banner ">
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <!-- 728x90-2 -->
                <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-8629327840737258" data-ad-slot="3968710533" data-ad-format="auto" data-full-width-responsive="true"></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </div>
        </div>

        <!-- CONTEÚDO PRINCIPAL -->
        <div class="row">
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-header title">
                        Configurações
                    </div>
                    <div class="card-body">
                        <!-- LARGURA DO BOX -->
                        <div class="block-config">
                            <div class="row">
                                <label for="border-lenght">Largura da DIV</label>
                                <label class="align-right" for="div-width">px</label>
                                <div class="text-1">
                                    <input id="div-width" type="text" value="180" disabled>
                                </div>
                            </div>
                            <div id="slider-div-width-bs" class="slider-bar large" data-value="180" data-min="50" data-max="350" data-step="1">
                            </div>
                        </div>
                        <!-- ALTURA DO BOX -->
                        <div class="block-config">
                            <div class="row">
                                <label for="border-lenght">Altura da DIV</label>
                                <label class="align-right" for="div-height">px</label>
                                <div class="text-1">
                                    <input id="div-height" type="text" value="180" disabled>
                                </div>
                            </div>
                            <div id="slider-div-height-bs" class="slider-bar large" data-value="180" data-min="50" data-max="350" data-step="1">
                            </div>
                        </div>
                        <!-- BORDER -->
                        <div class="block-config">
                            <div class="row">
                                <label for="border-lenght">Tamanho da Borda</label>
                                <label class="align-right" for="border-length">px</label>
                                <div class="text-1">
                                    <input id="border-length" type="text" value="0" disabled>
                                </div>
                            </div>
                            <div id="slider-border-bs" class="slider-bar large" data-value="0" data-min="0" data-max="100" data-step="1">
                            </div>
                            <!-- BORDER STYLE -->
                            <div class="row mt-3">
                                <label class="mr-3" for="style-border">Estilo da Borda</label>
                                <select name="style-border" id="style-border">
                                    <option>Nenhuma</option>
                                    <option>Solid</option>
                                    <option>Dotted</option>
                                    <option>Dashed</option>
                                    <option>Double</option>
                                    <option>Hidden</option>
                                    <option>Ridge</option>
                                    <option>Inset</option>
                                    <option>Outset</option>
                                </select>
                            </div>
                            <!-- BORDER COLOR -->
                            <div class="row mt-2">
                                <label for="border-color">Cor da borda</label>
                                <div class="text-2">
                                    <input id="border-color" class="colorpicker" type="text" value="#000000">
                                </div>
                            </div>
                        </div>
                        <div class="block-config">
                            <!--  BORDER RADIUS -->
                            <div class="row">
                                <label for="box-border-radius">Tamanho da Borda Arredondada</label>
                                <label class="align-right all-radius-value" for="box-border-radius">%</label>
                                <div class="text-1 all-radius-value">
                                    <input id="box-border-radius" type="text" value="0" disabled>
                                </div>
                            </div>
                            <div class="row mx-auto">
                                <div class="option-radius">
                                    <label for="all-border-radius">Todos os raios iguais</label>
                                    <input type="checkbox" name="all-border-radius" id="all-border-radius" checked>
                                </div>
                            </div>
                            <!-- CASO ESTEJA MARCADO PARA DEIXAR TODOS OS BORDER RADIUS IGUAIS -->
                            <div id="slider-border-radius-all" class="slider-bar large" data-value="0" data-min="0" data-max="50" data-step="1">
                            </div>

                            <!-- CASO ESTEJA MARCADO PARA PERSONALIZAR CADA BORDER RADIUS DIFERENTE -->
                            <div class="slider-border-radius-single">
                                <!-- TOP LEFT -->
                                <div class="row">
                                    <label class="box-border-radius-single-tl float-right" for="box-border-radius">%</label>
                                    <div class="text-1 all-radius-single">
                                        <input id="box-border-radius-single-tl" type="text" value="0" disabled>
                                    </div>
                                    <span>Border Radius Canto T/E</span>
                                    <div id="slider-border-radius-tl" class="slider-bar large" data-value="0" data-min="0" data-max="50" data-step="1">
                                    </div>
                                </div>
                                <!-- TOP RIGHT -->
                                <div class="row">
                                    <label class="box-border-radius-single-tr float-right" for="box-border-radius">%</label>
                                    <div class="text-1 all-radius-single">
                                        <input id="box-border-radius-single-tr" type="text" value="0" disabled>
                                    </div>
                                    <span>Border Radius Canto T/D</span>
                                    <div id="slider-border-radius-tr" class="slider-bar large" data-value="0" data-min="0" data-max="50" data-step="1">
                                    </div>
                                </div>
                                <!-- BOTTOM LEFT -->
                                <div class="row">
                                    <label class="box-border-radius-single-bl float-right" for="box-border-radius">%</label>
                                    <div class="text-1 all-radius-single">
                                        <input id="box-border-radius-single-bl" type="text" value="0" disabled>
                                    </div>
                                    <span>Border Radius Canto B/E</span>
                                    <div id="slider-border-radius-bl" class="slider-bar large" data-value="0" data-min="0" data-max="50" data-step="1">
                                    </div>
                                </div>
                                <!-- BOTTOM RIGHT -->
                                <div class="row">
                                    <label class="box-border-radius-single-br float-right" for="box-border-radius">%</label>
                                    <div class="text-1 all-radius-single">
                                        <input id="box-border-radius-single-br" type="text" value="0" disabled>
                                    </div>
                                    <span>Border Radius Canto B/D</span>
                                    <div id="slider-border-radius-br" class="slider-bar large" data-value="0" data-min="0" data-max="50" data-step="1">
                                    </div>
                                </div>
                            </div>

                        </div>
                        <!-- CONFIG HORIZONTAL LENGTH -->
                        <div class="block-config">
                            <div class="row">
                                <label for="horizontal-length">Tamanho Horizontal</label>
                                <label class="align-right" for="horizontal-length">px</label>
                                <div class="text-1">
                                    <input id="horizontal-length" type="text" value="0" disabled>
                                </div>
                            </div>
                            <div id="slider-horizontal-bs" class="slider-bar large" data-value="0" data-min="-200" data-max="200" data-step="1">
                            </div>
                            <!-- CONFIG VERTICAL LENGTH -->
                            <div class="row mt-3">
                                <label for="vertical-length">Tamanho Vertical</label>
                                <label class="align-right" for="vertical-length">px</label>
                                <div class="text-1">
                                    <input id="vertical-length" type="text" value="45" disabled>
                                </div>
                            </div>
                            <div id="slider-vertical-bs" class="slider-bar large" data-value="0" data-min="-200" data-max="200" data-step="1">
                            </div>
                        </div>
                        <!-- CONFIG BLUR RADIUS -->
                        <div class="block-config">
                            <div class="row">
                                <label for="blur-radius">Propriedade Blur Radius</label>
                                <label class="align-right" for="blur-radius">px</label>
                                <div class="text-1">
                                    <input id="blur-radius" type="text" value="55" disabled>
                                </div>
                            </div>
                            <div id="slider-blur-bs" class="slider-bar large" data-value="80" data-min="0" data-max="300" data-step="1">
                            </div>
                            <!-- CONFIG BLUR RADIUS SPREAD RADIUS-->
                            <div class="row mt-3">
                                <label for="spread-field">Tamanho do Raio</label>
                                <label class="align-right" for="spread-field">px</label>
                                <div class="text-1">
                                    <input id="spread-field" type="text" value="0" disabled>
                                </div>
                            </div>
                            <div id="slider-spread-field" class="slider-bar large" data-value="0" data-min="-200" data-max="200" data-step="1">
                            </div>
                        </div>
                        <!-- CONFIG BOX COLOR -->
                        <div class="block-config">
                            <div class="row color-row">
                                <label for="box-color">Cor de Fundo do Box</label>
                                <div class="text-2">
                                    <input id="box-color" class="colorpicker" type="text" value="#FFFFFF">
                                </div>
                            </div>
                        </div>
                        <!-- CONFIG SHADOW COLOR -->
                        <div class="block-config">
                            <div class="row color-row">
                                <label for="shadow-color">Cor da Sombra</label>
                                <div class="text-2">
                                    <input id="shadow-color" class="colorpicker" type="text" value="#BCBCBC">
                                </div>
                            </div>
                        </div>
                        <!-- CONFIG BACKGROUND COLOR -->
                        <div class="block-config">
                            <div class="row color-row">
                                <label for="background-color">Cor do Background</label>
                                <div class="text-2">
                                    <input id="background-color" class="colorpicker" type="text" value="#FFFFFF">
                                </div>
                            </div>
                        </div>
                        <!-- CONFIG OPACITY -->
                        <div class="block-config">
                            <div class="row">
                                <label for="shadow-opacity">Opacidade</label>
                                <div class="text-1">
                                    <input id="shadow-opacity" type="text" value="0.75">
                                </div>
                            </div>
                            <div id="slider-opacity-bs" class="slider-bar large" data-value="0.85" data-min="0" data-max="1" data-step="0.01">
                            </div>
                        </div>
                        <!-- CONFIG OUTLINE E INSET -->
                        <div class="block-config">
                            <div class="option-panel">
                                <fieldset>
                                    <label for="outline" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget ui-checkboxradio-radio-label">Outline</label>
                                    <input type="radio" name="option" id="outline" class="ui-checkboxradio ui-helper-hidden-accessible option">
                                    <label for="inset" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget ui-checkboxradio-radio-label">Inset</label>
                                    <input type="radio" name="option" id="inset" class="ui-checkboxradio ui-helper-hidden-accessible option">
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="card">
                    <div class="card-header title">Resultado</div>
                    <div class="card-body box-content">
                        <div id="box-shadow-wrapper" class="box-row" style="background-color: rgb(255, 255, 255);">
                            <div id="box-shadow-panel box-shadow-modify">
                                <div id="box-shadow-object"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mx-auto flex-column">
                    <div class="mt-2">
                        <button id="copy-code" class="btn btn-block btn-primary">Copiar Código</button>
                    </div>
                    <div id="box-shadow-code" class="mt-3 mb-3"></div>
                </div>
            </div>

        </div>
        <div class="row justify-content-center mt-5 mb-3">
            <div class="banner ">
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <!-- 728x90-2 -->
                <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-8629327840737258" data-ad-slot="3968710533" data-ad-format="auto" data-full-width-responsive="true"></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </div>
        </div>
        <!-- FOOTER -->
        <div class="row">
            <footer class="container py-5">
                <div class="row border-top pt-3">
                    <div class="col-12 col-md">
                        <a href="#" class="navbar-brand">
                            <img src="./img/css.svg" width="30" height="30" alt="">
                            CSS Generator
                        </a>
                        <small class="d-block mb-3 text-muted">© 2021</small>
                    </div>
                    <ul class="nav  nav-pills">
                        <li class="nav-item"><a class="nav-link" href="#">Box Shadow</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Gradient</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Border Radius</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Lorem Ipsum</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Lorem Ipsum IMG</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-bars"></i>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Ação</a>
                                <a class="dropdown-item" href="#">Outra ação</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Algo mais aqui</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    </div>

    <div class="modal fade" id="modalAlertCodCopied" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header bg-primary text-light">
                    <h5 class="modal-title" id="exampleModalLabel">Atenção!!!</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <h4>Código copiado para área de transferência!</h4><br>
                    Agora é só colar em seu <span class="text-danger">CSS</span> ou na tag <span class="text-danger">Style</span> do seu html, modificar
                    o nome da classe <span class="text-danger">( .sua-classe )</span> e já estará funcionando.
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>

    <!-- SCRIPTS JS -->
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/spectrum-colorpicker2/dist/spectrum.min.js"></script>

    <script src="./js/box-shadow.js"></script>
    <script src="./js/holder.js"></script>
    <script src="./js/script.js"></script>
</body>

</html>