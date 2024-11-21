import { useState } from "react"

const App = () => {

    const submitHandeler = (e)=>{
        // We use prevent default behaviour of form,
        // Also since the page does not reload now, the input feild remains as it is
        e.preventDefault()
        console.log(uname)
        setuname('')
    }

    const [uname, setuname] = useState('')

    return ( 
        <div>
            {/* The Form reloads on submt so we handel it using this method */}
            <form onSubmit={(e)=>{
                submitHandeler(e)
            }}>
                
                <input 
                onChange={(e)=>{
                    // console.log(e.target.value)
                    setuname(e.target.value)
                }}
                value={uname}
                className="text-3xl p-3 rounded-2xl my-3 mx-2" type="text"  
                placeholder="Name"
                />

                <br></br>

                <button 
                className="px-4 py-3 mx-4 my-3 bg-red-500 text-2xl font-semibold rounded-2xl">
                    Submit
                </button>
            </form>
        </div>
    );
}
 
export default App;
