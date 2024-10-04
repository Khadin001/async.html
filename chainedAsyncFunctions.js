async function firstAsyncFunction() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("First function executed");
            resolve();
        }, 1000);
    });
}

async function secondAsyncFunction() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Second function executed");
            resolve();
        }, 1000);
    });
}

async function thirdAsyncFunction() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Third function executed");
            resolve();
        }, 1000);
    });
}

async function chainedAsyncFunctions() {
    await firstAsyncFunction();
    await secondAsyncFunction();
    await thirdAsyncFunction();
}

// Appel de la fonction principale
chainedAsyncFunctions();