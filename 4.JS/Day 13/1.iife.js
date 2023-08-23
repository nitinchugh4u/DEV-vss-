/**
 * Self callable
 * Only one time call
 * You can't call it explicitely
 */


// Before IIFE

function onUILoad(){
    console.log("UI Loaded succesfully")
}

onUILoad();


// After IIFE


(() =>{
console.log("UI Loaded inside IIFE")
})();

(function(){
    console.log("UI Loaded inside IIFE")

})()







