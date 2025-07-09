function handleClick(event){
    console.log("Hello!");
    console.log(event);
}

function handleMouseOver(){
    console.log("Bye!");
}

function handleDblClick(){
    console.log("you Double click!");
}
export default function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onClick={handleMouseOver}>
                This parah is forevent demo 
            </p>

            <button onDoubleClick={handleDblClick}>double click me!</button>
        </div>
    );
}