import Ingredients from "./Ingredients";

// import './List.css';

function List(props) {

    // console.log(props.data);

    return (
        <div>
            <Ingredients meals={props.data}/>
        </div>
    )
}

export default List;