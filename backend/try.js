const fs=require('fs');

const data="How are you dhand";
fs.writeFile("./test.txt",data,(err)=>{
  if(err) {throw new err};
  console.log("File Written");
})
const dataRead=fs.readFileSync('./test.txt','utf-8');