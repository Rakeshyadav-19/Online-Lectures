const Card = (props) => {
    // console.log(props)
    return (
        <div className="bg-white text-black inline-block p-6 text-center rounded mr-5 mb-5">
            {/* The user name is {props.uname} */}
            <img className="h-32 w-32 rounded-full mb-3 ml-12" src={props.img} alt="" />
            <h1 className="text-2xl font-semibold">{props.uname}</h1>
            <h1 className="font-semibold mb-4">{props.usname}</h1>
            <h3 className="text-blue-400"> {props.profession}</h3>
            <h2 className="text-1xl">{props.City}, {props.Age}</h2>
            <button className="bg-emerald-600 rounded px-4 py-2 text-white font-medium mt-5">Add Friend</button>

        </div>
    );
}

export default Card;