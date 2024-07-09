import CardImage from "../comp/media/1691224446516.jpeg"

function Card(props){

    console.log(props)

   const {firstName,LastName,image} = props.dataValue
   
    return(
        <>
            <div className="main">
                <img src={image} alt="" className="image"/>
                <h1 className="heading">{firstName} {LastName}</h1>
                <p className="p1">Web developer</p>
                <button className="btn">More Info</button>
             </div>
        </>
    )
}

export default Card;