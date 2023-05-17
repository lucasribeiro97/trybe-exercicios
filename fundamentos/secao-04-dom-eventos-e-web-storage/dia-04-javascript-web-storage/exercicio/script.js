window.onload = () => {
    // Cor de fundo da tela;
    const setBackgroundColor = (color) => {
        let content = document.querySelector('.content');
        content.style.backgroundColor = color;
        localStorage.setItem('background', color);
    }

    // Cor do texto;
    const setFontColor = (color) => {
        let paragraph = document.querySelectorAll('.paragraph');
        for (let index = 0; index < paragraph.length; index += 1) {
            paragraph[index].style.color = color
        }
        localStorage.setItem('fontColor', color);
    }

    // Tamanho da fonte;
    const setFontSize = (size) => {
        let paragraph = document.querySelectorAll('.paragraph');
        for (let index = 0; index < paragraph.length; index += 1) {
            paragraph[index].style.fontSize = size
        }
        localStorage.setItem('fontSize', size);
    }

    // Espacamento entre as linhas de texto;
    const setLineHeight = (height) => {
        let paragraph = document.querySelectorAll('.paragraph');
        for (let index = 0; index < paragraph.length; index += 1) {
            paragraph[index].style.lineHeight = height;
        }
        localStorage.setItem('lineHeight', height);
    }

    // Tipo da fonte;
    const setFontFamily = (family) => {
        let paragraph = document.querySelectorAll('.paragraph');
        for (let index = 0; index < paragraph.length; index += 1) {
            paragraph[index].style.fontFamily = family;
        }
        localStorage.setItem('fontFamily', family);
    }

    // Cor de fundo da tela;
    let backgroundColorButton = document.querySelectorAll('#background-color>button');
    for (let index = 0; index < backgroundColorButton.length; index += 1) {
        backgroundColorButton[index].addEventListener('click', (event) => {
            setBackgroundColor(event.target.innerHTML);
        })
    }

    // Cor do texto;
    let fontColorButton = document.querySelectorAll('#font-color>button');
    for (let index = 0; index < fontColorButton.length; index += 1) {
        fontColorButton[index].addEventListener('click', (event) => {
            setFontColor(event.target.innerHTML);
        })
    }

    // Tamanho da fonte;
    let fontSizeButton = document.querySelectorAll('#font-size>button');
    for (let index = 0; index < fontSizeButton.length; index += 1) {
        fontSizeButton[index].addEventListener('click', (event) => {
            setFontSize(event.target.innerHTML);
        })
    }

    // Espacamento entre as linhas de texto;
    let lineHeightButton = document.querySelectorAll('#line-height>button');
    for (let index = 0; index < lineHeightButton.length; index += 1) {
        lineHeightButton[index].addEventListener('click', (event) => {
            setLineHeight(event.target.innerHTML);
        })
    }

    // Tipo da fonte;
    let fontFamilyButton = document.querySelectorAll('#font-family');
    for (let index = 0; index < fontFamilyButton.length; index += 1) {
        fontFamilyButton[index].addEventListener('click', (event) => {
            setFontFamily(event.target.innerHTML);
        })
    }

    const initialize = () => {
        let backgroundColor = localStorage.getItem('background');
        setBackgroundColor(backgroundColor);

        let fontColor = localStorage.getItem('fontColor');
        setFontColor(fontColor);

        let fontSize = localStorage.getItem('fontSize');
        setFontSize(fontSize);

        let lineHeight = localStorage.getItem('lineHeight');
        setLineHeight(lineHeight);

        let fontFamily = localStorage.getItem('fontFamily');
        setFontFamily(fontFamily);
    }

    console.log(initialize());












    // console.log(setBackgroundColor('red'))
    // console.log(setFontColor('blue'));
    // console.log(setFontSize('20pt'))
    // console.log(setLineHeight('3'))
    // console.log(setFontFamily('Arial'))
}