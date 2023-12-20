Rules of JSX

- DOM elements lowercased
  <header></header>

- React components uppercased
  <App/>

- Dot notation as tag name always refers to a component
  <somevar.cmp />
  <SomeContext.Provider />

- Computed property notation as tag name is illegal

  const abc = "def";
  ❌
  // <somevar["abc"]>
  // <somevar[abc]>

  ✅
  const Component = somevar[abc];
  <Component />

- Single root
  // <header>Header</header>
  // <footer>Footer</footer>
  <Fragment>
    <header>Header</header>
    <footer>Footer</footer>
  </Fragment>
  <>
    <header>Header</header>
    <footer>Footer</footer>
  </>

- Tags always closed
  ❌ <input>
  ✅ <input/>

- JS expression as prop value
  <App title={} />

  String properties
  <input placeholder="Abc"/>
  <input placeholder='Abc'/>
  <!-- <input placeholder={'Abc'}/> -->

  Boolean properties
  <button disabled={true}>Submit</button>
  <button disabled={false}>Submit</button>
  as true
  <button disabled>Submit</button>

  Spreading an object to props
  <App title="Awesome app" {...otherProps}/>

  Children: single
  <App></App>

  Children: multiple
  <App>
    <header>Header</header>
    <footer>Footer</footer>
  </App>

- Some props of DOM elements are different than HTML attributes

class ==> className
for ==> htmlFor
onclick ==> onClick, onClickCapture
