import React from 'react';

class Text extends React.Component {
  render() {
    return (
       <div className="cites">
        <div className="first-city"> 
         <h1 className="cities-h1">Cordoba</h1>
          <img class= "img-city" src="https://docrwwop59xq2.cloudfront.net/uploads/2017/01/cordoba-argentina-2.jpg"></img>
          <p>Cordoba is a city in central Argentina, in the foothills of the Sierras Chicas on the Suquía River, about 700 km (435 mi) northwest of the Buenos Aires. It is the capital of Córdoba Province and the second most populous city in Argentina after Buenos Aires, with about 1.3 million inhabitants according to the 2010 census. It was founded on 6 July 1573 by Jerónimo Luis de Cabrera, who named it after Córdoba, Spain. It was one of the first Spanish colonial capitals of the region that is now Argentina (the oldest city is Santiago del Estero, founded in 1553). The National University of Córdoba is the oldest university of the country and the seventh to be inaugurated in Spanish America. It was founded in 1613 by the Jesuit Order. Because of this, Córdoba earned the nickname La Docta ("the learned").<a href="wikipedia.com">More Information</a></p>
       </div> 
      </div> 
    );
  }
}

export default Text;