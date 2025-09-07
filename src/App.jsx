// props =  read-only properties that are shared between components.
//          A parent component can send data to a child component.
//          <Component key=value />

import Student from './Student.jsx'

function App() {
  return(
      <>
           <Student name="Devliwa" age={32} isStudent={true}/>
           <Student name="Alice" age={40}/>
           <Student name="Bob" age={50}/>
           <Student name="Mike" age={23} isStudent={true}/>
           <Student />

      </>
  );
}

export default App