const core = require("@actions/core");
const github = require("@actions/github");

try {
    const name = core.getInput("who-to-greet");
    console.log(`Hello ${name}`);

    const time = new Date();
    core.setOutput("time", time.toTimeString());
    
} catch (error) {
    core.setFailed(error.message);
}


//npm install @actions/core --save
//npm install @actions/github --save
//npm i -D @zeit/ncc