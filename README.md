# My React TypeScript App

A `Hello, World!` app in React using TypeScript.

## Features

- **Increment** button
- **Counter** display
- **API** call to [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)
- **Conditional rendering** of counter display

## Dev Container

Repo includes a `.devcontainer` folder with a `devcontainer.json` to pull a Node.js image with npm, TypeScript and React included.

## Installation

1. Clone the repo

1. Start the dev container. Start VS Code and cmd+shift+p to open the command palette and select Remote-Containers: Open Folder in Container and select the repo folder e.g., my-app

1. Install dependencies. Once container is running, open a terminal and run

 ```bash
npm init -y
npm install react react-dom
npm install --save-dev typescript@4.9.5 @types/react @types/react-dom
npx tsc --init
```

> Note: typescript version 4.9.5 is used to avoid issues with React

1. update package.json to include the following scripts:

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",}
```

1. install react-scripts

```bash
npm install react-scripts
```

1. install Babel

```bash
npm install --save-dev @babel/plugin-proposal-private-property-in-object
```

1. update tsconfig.json to include the following:

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

1. start the app

```bash
npm start
```

> Using CRA does not work with workspace and devcontainer files in the directory, so do not do since you can't move devcontainer files with the container running:

```bash
npx create-react-app . --template typescript
```

## Debugging


1. add the following to the launch.json file in the .vscode folder. Choose Chrome, not Node

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Chrome",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}/src"
    }
  ]
}
```

1. In VS Code terminal, start the app with `npm start`
1. set breakpoints in the code
1. start the debugger with cmd+shift+d and select Chrome


## License

[MIT](LICENSE)
```

