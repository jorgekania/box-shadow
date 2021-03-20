$(document).ready(function () {

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

    const colorInti = (color, op, hl, vl, br, sf, i = '') => {
        return hexToRGB(color, op) + ' ' + hl + 'px ' + vl + 'px ' + br + 'px ' + sf + 'px ' + i;
    }

    //QUAIS CAMPOS E ELEMENTOS
    const horizontalLength = $('#horizontal-length');
    const verticalLength = $('#vertical-length');
    const blurRadius = $('#blur-radius');
    const spreedField = $('#spread-field');
    const boxColor = $('#box-color');
    const backgroundColor = $('#background-color');
    const shadowColor = $('#shadow-color');
    const shadowOpacity = $('#shadow-opacity');
    const colorBoxPanel = $('#box-shadow-object');
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
    var widthBoxPanel = colorBoxPanel.width();
    var heightBoxPanel = colorBoxPanel.height();
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

    // INSET BUTTON
    $(".option-panel input").checkboxradio();
    $(".option-panel .option").click(function () {
        var option = $(this).attr('id');
        inset = option == 'inset' ? 'inset' : '';
        updateShadow();
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
            $('#slider-border-radius-all').css('display', 'block');
            $('.all-radius-value').css('display', 'block');
        } else {
            borderRadius = 0;
            $('#box-border-radius').val(borderRadius)
            $('#slider-border-radius-all').children().eq(0).css('left', borderRadius + '%')
            updateShadow();
            codeUpdate();
            $('#slider-border-radius-all').css('display', 'none');
            $('.all-radius-value').css('display', 'none');
            $('.slider-border-radius-single').css({
                'display': 'block',
                'margin': '0 0 0 10px',
            });
        }
    });

    //MENU SELECT
    var borderStyle = $("#style-border").val().toLowerCase();
    $("#style-border").selectmenu({
        change: function (event, ui) {
            borderStyle = ui.item.value;
            colorBoxPanel.css('border-style', borderStyle);
            codeUpdate();
        }
    });


    //SLIDERS
    $('.slider-bar').slider({
        create: function (event, ui) { },
        value: 0,
        min: -200,
        max: 200,
        step: 1,
        slide: function (event, ui) {

            let selected = $(this).attr('id');

            if (selected == 'slider-horizontal-bs') {
                $("#horizontal-length").val(ui.value);
                valHorizontalLength = ui.value;
                colorBoxPanel.css('box-shadow', colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset));
            } else if (selected == 'slider-vertical-bs') {
                $("#vertical-length").val(ui.value);
                valVerticalLength = ui.value;
                colorBoxPanel.css('box-shadow', colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset));
            } else if (selected == 'slider-spread-field') {
                $("#spread-field").val(ui.value);
                valSpreedField = ui.value;
                colorBoxPanel.css('box-shadow', colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset));
            } else if (selected == 'slider-blur-bs') {
                $("#blur-radius").val(ui.value);
                valBlurRadius = ui.value;
                colorBoxPanel.css('box-shadow', colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset));
            } else if (selected == 'slider-opacity-bs') {
                $("#shadow-opacity").val(ui.value);
                valShadowOpacity = ui.value;
                colorBoxPanel.css('box-shadow', colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset));
            }
            codeUpdate();
        }
    });

    //SOMENTE PARA CASO DO SLIDER BORDER SIZE
    $('#slider-border-bs').slider({
        value: 0,
        min: 0,
        max: 100,
        step: 1,
        slide: function (event, ui) {
            $("#border-length").val(ui.value);
            borderWidth = ui.value;
            colorBoxPanel.css('border-width', borderWidth);
            codeUpdate();
        }
    });

    //SOMENTE PARA CASO DO SLIDER BORDER ALL
    $('#slider-border-radius-all').slider({
        value: 0,
        min: 0,
        max: widthBoxPanel / 2,
        step: 1,
        slide: function (event, ui) {
            $("#box-border-radius").val(ui.value);
            borderRadius = ui.value;
            valuePropBorderRadius = borderRadius;
            propBorderRadius = 'border-radius';
            colorBoxPanel.css('border-radius', borderRadius);
            codeUpdate();
        }
    });

    //SOMENTE PARA CASO DO SLIDER BORDER TL
    $('#slider-border-radius-tl').slider({
        value: 0,
        min: 0,
        max: widthBoxPanel / 2,
        step: 1,
        slide: function (event, ui) {
            $("#box-border-radius-single-tl").val(ui.value);
            borderRadiusTL = ui.value;
            valuePropBorderRadius = borderRadiusTL;
            propBorderRadius = 'border-top-left-radius';
            colorBoxPanel.css('border-top-left-radius', borderRadiusTL);
            codeUpdate();
        }
    });

    //SOMENTE PARA CASO DO SLIDER BORDER TR
    $('#slider-border-radius-tr').slider({
        value: 0,
        min: 0,
        max: widthBoxPanel / 2,
        step: 1,
        slide: function (event, ui) {
            $("#box-border-radius-single-tr").val(ui.value);
            borderRadiusTR = ui.value;
            valuePropBorderRadius = borderRadiusTR;
            propBorderRadius = 'border-top-right-radius';
            colorBoxPanel.css('border-top-right-radius', borderRadiusTR);
            codeUpdate();
        }
    });

    //SOMENTE PARA CASO DO SLIDER BORDER BL
    $('#slider-border-radius-bl').slider({
        value: 0,
        min: 0,
        max: widthBoxPanel / 2,
        step: 1,
        slide: function (event, ui) {
            $("#box-border-radius-single-bl").val(ui.value);
            borderRadiusBL = ui.value;
            valuePropBorderRadius = borderRadiusBL;
            propBorderRadius = 'border-bottom-left-radius';
            colorBoxPanel.css('border-bottom-left-radius', borderRadiusBL);
            codeUpdate();
        }
    });

    //SOMENTE PARA CASO DO SLIDER BORDER BL
    $('#slider-border-radius-br').slider({
        value: 0,
        min: 0,
        max: widthBoxPanel / 2,
        step: 1,
        slide: function (event, ui) {
            $("#box-border-radius-single-br").val(ui.value);
            borderRadiusBR = ui.value;
            valuePropBorderRadius = borderRadiusBR;
            propBorderRadius = 'border-bottom-right-radius';
            colorBoxPanel.css('border-bottom-right-radius', borderRadiusBR);
            codeUpdate();
        }
    })

    //SOMENTE PARA CASO DO SLIDER BLUR RADIUS
    $('#slider-blur-bs').slider({
        value: 80,
        min: 0,
        max: 300,
        step: 1,
        slide: function (event, ui) {
            $("#blur-radius").val(ui.value);
            valBlurRadius = ui.value;
            colorBoxPanel.css('box-shadow', colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset));
            codeUpdate();
        }
    });

    //SOMENTE PARA CASO DO SLIDER DE OPACITY
    $('#slider-opacity-bs').slider({
        value: 0.85,
        min: 0,
        max: 1,
        step: 0.01,
        slide: function (event, ui) {
            $("#shadow-opacity").val(ui.value);
            valShadowOpacity = ui.value;
            colorBoxPanel.css('box-shadow', colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset));
            codeUpdate();
        }
    });

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
                colorBoxPanel.css('background-color', valBoxColor);
                codeUpdate();
            } else if (selected == 'shadow-color') {
                valShadowColor = color.toHexString();
                valShadowOpacity = color['_a'];
                shadowBoxPanel = colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset);
                colorBoxPanel.css('box-shadow', shadowBoxPanel);
                codeUpdate();
            } else if (selected == 'background-color') {
                valBackgroundColor = colorEl();
                colorBackgroundColor.css('background-color', valBackgroundColor);
                codeUpdate();
            } else if (selected == 'border-color') {
                borderColor = colorEl();
                colorBoxPanel.css('border-color', borderColor);
                codeUpdate();
            }
        }
    })

    //ATUALIZA A AREA QUE MOSTRA O CÓDIGO CSS
    const codeUpdate = () => {

        if (borderRadius >= 0) {
            codBorderRadius = '<div>' + tab + 'border-radius: <span class="valueProp">' + valuePropBorderRadius + 'px</span>;</div>\n';
        }

        if (borderRadiusTL > 0 || borderRadiusTR > 0 || borderRadiusBL > 0 || borderRadiusBR > 0) {
            codBorderRadius = '<div>' + tab + 'border-top-left-radius: <span class="valueProp">' + borderRadiusTL + 'px</span>;</div>\n';
            codBorderRadius += '<div>' + tab + 'border-top-right-radius: <span class="valueProp">' + borderRadiusTR + 'px</span>;</div>\n';
            codBorderRadius += '<div>' + tab + 'border-bottom-right-radius: <span class="valueProp">' + borderRadiusBR + 'px</span>;</div>\n';
            codBorderRadius += '<div>' + tab + 'border-bottom-left-radius: <span class="valueProp">' + borderRadiusBL + 'px</span>;</div>\n';
        }

        if (valBoxColor) {
            valBoxColor = valBoxColor;
        }
        boxCode.html(
            '<span class="class"><i>.sua-classe</span> <span class="keys">{</span>\n' +
            '<div>' + tab + 'background-color: <span class="valueProp">' + valBoxColor + '</span>;</div>\n' +
            '<div>' + tab + 'border-color: <span class="valueProp">' + borderColor + '</span>;</div>\n' +
            '<div>' + tab + 'border-width: <span class="valueProp">' + borderWidth + 'px</span>;</div>\n' +
            '<div>' + tab + 'border-style: <span class="valueProp">' + borderStyle + '</span>;</div>\n' +
            codBorderRadius +
            '<div>' + tab + '-webkit-box-shadow: <span class="valueProp">' + colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset) + ';</span></div>\n' +
            '<div>' + tab + '-moz-box-shadow: <span class="valueProp">' + colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset) + ';</span></div>\n' +
            '<div>' + tab + 'box-shadow: <span class="valueProp">' + colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset) + ';</span></div>\n' +
            '<span class="keys">}</span></i>'
        );
    }

    //FUNÇÃO INICIAL PARA FORMATAÇÃO DO SHADOW
    const updateShadow = () => {
        colorBoxPanel.css({
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
        txt = txt.replace('               ', '');
        txt = txt.replace('               ', '');
        txt = txt.replace('               ', '');
        txt = txt.replace('               ', '');
        txt = txt.replace('               ', '');
        txt = txt.replace('               ', '');
        txt = txt.replace('               ', '');
        txt = txt.replace('               ', '');
        txt = txt.replace('               ', '');
        txt = txt.replace('               ', '');
        txt = txt.replace('               ', '');
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

