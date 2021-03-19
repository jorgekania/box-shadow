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
        return hexToRGB(color, op) + ' ' + hl + '<span class="pixel">px</span> ' + vl + '<span class="pixel">px</span> ' + br + '<span class="pixel">px</span> ' + sf + '<span class="pixel">px</span> ' + i;
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

    //VALOR DOS CAMPOS
    var valHorizontalLength = horizontalLength.val();
    var valVerticalLength = verticalLength.val();
    var valBlurRadius = blurRadius.val();
    var valSpreedField = spreedField.val();
    var valBoxColor = boxColor.val();
    var valBackgroundColor = backgroundColor.val();
    var valShadowColor = shadowColor.val();
    var valShadowOpacity = shadowOpacity.val();
    var tab = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    var shadowBoxPanel;
    var inset;

    // INSET BUTTON
    $(".option-panel input").checkboxradio();
    $(".option-panel .option").click(function () {
        var option = $(this).attr('id');
        inset = option == 'inset' ? 'inset' : '';
        updateShadow();
        codeUpdate();
    })


    //SLIDERS
    $('.slider-bar').slider({
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
            }
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
            }
        }
    })

    const codeUpdate = () => {

        if (valBoxColor) {
            valBoxColor = valBoxColor;
        }
        boxCode.html(
            '<span class="class"><i>.sua-classe</span> <span class="keys">{</span>' +
            '<div>' + tab + 'background-color: <span class="valueProp">' + valBoxColor + '</span>;</div>\n' +
            '<div>' + tab + '-webkit-box-shadow: <span class="valueProp">' + colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset) + ';</span></div>\n' +
            '<div>' + tab + '-moz-box-shadow: <span class="valueProp">' + colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset) + ';</span></div>\n' +
            '<div>' + tab + 'box-shadow: <span class="valueProp">' + colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset) + ';</span></div>\n' +
            '<span class="keys">}</span></i>'
        );
    }
    const updateShadow = () => {
        colorBoxPanel.css({
            '-webkit-box-shadow': colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset),
            '-moz-box-shadow': colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset),
            'box-shadow': colorInti(valShadowColor, valShadowOpacity, valHorizontalLength, valVerticalLength, valBlurRadius, valSpreedField, inset),
            'background-color': valBoxColor
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

