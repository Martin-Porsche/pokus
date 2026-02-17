




//inputs
let rychlost:number = 14;
let cas:number = 0;
let draha:number = 78;








































if(rychlost === 0){

    rychlost = draha / cas

} else if(cas === 0){

    cas = draha / rychlost

} else if(draha === 0){

    draha = rychlost * cas

}

cas = Math.round(cas);
draha = Math.round(draha);
rychlost = Math.round(rychlost);


console.log(`Rychlost = ${rychlost} `)
console.log(`Čas = ${cas}`)
console.log(`Dráha = ${draha}`)