import React from "react"
import Navbar from './Navbar'
import Body from './Body'
import data from './data'

function App() {
  const cardElement = data.map((item) => {
    return (
      <Body
        key={item.id}
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
      />
    );
  });
    return (
        <>
            <Navbar />
            {cardElement}       
        </>
    )
}

export default App;
