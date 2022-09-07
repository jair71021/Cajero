class Usuario{
    constructor({
        id,
        nombre,
        pass
    })
    {
        this.id=id
        this.nombre=nombre
        this.pass=pass
    }
}



class Banco{
    constructor({
        identificacion,
        saldo
    })
    {
        this.identificacion=identificacion
        this.saldo=saldo
    }
    abonar({cantidad})
    {
    
        this.saldo=this.saldo+cantidad
    
    }
    retirar({cantidad}){
        this.saldo=this.saldo-cantidad
    
    }
    transferencia({user,cantidad}){
        user.saldo=user.saldo+cantidad
    }
    consultarSaldo(){
        return this.saldo
    }
}

const jair = new Usuario(
    {
        id:1,
        nombre:"jair",
        pass:"1234"
    }
)

const banco_Azteca =new Banco(
    {
        identificacion: jair,
        saldo:5000
    }
)

//*Abonar
/*
banco_Azteca.abonar({
    cantidad:500
})

console.log(banco_Azteca.consultarSaldo());
*/
//*retirar
/*banco_Azteca.retirar({

    cantidad:1000

})
console.log(banco_Azteca.consultarSaldo());
 */
//*Consultar
/*
console.log(banco_Azteca.consultarSaldo());

*/
//*Transferencia

const juan = new Usuario(
    {
        id:2,
        nombre:"juan",
        pass:"1234juan"
    }
)

const banco_AztecaJuan =new Banco(
    {
        identificacion: juan,
        saldo:2000
    }
)

banco_Azteca.transferencia({
    user:banco_AztecaJuan,
    cantidad:1500

})

console.log(banco_AztecaJuan.consultarSaldo());

