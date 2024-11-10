const button = document. getElementById('button')
const toast = document. getElementById('toasts')

const  messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

const types = ['info', 'success','error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomMeType())


    notif.innerText = message ? message : getRandomMessage()


    toasts.appendChild(notif)

    setTimeout(() =>{
        notif.remove()
    },3000)
}


function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomMeType() {
    return types[Math.floor(Math.random() * types.length)]
}