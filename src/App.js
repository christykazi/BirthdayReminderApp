import React,{useState} from 'react';
import List from './List';
import date from './date';

 
 const App = () => {

  const [people,setPeople] =useState(date);
   return (
     
     <main>
      <section className="container">
        <h3> {people.length} birthday today</h3>
        <List people={people}/>
        <button onClick={() => setPeople([])}>Clear All</button>
        
      </section>
     </main>
   )
 }
 
 export default App