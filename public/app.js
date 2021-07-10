const bodyInput = document.querySelector('textarea')
const prefixInput = document.querySelector('.prefix-input')
const prefixOutput = document.querySelector('.prefix-output')
const bodyOutput = document.querySelector('.body-output')
const descriptionInput = document.querySelector('.description-input')
const descriptionOutput = document.querySelector('.description-output')

let prefixOutputValue = prefixInput.value
prefixInput.addEventListener('input', () => {
    prefixOutputValue = prefixInput.value
    prefixOutput.innerHTML = `&nbsp;&nbsp;"prefix": <span class='content-coloring'>&nbsp;"${prefixOutputValue}",</span>`
})

descriptionInput.addEventListener('input', () => {
    const descriptionOutputValue = descriptionInput.value
    descriptionOutput.innerHTML = `&nbsp;&nbsp;"description": <span class='content-coloring'>&nbsp;"${descriptionOutputValue}"</span>`
})

bodyInput.addEventListener('input', () => {
    bodyOutput.innerHTML = `&nbsp;&nbsp;"body": [<br>`
    const bodyOutputValue = bodyInput.value
    const arrayOfbodyOutputValue = bodyOutputValue.split('\n')
    arrayOfbodyOutputValue.forEach((value) => {
        const valueAfterCharacterReplace = value.replace(/"/g, `\\"`)
        const span = document.createElement('span')
        span.classList.add('content-coloring')
        const newline = document.createElement('br')
        span.innerHTML = span.innerHTML + `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`
        span.innerText = span.innerText + `"${valueAfterCharacterReplace}",`
        bodyOutput.appendChild(span)
        bodyOutput.appendChild(newline)
    })
    bodyOutput.innerHTML = bodyOutput.innerHTML + `&nbsp;&nbsp;],`
})

const contentDisplay = document.querySelector('.content-display')
const btn = document.querySelector('button')
btn.addEventListener('click', () => {
    const contentIntextarea = document.createElement('textarea')
    contentIntextarea.value = contentDisplay.innerText
    document.body.appendChild(contentIntextarea)
    contentIntextarea.select()
    document.execCommand('copy')
    document.body.removeChild(contentIntextarea)
})

const upAndDown = document.querySelectorAll('.fas')
setTimeout(() => {
    upAndDown[0].style.left = '50%'
    upAndDown[0].style.top = '50%'
    upAndDown[0].style.transform = 'translate(-50%,-200%)'

    upAndDown[1].style.left = '50%'
    upAndDown[1].style.bottom = '50%'
    upAndDown[1].style.transform = 'translate(-50%,200%)'
}, 4000)
