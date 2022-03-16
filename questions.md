### ANSWERS

1. The difference is that the PureComponent implements the shouldComponentUpdate lifecycle method, which disable the re-rendering. We only use PureComponents if the component is not using any state or props which can change its state. Because it is not rendered again, than the child components will not be rendered again also, so children must pure also.

2. As mentioned above, PureComponent ans shouldComponentUpdate can block the context changes in children components, for example if a UI Theme is stored in context

3.
    1. Pass a callback function to the child component, if it is called it will call a fucntion in the parent component
    2. Not just return a component from a module, because React components are functions, we can return anything, so why not return the component and any other methods (destructure the object), which can be called from the parent component

4. Use shouldComponentUpdate or PureComponent with Class components, with functional components we can use useMemo or useCallback
5. We can only return one element from a react component, to avoid adding unnecessary <div>s forexample, we can use Fragments, which will be not rendered to the dom. It is simplifies the dom, and the CSS styling will not break because of unwanted dom elements
6. connect (react-redux), withStyle (Material-ui), withRouter (react-router)
7. On promises we use the .catch() method of the promise, with async/await we can use the try {} catch {} block. In forexample node.js the callback methods has an error parameter which needs to be passed if an error occured
8. setState has 2 parameters, the second one is a callback which is called after the state is updated, so we can get the updated state. This is needed because setState is asyncronous, it is optimized, if more state settings happens then they will be applied together. So if we want to be sure that the state is updated we have to use the callback.
9. 
    1. The component will be a function so we don't need the class keyword anymore
    2. Because it is a function it will be return something, so we don't need the render method
    3. this keyword is not used anymore, so we have to remove all instances (this.state, local variables, event bindings, setState)
    4. Remove the constructor, and initial state has to be set by useState hook
    5. Replace the lifecycle methods with hooks
10. 
    1. using css files with id, className props on components
    2. inline styling with style property
    3. Css in JS
    4. styled components
11. we can use the dangerouslySetInnerHTML instead of the innerHtml property