// En este video veamos como eliminar elementos del storage...

//Eliminar del localStorage
localStorage.removeItem('nombre');

// En cuanto a toda laf uncionalidad d eun CRUD, nos haria falta un update, no hay como tal un Update... lo que podrías hacer es...

//Actualziar un registro
const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray)
mesesArray.push('nuevo Mes');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray))

//Limpia Totalmente el LocAL sTORAGE
localStorage.clear();