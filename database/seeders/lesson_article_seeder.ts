import { BaseSeeder } from '@adonisjs/lucid/seeders'
import LessonArticle from '#models/lesson_article'

export default class extends BaseSeeder {
  async run() {
    await LessonArticle.updateOrCreateMany('lessonId', [
      {
        id: 1,
        lessonId: 2,
        content: `
# Working with JavaScript Functions

Functions are one of the fundamental building blocks in JavaScript. A function is a reusable block of code that performs a specific task.

## Function Declaration
The most basic way to define a function is using the function declaration:

\`\`\`javascript
function greet(name) {
    return "Hello, " + name + "!";
}
\`\`\`

## Arrow Functions
Modern JavaScript introduces arrow functions, providing a more concise syntax:

\`\`\`javascript
const greet = (name) => {
    return "Hello, " + name + "!";
};
\`\`\`

## Function Parameters and Arguments
Functions can accept parameters and use them within their code block. When you call a function with values, those values are called arguments.

## Best Practices
1. Use descriptive function names
2. Keep functions focused on a single task
3. Avoid side effects when possible
4. Document your functions with comments
`
      }
    ])
  }
}