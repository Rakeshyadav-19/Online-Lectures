// We will bhw using axios for managing api (nom install axios)

import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {

    const [data, setData] = useState([])

    const getdata = async () => {
        const response = await axios.get('https://picsum.photos/v2/list')
        // console.log(response)
        setData(response.data)
        console.log(data)
    }

    // TO do a preocess in side stack
    // Without the help of button it will load side by side and the main react will load as it is
    useEffect(() => {
        getdata()
    }, [])

    return (
        <div className="p-7">
            {/* <button onClick={getdata} className="bg-teal-400 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90 ">Get Image</button> */}

            <div className="p-5 mt-7 bg-teal-200">
                {
                    data.map((elem, idx) => {
                        return <div key={idx} className="bg-gray-100 text-black flex items-center w-full px-6 py-6 rounded mb-3">
                            <img className="h-40" src={elem.download_url} alt="" />

                            <h1 className="px-12">{elem.author}</h1>




                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default App;