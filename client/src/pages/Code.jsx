import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../provider/AuthContext";
import { useLocation } from 'react-router-dom';
import axios from "axios";

const Code = () => {
  const {setCode,code,setGetShareId,getShareId } = useContext(AuthProvider);
  const location = useLocation()
  const sendId = location.pathname.split('/')[2]
  const [backCode,setBackCode] = useState([])
  console.log("back code form database",backCode);

  const dataFromLOcal = JSON.parse(localStorage.getItem('sendId'))
  console.log(dataFromLOcal);

  const handelCreate = async (e) => {
    e.preventDefault()
    const res = await axios.post(`http://localhost:3000/code`,{code: code,sendId})
    if(res.data.result.insertedId){
      setGetShareId(sendId)
      localStorage.setItem('sendId',JSON.stringify(sendId))
    }
}


  useEffect(()=>{
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:3000/code/${dataFromLOcal}`)
      console.log(res.data);
      setBackCode(res.data)
    }

    {dataFromLOcal && fetchData()}
  },[dataFromLOcal, getShareId])

  return (
    <div className="p-5 space-y-4">
      {/* nav and share pallet */}
      <div className="flex justify-between">
        <div className="">
          <a className="p-2 bg-gray-500/85" href="/">
            Home
          </a>
        </div>
        <div className="">
          <input
          defaultValue={getShareId}
            className="block p-2 border-2"
            type="text"
            name="shareLink"
            id="shareLink"
          />
          {/* before button have here */}
        </div>
      </div>

      <div>
        <form onSubmit={handelCreate}>
          <div className="flex justify-end my-2">
            <button type="submit" className="block p-2 bg-purple-400/75">
              Share
            </button>
          </div>
          <textarea
            className="resize-none w-full h-80 border-2 border-green-400"
            name="code"
            id="code"
            placeholder="code type here"
            onChange={(e) => setCode(e.target.value)}
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default Code;
