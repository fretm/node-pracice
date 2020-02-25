/**
 * // Fix the slow function to be asynchronous/non-blocking
function slow(callback){
for(let i=0; i<= 5e8; i++){}
if (Math.random() > 0.5) {
return callback("Error",null)
}
callback(null, {id:12345})
}
function exec(fn){
// Complete the code here to implement chaining with callback
}
exec(slow).done(function(data){ console.log(data); })
.fail(function(err){ console.log("Error: " + err); });
 
*/


function slow(callback){
    setTimeout(()=>{for(let i=0 ;i<55 ;i++){}},0)
       if(Math.random()> 0.5){
           return callback("Error" ,null)
    
       }
    callback(null,{id:12345})
    
    }
    
    
    
    function exec(fn){
         let obj ={}
           fn(callback)
    function callback(x,y){
        if(x === "Error"){
          obj.done =function(fun2){ return{fail:function(err){err(x)}}}
        }
    else{
          obj.done = function(fun2){fun2(y);return{fail:function(){}}}
        }
    }
    
    return obj 
    }
    
    exec(slow).done(function(data){console.log(data)})
               .fail(function(err){console.log("Error:" +err);})
        