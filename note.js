
const fs = require('fs')
const yargs = require('yargs')

const argv = yargs.argv


const readjson = ()=> JSON.parse(fs.readFileSync('./list.json'))

const whritejson = (obj)=> fs.writeFileSync('./list.json',JSON.stringify(obj))



function add (title , body) {

if (title !=undefined && body !=undefined ){
let obj = readjson()

if (!(obj.filter(el => el.title === title ).length )){

obj.push({title:title, body : body})

whritejson(obj)

console.log(`title:${title}`)
console.log(`body:${body}`)

}

 else  console.log('Similar title exists. Please provide a different title.')
}
 else console.log("Missing required argument : title , body")
}


function list () {

    readjson().map (el =>
        
      {  console.log(`title:${el.title}`)
        console.log(`body:${el.body}`) }

        )
       
    }


    
function remove (title) {
    let obj = readjson()

    if ((obj.filter(el => el.title === title ).length)) {

    whritejson (readjson().filter(el => el.title != title  ))

    console.log('Task Deleted succesfully')   
       
    }

    else {
        console.log('This task doesn\'t exist')
    } 
}


function read (title) {
    let obj = readjson()

    if ((obj.filter(el => el.title === title ).length)) {
        
       let found = obj.filter(el => el.title === title )

       found.map (el =>
        
        {  console.log(`title:${el.title}`)
          console.log(`body:${el.body}`) }
  
          )
     
    } 
    else console.log('Note not found')
}



module.exports = {
   add , remove, list ,readjson , read
}