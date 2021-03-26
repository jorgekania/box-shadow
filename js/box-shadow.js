$(document).ready(function () {

    //CONVERTE HEXADECIMAL EM RGBA
    const hexToRGB = (hex, alpha) => {
        var r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16);

        if (alpha) {
            return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
        } else {
            return "rgb(" + r + ", " + g + ", " + b + ")";
        }
    }

    //CONVERTE RGB EM HEXADECIMAL
    function rgbToHex(rgb) {
        rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        return (rgb && rgb.length === 4) ? "#" +
            ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
    }

    //VERIFICA SE UM CARÁCTER ESTA NA STRING
    function validaString(frase, letra) {
        var qtd = 0

        for (var i = 0; i < frase.length; i++) {
            if (frase[i] == letra) {
                qtd++
            }
        }
        return qtd;
    }

    //FUNÇÃO PARA GERAR A COR INICIAL E ATUALIZAR
    const colorInti = (color, op, hl, vl, br, sf, i = '') => {
        return hexToRGB(color, op) + ' ' + hl + 'px ' + vl + 'px ' + br + 'px ' + sf + 'px ' + i;
    }

    //QUAIS CAMPOS E ELEMENTOS
    const boxPanel = $('#box-shadow-object');
    const horizontalLength = $('#horizontal-length');
    const verticalLength = $('#vertical-length');
    const blurRadius = $('#blur-radius');
    const spreedField = $('#spread-field');
    const boxColor = $('#box-color');
    const backgroundColor = $('#background-color');
    const shadowColor = $('#shadow-color');
    const shadowOpacity = $('#shadow-opacity');
    const colorBackgroundColor = $('#box-shadow-wrapper');
    const boxCode = $('#box-shadow-code');
    const boxBordeColor = $('#border-color');

    //VALOR DOS CAMPOS
    var valHorizontalLength = horizontalLength.val();
    var valVerticalLength = verticalLength.val();
    var valBlurRadius = blurRadius.val();
    var valSpreedField = spreedField.val();
    var valBoxColor = boxColor.val();
    var valBackgroundColor = backgroundColor.val();
    var valShadowColor = shadowColor.val();
    var valShadowOpacity = shadowOpacity.val();
    var widthBoxPanel = boxPanel.width();
    var heightBoxPanel = boxPanel.height();
    var tab = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    var shadowBoxPanel;
    var inset;
    var borderRadius = 0;
    var borderRadiusTL = 0;
    var borderRadiusTR = 0;
    var borderRadiusBL = 0;
    var borderRadiusBR = 0;
    var borderWidth = 1;
    var borderColor = boxBordeColor.val();
    var propBorderRadius = 'border-radius';
    var valuePropBorderRadius = borderRadius;
    var codBorderRadius;
    var cssBorder;
    var cssBorderC;

    // INSET BUTTON
    $(".option-panel input").checkboxradio();
    $(".option-panel .option").click(function () {
        var option = $(this).attr('id');
        inset = option == 'inset' ? 'inset' : '';
        boxPanel.css('box-shadow', colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset));
        codeUpdate();
    })

    //CHECKBOX BUTTON
    $(".option-radius input").checkboxradio();
    $(".option-radius #all-border-radius").click(function () {
        var radiusAll = $('#all-border-radius');

        if ((radiusAll).is(":checked")) {
            borderRadiusTL = 0;
            borderRadiusTR = 0;
            borderRadiusBL = 0;
            borderRadiusBR = 0;

            updateShadow();
            codeUpdate();
            $('.slider-border-radius-single').css('display', 'none');
            $('#slider-border-radius-all, .all-radius-value').css('display', 'block');
        } else {
            borderRadius = 0;
            $('#box-border-radius').val(borderRadius)
            $('#slider-border-radius-all').children().eq(0).css('left', borderRadius + '%')
            updateShadow();
            codeUpdate();
            $('#slider-border-radius-all, .all-radius-value').css('display', 'none');
            $('.slider-border-radius-single').css({
                'display': 'block',
                'margin': '0 0 0 10px',
            });
        }
    });

    //MENU SELECT TYPE BORDER
    var borderStyle = $("#style-border").val().toLowerCase();
    $("#style-border").selectmenu({
        change: function (event, ui) {
            borderStyle = ui.item.value;
            if (borderStyle == 'Nenhuma') {
                borderStyle = 0;
                borderStyle = 'none';
                borderWidth = 0;
                $("#border-length").val(borderWidth);
                $("#slider-border-bs").find('span').eq(0).css('left', borderWidth);
                boxPanel.css('border-width', borderWidth);

            } else {
                borderStyle = borderStyle;
                borderWidth = borderWidth;
                $("#border-length").val(borderWidth);
                $("#slider-border-bs").find('span').eq(0).css('left', borderWidth);
                boxPanel.css('border-width', borderWidth);

            }
            boxPanel.css('border-style', borderStyle);
            codeUpdate();
        }
    });

    //SLIDERS
    $('.slider-bar').each(function () {
        let $el = $(this);
        let selected = $el.attr('id');
        $el.slider({
            min: $el.data('min'),
            max: $el.data('max'),
            value: $el.data('value'),
            step: $el.data('step'),
            slide: function (event, ui) {

                if (selected == 'slider-div-width-bs') {
                    $("#div-width").val(ui.value);
                    widthBoxPanel = ui.value;
                    boxPanel.css('width', widthBoxPanel);

                } else if (selected == 'slider-div-height-bs') {
                    $("#div-height").val(ui.value);
                    heightBoxPanel = ui.value;
                    boxPanel.css('height', heightBoxPanel);

                } else if (selected == 'slider-horizontal-bs') {
                    $("#horizontal-length").val(ui.value);
                    valHorizontalLength = ui.value;
                    boxPanel.css('box-shadow', colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset));

                } else if (selected == 'slider-vertical-bs') {
                    $("#vertical-length").val(ui.value);
                    valVerticalLength = ui.value;
                    boxPanel.css('box-shadow', colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset));

                } else if (selected == 'slider-blur-bs') {
                    $("#blur-radius").val(ui.value);
                    valBlurRadius = ui.value;
                    boxPanel.css('box-shadow', colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset));

                } else if (selected == 'slider-spread-field') {
                    $("#spread-field").val(ui.value);
                    valSpreedField = ui.value;
                    boxPanel.css('box-shadow', colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset));

                } else if (selected == 'slider-opacity-bs') {
                    $("#shadow-opacity").val(ui.value);
                    valShadowOpacity = ui.value;
                    boxPanel.css('box-shadow', colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset));

                }
                //PARA OS SLIDERS BORDER
                else if (selected == 'slider-border-bs') {
                    $("#border-length").val(ui.value);
                    borderWidth = ui.value;
                    boxPanel.css('border-width', borderWidth);

                } else if (selected == 'slider-border-radius-all') {
                    $("#box-border-radius").val(ui.value);
                    borderRadius = ui.value;
                    valuePropBorderRadius = borderRadius;
                    propBorderRadius = 'border-radius';
                    boxPanel.css('border-radius', borderRadius + '%');

                } else if (selected == 'slider-border-radius-tl') {
                    $("#box-border-radius-single-tl").val(ui.value);
                    borderRadiusTL = ui.value;
                    valuePropBorderRadius = borderRadiusTL;
                    propBorderRadius = 'border-top-left-radius';
                    boxPanel.css('border-top-left-radius', borderRadiusTL + '%');

                } else if (selected == 'slider-border-radius-tr') {
                    $("#box-border-radius-single-tr").val(ui.value);
                    borderRadiusTR = ui.value;
                    valuePropBorderRadius = borderRadiusTR;
                    propBorderRadius = 'border-top-right-radius';
                    boxPanel.css('border-top-right-radius', borderRadiusTR + '%');

                } else if (selected == 'slider-border-radius-bl') {
                    $("#box-border-radius-single-bl").val(ui.value);
                    borderRadiusBL = ui.value;
                    valuePropBorderRadius = borderRadiusBL;
                    propBorderRadius = 'border-bottom-left-radius';
                    boxPanel.css('border-bottom-left-radius', borderRadiusBL + '%');

                } else if (selected == 'slider-border-radius-br') {
                    $("#box-border-radius-single-br").val(ui.value);
                    borderRadiusBR = ui.value;
                    valuePropBorderRadius = borderRadiusBR;
                    propBorderRadius = 'border-bottom-right-radius';
                    boxPanel.css('border-bottom-right-radius', borderRadiusBR + '%');
                }
                codeUpdate();
            }
        });
    });

    //SPECTRUM COLORPICK
    const optionsSpectrum =
    {
        showInput: true,
        showAlpha: true,
        preferredFormat: "rgb"
    }

    const cores = {
        boxColor: '',
        backgroundColor: '',
        shadowColor: ''
    }

    $(".colorpicker").spectrum({
        optionsSpectrum,
        move: function (color) {
            let selected = $(this).attr('id');
            const colorEl = () => cores[($(this).attr('id'))] = hexToRGB(color.toHexString(), color['_a']);

            if (selected == 'box-color') {
                valBoxColor = colorEl();
                boxPanel.css('background-color', valBoxColor);
                codeUpdate();
            } else if (selected == 'shadow-color') {
                valShadowColor = color.toHexString();
                valShadowOpacity = color['_a'];
                shadowBoxPanel = colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset);
                boxPanel.css('box-shadow', shadowBoxPanel);
                codeUpdate();
            } else if (selected == 'background-color') {
                valBackgroundColor = colorEl();
                colorBackgroundColor.css('background-color', valBackgroundColor);
                codeUpdate();
            } else if (selected == 'border-color') {
                borderColor = colorEl();
                boxPanel.css('border-color', borderColor);
                codeUpdate();
            }
        }
    })

    //ATUALIZA A AREA QUE MOSTRA O CÓDIGO CSS PARA COPIAR
    const codeUpdate = () => {

        if (borderRadius >= 0) {
            codBorderRadius = '<div>' + tab + 'border-radius: <span class="valueProp">' + valuePropBorderRadius + '%</span>;</div>\n';
        }

        if (borderRadiusTL > 0 || borderRadiusTR > 0 || borderRadiusBL > 0 || borderRadiusBR > 0) {
            codBorderRadius = '<div>' + tab + 'border-top-left-radius: <span class="valueProp">' + borderRadiusTL + '%</span>;</div>\n';
            codBorderRadius += '<div>' + tab + 'border-top-right-radius: <span class="valueProp">' + borderRadiusTR + '%</span>;</div>\n';
            codBorderRadius += '<div>' + tab + 'border-bottom-right-radius: <span class="valueProp">' + borderRadiusBR + '%</span>;</div>\n';
            codBorderRadius += '<div>' + tab + 'border-bottom-left-radius: <span class="valueProp">' + borderRadiusBL + '%</span>;</div>\n';
        }

        if (validaString(valBoxColor, '#')) {
            valBoxColor = hexToRGB(valBoxColor);
        }

        if (validaString(borderColor, '#')) {
            borderColor = hexToRGB(borderColor);
        }

        //VERIFICA SE EXISTE BORDER
        if (borderStyle !== 'nenhuma') {
            cssBorder = '<div>' + tab + 'border-color: <span class="valueProp">' + rgbToHex(borderColor) + '</span>;</div>\n';
            cssBorder += '<div>' + tab + 'border-width: <span class="valueProp">' + borderWidth + 'px</span>;</div>\n';
            cssBorder += '<div>' + tab + 'border-style: <span class="valueProp">' + borderStyle + '</span>;</div>\n';
            
            cssBorderC = '<span class="cssComment">/*A propriedade BORDER Também pode ser utilizado assim*/</span>\n';
            cssBorderC += '<span class="class"><i>.nome-da-sua-classe</span> <span class="keys"></i>{</span>\n';
            cssBorderC += '<div>' + tab + 'width: <span class="valueProp">' + widthBoxPanel + 'px</span>;</div>\n';
            cssBorderC += '<div>' + tab + 'height: <span class="valueProp">' + heightBoxPanel + 'px</span>;</div>\n';
            cssBorderC += '<div>' + tab + 'background-color: <span class="valueProp">' + rgbToHex(valBoxColor) + '</span>;</div>\n';
            cssBorderC += '<div>' + tab + 'border: <span class="valueProp">' + borderWidth + "px " + borderStyle + " " + rgbToHex(borderColor) + '</span>;</div>\n';
            cssBorderC += codBorderRadius;
            cssBorderC += '<div>' + tab + '-webkit-box-shadow: <span class="valueProp">' + colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset) + ';</span></div>\n';
            cssBorderC += '<div>' + tab + '-moz-box-shadow: <span class="valueProp">' + colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset) + ';</span></div>\n';
            cssBorderC += '<div>' + tab + 'box-shadow: <span class="valueProp">' + colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset) + ';</span></div>\n';
            cssBorderC += '<span class="keys">}</span>\n';
        } else {
            cssBorder = '';
            cssBorderC = '';
        }

        boxCode.html(
            '<span class="class"><i>.nome-da-sua-classe</span> <span class="keys"></i>{</span>\n' +
            '<div>' + tab + 'width: <span class="valueProp">' + widthBoxPanel + 'px</span>;</div>\n' +
            '<div>' + tab + 'height: <span class="valueProp">' + heightBoxPanel + 'px</span>;</div>\n' +
            '<div>' + tab + 'background-color: <span class="valueProp">' + rgbToHex(valBoxColor) + '</span>;</div>\n' +
            cssBorder +
            codBorderRadius +
            '<div>' + tab + '-webkit-box-shadow: <span class="valueProp">' + colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset) + ';</span></div>\n' +
            '<div>' + tab + '-moz-box-shadow: <span class="valueProp">' + colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset) + ';</span></div>\n' +
            '<div>' + tab + 'box-shadow: <span class="valueProp">' + colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset) + ';</span></div>\n' +
            '<span class="keys">}</span>\n' +
            cssBorderC
        );
    }

    //FUNÇÃO INICIAL PARA FORMATAÇÃO DO BOX SHADOW
    const updateShadow = () => {
        boxPanel.css({
            '-webkit-box-shadow': colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset),
            '-moz-box-shadow': colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset),
            'box-shadow': colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset),
            'background-color': valBoxColor,
            'border-radius': borderRadius,
            'border-color': borderColor,
            'border-width': borderWidth,
            'border-style': borderStyle
        })
    }
    updateShadow();
    codeUpdate();

    //FUNÇÃO PARA COPIAR O CÓDIGO CRIADO
    $('#copy-code').click(function () {

        var txt = $('#box-shadow-code').text();
        while (txt.indexOf("               ") >= 0) {
            txt = txt.replace("               ", "");
        }
        $('body').append('<textarea id="copied">');
        $('#copied').html(txt);
        $('#copied').select();

        var ok = document.execCommand('copy');
        $('#copied').remove();
        if (ok) {
            $('#modalAlertCodCopied').modal('show');
        }
    });
});

