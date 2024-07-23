
function Tailwind() {
    return ( 
        <>
            <h1 className="text-center text-green-600 italic text-8xl font-bold hover:text-red-600">Tailwind css</h1>
            <ul className="list-decimal">
                <li className="bg-green-700">Html</li>
                <li>Css</li>
                <li>Js</li>

                <button className="bg-red-300 border-solid border-4 p-1 animate-ping">Login</button>

                <div className="w-full h-full  bg-[url('https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg?auto=compress&cs=tinysrgb&w=800')]">
                    text
                </div>

                <div className="bg-bgimg">
                    text
                </div>
                
            </ul>
        </>
     );
}

export default Tailwind;