function handleFormSubmit(event){
    event.preventDefault();
    console.log("Form submitted!");
};

export default function Form() {
    return ( 
        <form>
            <input placeholder="write something"/>
            <button onClick={handleFormSubmit}>Submit</button>
          </form>
    );
}