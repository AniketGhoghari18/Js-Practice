// ----- Lexical Scope -----
// Lexical scope is the definition area of an expression.
// In other words, an item's lexical scope is the place in which the item got created.

// ---- Closure ----
// Closure is a function alog with their lexical scope..

function perent_func() {
    let message = 'Hello Perent';
    return function child_func() {
        console.log(message);
    }
}

const closure_fuc = perent_func();
closure_fuc();