function imc(weight, height){
    return new Promise((resolve, reject)=>{
        if(typeof weight !== 'number' || typeof height !== 'number'){
            reject('arguments must be of type number')
        } else{
            resolve(weight / (height * height))   
        }
    })
}

function showImc (weight, height)  {
    imc(weight,height).then((result)=>{
        console.log(`O resultado do IMC foi de ${result}.`)
    
        if(result <18.5) console.log( 'Situação: Magreza')
        else if(result <25) console.log('Situação: Normal')
        else if(result < 30) console.log('Situação: Sobrepeso')
        else if(result < 40) console.log('Situação: Obesidade')
        else console.log ('Situação: Obesidade grave')
    }).catch((err)=>{
        console.log(err)
    })

    console.log(`calculando o IMC para peso ${weight} a altura ${height} ...`)
}

showImc(71.5,1.74)
showImc(58,1.73)
showImc(71,"texto")
showImc(185,1,50)