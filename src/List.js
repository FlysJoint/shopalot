import Ingredients from "./Ingredients";

function List(props) {

    // console.log(props.data);

    return (
        <div>
            <Ingredients meals={props.data}/>
        </div>
    )
}

export default List;