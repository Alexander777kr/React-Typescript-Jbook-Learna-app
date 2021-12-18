# JSNote React + Typescript app

To view the application, enter **npx jsnote-al777 serve**
The application consists of two possible panels: text and code.
The text in *text cell* can be formatted using the built-in editor.
The *code cell* allows you to write react code: try to write react code inside show(); function.
For example, enter:

    show(<h1>Hello,  React</h1>);

The code cell also allows you to import any libraries from unpkg.com and see changes in the display of the result of code execution in real time.
For example, enter:

    import getJokes from  'jokes-api';
    let jokeStart =  async()  =>  {
    let joke =  await getJokes('Programming');
    show(joke);
    }
    jokeStart();


## Dependencies

This application includes a **local-client** react application and an express node application called **local-api**, which includes a router for loading and automatically saving cells, as well as http-proxy-middleware.

## App state management

Code and text cells can be added, moved and deleted. A text file is used to cache the entered text and code, IndexedDB is used to cache the js libraries. The state of the application is regulated by *Redux* using the *immer* library.

## Managing multiple packages

**Lerna** is used to streamline the multi-package repository management workflow.

## Javascript bundler

The application uses **esbuild-wasm** to build Javascript code.