import{useState} from 'react';
function Assign(){
    
    const [count,setCount]=useState(0)
    //const handleclick()=>{
        
        return(
            <div className="min-w-screen min-h-screen bg-[#f1c4b7] flex justify-center ">
            <div className="w-[350px] text-[#fffffff] p-10 ">
                <div className="bg-[#df735b] p-4 rounded-md  ">

            <button className="bg-[#c75f9a]  text-white  hover:bg-neutral-400 px-4 py-2 rounded-md font-medium flex justify-center items-center w-full gap-3 mb-3" onClick={()=>setCount(count+1)}>Increase </button>
              <button className="bg-[#c75f9a]  text-white hover:bg-neutral-400 px-4 py-2 rounded-md font-medium flex justify-center items-center w-full gap-3 mb-3" onClick={()=>setCount(count-1)}>Decrease</button>
              <p className="text-white font-medium flex justify-center">{count}</p>
            </div></div>
            </div>
        )
    }
    
export default Assign