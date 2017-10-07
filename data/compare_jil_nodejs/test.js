const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
    input: fs.createReadStream('demo.txt'),
    output: fs.createWriteStream('re.txt'),
});
console.log(rl);
const pattern =/\*\s-*\s150699_MBS_[\s\S]*_RPT\s-*\s\*/;
const pattern2= /\*\s-*\s150699_[\s\S]*\s-*\s\*/;
var flag = 0;
rl.on('line', function(line){
    console.log(line);
    if (pattern.test(line)){
        console.log(line);
        rl.output.write(line);
        rl.output.write('\n');
        flag = 1;
    }else if(pattern2.test(line) || flag == 0){
        flag = 0;
    }else{
        console.log(line);
        rl.output.write(line);
        rl.output.write('\n');
    } 
});
rl.on('close', function() {
    console.log('bye bye');
});