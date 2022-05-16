const inquirer = require('inquirer')
const fs = require('fs')

const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title?'
},
{
    type: 'input',
    name: 'description',
    message: 'What is the project about?'
},
{
    type: 'input',
    name: 'install',
    message: 'How do you install this project?'
},
{
    type: 'input',
    name: 'deployed',
    message: 'What is the deployed link?'
}
]

function writeFile(answers){
fs.writeFileSync('./README.md', `# ${answers.title}
# Description 
## ${answers.description}
# Installation 
## ${answers.install}
# Deployed Link  
[DEPLOYED LINK](${answers.deployed})`)

}

inquirer.prompt(questions)
.then((answers) =>{
writeFile(answers)
console.log('SUCCESS, you created a README')
})


