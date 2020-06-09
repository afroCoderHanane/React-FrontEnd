import React from 'react';
import ContactCard from './ContactCard'
function App() {
  return (
    <div className="contacts">
      <ContactCard
         name="Mr ABC"
         imgUrl="http://placekitten.com/300/200"
         phone="(212) 555-1234"
         email="mr.whiskaz@catnap.meow"
      />
      <ContactCard
         name="Mr XYZ"
         imgUrl="http://placekitten.com/400/200"
         phone="(212) 555-1234"
         email="mr.whiskaz@catnap.meow"
      />
      <ContactCard
         name="Mr RST"
         imgUrl="http://placekitten.com/400/300"
         phone="(212) 555-1234"
         email="mr.whiskaz@catnap.meow"
      />
      <ContactCard
         name="Mr PMO"
         imgUrl="http://placekitten.com/200/100"
         phone="(212) 555-1234"
         email="mr.whiskaz@catnap.meow"
      />
    </div>

  /*<div className="contacts">
    <div className="contact-card">
        <img src="http://placekitten.com/300/200" alt=""/>
        <h3>Mr. Whiskerson</h3>
        <p>Phone: (212) 555-1234</p>
        <p>Email: mr.whiskaz@catnap.meow</p>
    </div>
    
    <div className="contact-card" >
        <img src="http://placekitten.com/400/200" alt=""/>
        <h3>Fluffykins</h3>
        <p>Phone: (212) 555-2345</p>
        <p>Email: fluff@me.com</p>
    </div>
    
    <div className="contact-card">
        <img src="http://placekitten.com/400/300" alt=""/>
        <h3>Destroyer</h3>
        <p>Phone: (212) 555-3456</p>
        <p>Email: ofworlds@yahoo.com</p>
    </div>
    
    <div className="contact-card">
        <img src="http://placekitten.com/200/100" alt=""/>
        <h3>Felix</h3>
        <p>Phone: (212) 555-4567</p>
        <p>Email: thecat@hotmail.com</p>
    </div>
</div>*/
  );
}

export default App;
