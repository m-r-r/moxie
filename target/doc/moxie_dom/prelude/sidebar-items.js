initSidebarItems({"macro":[["make_state","Root a state [`Var`] at this callsite, returning an up-to-date [`Commit`] of its value and  a unique [`Key`] which can be used to commit new values to the variable."],["memo","Memoize the provided function's output at this `topo::id`."],["memo_with","Memoizes the provided function, storing the intermediate `Stored` value in memoization storage  and calling `with` with a reference to it, skipping the initialization on subsequent executions.  Returns whatever `with` returns."],["once","Runs the provided expression once per [`topo::Id`], repeated calls at the same `Id` are assigned  adjacent slots. The provided value will always be cloned on subsequent calls unless dropped  from storage."],["once_with","Memoizes `expr` once at the callsite. Runs `with` on every iteration."],["state",""]],"mod":[["topo","`topo` provides tools for describing trees based on their runtime callgraph. Because normal synchronous control flow has a tree(ish)-shaped callgraph, this can be quite natural."]],"struct":[["Closure","A handle to both a closure in Rust as well as JS closure which will invoke the Rust closure."],["Commit","A read-only pointer to the value of a state variable at a particular revision."],["JsValue","Representation of an object owned by JS."],["Key","A Key commits new values to a state variable. Keys carry a weak reference to the state variable to prevent cycles, which means that all operations called against them are fallible -- we cannot know before calling a method that the state variable is still live."],["Revision","Revisions measure moxie's notion of time passing. Each [`Runtime`] increments its Revision on every iteration. [`crate::Commit`]s to state variables are annotated with the Revision during which they were made."],["Runtime","A `Runtime` is the entry point of the moxie runtime environment. On each invocation of `run_once`, it calls the root with which it was initialized. Typically this is invoked in a loop which sleeps until the provided waker is invoked, as is the case in the `Future` implementation. Usually root closure will cause some memoized side effect to the render environment in order to produce a view of the input data. A Runtime's root closure will also transitively establish event handlers, either via locally polled `Future`s or via the containing environment's callback or event mechanisms."]],"trait":[["UnwrapThrowExt","An extension trait for `Option<T>` and `Result<T, E>` for unwraping the `T` value, or throwing a JS error if it is not available."]]});