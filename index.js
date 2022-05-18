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
},
{
    type: 'input',
    name: 'github',
    message: 'What is your github username?'
},
{
    type: 'input',
    name: 'email',
    message: 'What is you email?'
},
{
    type: 'list',
    name: 'license',
    message: 'License type?',
    choices: ["Patent", "Trademark", "Copyright", "Exclusive", "Open Source"]
}
]

function writeFile(answers){
fs.writeFileSync('./README.md', `# ${answers.title}
# License
${answers.license}
# Description 
${answers.description}
# Installation 
${answers.install}
# Github
${answers.github}
# Email
${answers.email}
# Deployed Link  
[DEPLOYED LINK](${answers.deployed})
`)

}

inquirer.prompt(questions)
.then((answers) =>{
writeFile(answers)
console.log('SUCCESS, you created a README')
})
.catch((error)=>{
    if(error){
        console.log('There seems to be an error', error)
    }
})


