export default {
  common: {
    reset: 'Reset',
    clearMessage: 'Clear message'
  },
  annotation: {
    title: 'TypeScript Type Annotation Demo',
    initialName: 'Alice',
    changedName: 'Bob',
    successName: 'Updated successfully. Type check passed',
    ageError:
      'TypeScript error: type "string" is not assignable to type "number"',
    activeMessage: 'Status changed to {value}',
    buttons: {
      modifyName: 'Change name (valid)',
      ageError: 'Assign wrong type',
      toggleActive: 'Toggle isActive'
    },
    panels: {
      javascript: 'JavaScript (no type checking)',
      typescript: 'TypeScript (compile-time checking)'
    },
    jsCode:
      'let name = "Alice"\nname = 123  // Runtime error may appear much later',
    tsCode:
      'let name: string = "Alice"\nname = 123  // Compile-time error appears immediately'
  },
  inference: {
    title: 'Type Inference Demo',
    conceptTitle: 'What is type inference?',
    conceptText:
      'TypeScript can infer variable types from your code, so you do not need to annotate every value manually.',
    selectorTitle: 'Choose an example to see how type inference works:',
    codeLabel: 'Code',
    inferredTypeLabel: 'Inferred type',
    tryError: 'Try a type error',
    errorMessage:
      'TypeScript error: type "number" is not assignable to type "{type}"',
    practicesTitle: 'Best Practices',
    comparisonTitle: 'Type Inference vs Explicit Annotation',
    inferenceLabel: 'Use inference',
    annotationLabel: 'Explicit annotation',
    examples: [
      {
        id: 1,
        code: 'let name = "Alice"',
        inferredType: 'string',
        explanation:
          'TypeScript infers that name has type string from the assigned string value.'
      },
      {
        id: 2,
        code: 'let age = 25',
        inferredType: 'number',
        explanation:
          'TypeScript infers that age has type number from the numeric literal.'
      },
      {
        id: 3,
        code: 'let isActive = true',
        inferredType: 'boolean',
        explanation:
          'TypeScript infers that isActive has type boolean from the boolean value.'
      },
      {
        id: 4,
        code: 'let numbers = [1, 2, 3]',
        inferredType: 'number[]',
        explanation: 'TypeScript infers this as an array of numbers.'
      }
    ],
    practices: [
      {
        title: 'When to use inference',
        items: [
          'A variable has a clear initial value',
          'The function return type is obvious',
          'The assignment is a simple literal'
        ]
      },
      {
        title: 'When to add annotations',
        items: [
          'Function parameters are required',
          'Objects or arrays have complex structure',
          'The initial value cannot reveal the type',
          'You need an explicit type constraint'
        ]
      }
    ],
    comparisons: [
      {
        scenario: 'Function return value',
        withInference:
          'function add(a: number, b: number) {\n  return a + b  // inferred as number\n}',
        withAnnotation:
          'function add(a: number, b: number): number {\n  return a + b\n}',
        recommendation: 'Inference is recommended'
      },
      {
        scenario: 'Complex object',
        withInference:
          'const user = {\n  name: "Alice",\n  age: 25,\n  email: "test@example.com"\n}  // type is inferred automatically',
        withAnnotation:
          'interface User {\n  name: string\n  age: number\n  email: string\n}\n\nconst user: User = { ... }',
        recommendation: 'Use an interface for complex structures'
      }
    ]
  },
  interfaceDemo: {
    title: 'Interface Demo',
    definitionTitle: 'User Interface Definition',
    ageLabel: 'Age:',
    initialUser: { id: 1, name: 'Alice', email: 'alice@example.com', age: 25 },
    newUser: { id: 2, name: 'Bob', email: 'bob@example.com', age: 30 },
    messages: {
      typeError:
        'TypeScript error: type "string" is not assignable to type "number"',
      newUser: 'New user created. Type check passed',
      ageUpdated: 'Age updated to {age}'
    },
    buttons: {
      increaseAge: 'Increase age',
      typeError: 'Try assigning wrong type',
      newUser: 'Create new user'
    },
    examples: {
      correctTitle: 'Correct usage',
      errorTitle: 'Incorrect usage',
      correctCode:
        'const user: User = {\n  id: 1,\n  name: "Alice",\n  email: "alice@example.com",\n  age: 25\n} // fully matches the type',
      errorCode:
        'const user: User = {\n  id: 1,\n  name: "Alice",\n  email: "alice@example.com",\n  age: "25"  // error: age should be number, not string\n}'
    }
  },
  generics: {
    title: 'Generics Demo',
    conceptStrong: 'Generics are reusable templates',
    conceptText:
      'They handle different data types while preserving type safety',
    definitionTitle: 'Generic Function Definition',
    definitionCode:
      '// T is a type variable decided when the function is used\nfunction identity<T>(arg: T): T {\n  return arg\n}\n\n// Generic array reversal\nfunction reverseArray<T>(arr: T[]): T[] {\n  return [...arr].reverse()\n}',
    selectType: 'Choose data type:',
    numberArray: 'Number array',
    stringArray: 'String array',
    inputLabel: 'Input array (comma-separated):',
    numberPlaceholder: '1, 2, 3, 4, 5',
    stringPlaceholder: 'apple, banana, orange',
    loadNumber: 'Load number example',
    loadString: 'Load string example',
    execute: 'Run reverse',
    resultTitle: 'Result',
    inputType: 'Input type:',
    inputArray: 'Input array:',
    outputArray: 'Output array:',
    typeSafety: 'Type safe: input {type}, output {type}',
    usageTitle: 'Generic Usage Examples',
    numberExampleTitle: 'Number array',
    stringExampleTitle: 'String array',
    emptyError: 'Please enter content',
    unknownType: 'Unknown type',
    formatError: 'Invalid input format',
    stringExampleValue: 'apple, banana, orange, grape',
    numberExampleCode:
      'const nums = [1, 2, 3, 4, 5]\nconst reversed = reverseArray<number>(nums)\n// result: [5, 4, 3, 2, 1]\n// type: number[]',
    stringExampleCode:
      'const strs = ["a", "b", "c"]\nconst reversed = reverseArray<string>(strs)\n// result: ["c", "b", "a"]\n// type: string[]'
  }
}
