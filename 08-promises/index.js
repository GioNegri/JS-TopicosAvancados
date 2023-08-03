//pendente - pending
//resolvida - resolved
//rejeitada - rejected
//finalizada

const p = new Promise((resolve) =>{
    console.log('A promise está sendo executada.')
    setTimeout(()=>{
        console.log('Resolvendo a promise...')
        resolve(true)
    },1000*2)
})

console.log(p)

setTimeout(() =>{
    console.log(p)
}, 1000 * 3)
