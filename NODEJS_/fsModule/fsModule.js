// initializing project init in that what we write in the js file
const { error } = require('console');
const fs = require('fs');
//writefile 
//appendfile
//copyfile
//
//callback mean the function
fs.writeFile("file.txt", "Hello how are you",function(err){
    if(err){
        console.log(error);
        
    }
    else{
        console.log('done');
        
    }
})

fs.appendFile("file.txt", "Hello how are you",function(err){
    if(err){
        console.log(error);
        
    }
    else{
        console.log('done');
        
    }
})

fs.rename("file.txt", "hello.txt", function(err){
    if(err){
        console.log("error");  
    }
    else{
        console.log('done');
        
    }
})

fs.copyFile("hello.txt","C:\\MY DIRECTORY\\NodeJs\\NODEJS_\\hello.txt",function(err){
    if (err) {
        console.log("error.....",err.message); 
    }
    else console.log("done");
    
})

fs.unlink("hello.txt", function(error){
    if (error) {
        console.log(err.message);
        
    }else{
        console.log("removed");
        
    }
})

//fs.rmdir(); there is instead of rmdir there is rm

