//streams-writeble,readeble,duplex,transform
//usecase-used for reading files
//so before we used readfilesync to read the files and stored it in a variable but if the file is too large then it will not accomadate in the variable so it will show error so here we can use read streams
//lets show an example
//lets say i have a big file
const {createReadStream} =require('fs')
const stream=createReadStream('./content/big.txt')//creates a readstream and normally the chunks which is created here is by default 64kb

//so we can adjust the size of chunks
//const stream = createReadStream("./content/big.txt",{highWaterMark:90000},encoding:'utf8');

stream.on('data',(res)=>{
    console.log(res);
    
})//the stream is listening on the data in the chunk
//here we are not redaing the file at once we are redaing in chunks and each and everttime the cunk of data is read, the call back will triggered

stream.on('error',(err)=>{
    console.log(err);
    
})//if there is any error in the file