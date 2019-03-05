
const yargs = require('yargs')
const note = require('./note')
const argv = yargs.argv





if (argv._[0].length){

if (argv._[0]=== 'add'){

    note.add(argv.title , argv.body)
}


if (argv._[0]=== 'list'){

    note.list()
}

if (argv._[0]=== 'remove'){

    note.remove(argv.title)
}

if (argv._[0]=== 'read'){

    note.read(argv.title)
}


}
else {
    
    console.log ("--help Show Help")
    console.log ("Invalid Command")

}
console.log(note.readjson())
