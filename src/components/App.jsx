import React, {useState} from "react";
import Header from "./Header";
import CharacterAttributes from "./CharacterAttributes";
import DiceArea from "./DiceArea";
import FeatureInput from "./FeatureInput";
import CreateFeature from "./CreateFeature";
import Footer from "./Footer";
 
function App(){
  //setting state for features and traits
    const [features, setFeatures] = useState([]);

    function addFeature(newFeature) {
      setFeatures(prevFeature => {
        return [...prevFeature, newFeature];
      });
    }
  
    function deleteFeature(id) {
      setFeatures(prevFeatures => {
        return prevFeatures.filter((featureItem, index) => {
          return index !== id;
        });
      });
    }

    return (
        <>
        <Header />
        <React.StrictMode>
        <main>
            <CharacterAttributes />
            <p>Your bonus is {prof} </p>
            <section className="features">
            <CreateFeature onAdd={addFeature} />
            {features.map((featureItem, index) => {
                return(
                    <FeatureInput 
                    key={index}
                    id={index}
                    title={featureItem.title}
                    content={featureItem.content}
                    onDelete={deleteFeature}
                    />
                )
            })}
            </section>
        </main>
        <DiceArea />
        </React.StrictMode>
        <Footer />
    </>
    )
}
export default App;