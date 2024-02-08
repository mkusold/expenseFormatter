import { prompt, registerPrompt } from 'inquirer'

registerPrompt('filePath', require('inquirer-file-path'))
registerPrompt('directory', require('inquirer-select-directory'))

const defaultCategoryOptions = [
    'Paycheck',
    'Credit Card Payment',
    'Interest Income',
    'Transfer',
    'Bonus',
    'Income',
    'Financial',
    'Duplicate',
]

const questions = [
    { 
        type: 'checkbox',
        name: 'eliminatedCategories',
        message: 'Select the categories you want eliminated',
        suffix: '[All are selected by default. Hit Enter to confirm selection.]',
        choices: defaultCategoryOptions,
        default: defaultCategoryOptions,
    },
    {
        type: 'filePath',
        name: 'inputPath',
        message: `Select the input CSV transactions file. >>> `,
        basePath: './data',
    },
    {
        type: 'directory',
        name: 'outputPath',
        message: `Select where you want the resulting CSV to go. >>> `,
        basePath: './data',
    },
];

export default async function getInput(){
    return prompt(questions)
}
