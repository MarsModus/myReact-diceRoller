import React, {useState} from "react";

function CreateFeature(props) {
    const [feature, setFeature] = useState({
        title:"",
        content:""
    });

    function handleChange(event){
        const {name, value} = event.target;

        setFeature(prevFeature => {
            return {
                ...prevFeature,
                [name]: value
            };
        });
    }

    function submitFeature(event) {
        props.onAdd(feature);
        setFeature({
            title:"",
            content:""
        });
        event.preventDefault();
    }

    return (
        <div>
            <h3>Features&Traits</h3>
            <form>
                <input
                name="title"
                onChange={handleChange}
                value={feature.title}
                placeholder="Title"
                />
                <textarea
                name="content"
                onChange={handleChange}
                value={feature.content}
                placeholder="Description"
                rows="3"
                />
                <button onClick={submitFeature}>Add</button>
            </form>
            </div>
    )
}

export default CreateFeature;