
class Calculadora{

    constructor(){

    }

    suma =(a,b)=>{
        return a+b
    }

    resta =(a,b)=>{
        return a-b
    }

    mul =(a,b)=>{
        return a*b
    }
    
    div =(a,b)=>{
        if(b===0){
            return NaN;
        }
        return a/b
    }
}

module.exports={
    Calculadora
}