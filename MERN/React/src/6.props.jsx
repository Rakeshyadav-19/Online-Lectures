import Card from "./components/Card";

const App = () => {


    const user = "Rax Lord"

    const users = [
        {
            "uname": "Alice Johnson",
            "usname": "alicej",
            "City": "New York",
            "Age": 29,
            "Profession": "Software Engineer",
            "ProfilePhoto": "https://example.com/photos/alice.jpg"
        },
        {
            "uname": "Bob Smith",
            "usname": "bobsmith",
            "City": "Los Angeles",
            "Age": 34,
            "Profession": "Data Scientist",
            "ProfilePhoto": "https://example.com/photos/bob.jpg"
        },
        {
            "uname": "Carol Lee",
            "usname": "carol_lee",
            "City": "Chicago",
            "Age": 26,
            "Profession": "UX Designer",
            "ProfilePhoto": "https://example.com/photos/carol.jpg"
        },
        {
            "uname": "David Brown",
            "usname": "david_b",
            "City": "Seattle",
            "Age": 41,
            "Profession": "Cybersecurity Analyst",
            "ProfilePhoto": "https://example.com/photos/david.jpg"
        },
        {
            "uname": "Eva Martin",
            "usname": "eva_martin",
            "City": "San Francisco",
            "Age": 31,
            "Profession": "AI Researcher",
            "ProfilePhoto": "https://example.com/photos/eva.jpg"
        }
    ]

    return (
        <>
            {/* We pass vlaue as property hence callled props */}
            {/* <Card uname={user} /> */}
            {/* <Card uname="Rax" usname="Lord" City="Karad" Age="20" /> */}
            <div className="p-10">
                {users.map((elem,idx)=> {
                    return <Card key={idx} uname={elem.uname} usname={elem.usname} City={elem.City} Age={elem.Age} img={elem.ProfilePhoto} profession={elem.Profession}/>
                })}
            </div>
        </>
    );
}

export default App;