const qrCodeImg = document.querySelector('#qr-code-img')
const inputText = document.querySelector('#input-text')
const generateBtn = document.querySelector('#generate-btn')

const apiUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='

async function getQrCode(){
    qrCodeImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputText.value
}

generateBtn.addEventListener("click", function(){
    if(inputText.value.trim()){
        getQrCode()
    }
})