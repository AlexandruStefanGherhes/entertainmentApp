import {useState,useEffect} from 'react'
import { getMovies } from "../api"

export const Trending = () =>{
    const [info,setInfo] = useState([])
    // console.log(info)

    useEffect(()=>{
        getMovies().then(data=>setInfo(data))
    },[])

    return(
        <div className="">
            <h1 className="text-xl mb-5 mt-8">Trending</h1>
            <div className="flex overflow-x-auto space-x-8">
                {info.map((item,id)=>{
                    return(
                        item.isTrending 
                        ? <div key={id} className={`w-[220px] h-[8rem] sm:w-[435px] sm:h-[16rem] rounded-xl p-4 bg-no-repeat bg-contain flex-shrink-0`} style={{backgroundImage:`url(./src/${item.thumbnail.trending.small})`}}>
                            <div className="flex h-[100%] leading-4 text-gray-300">
                                <div className="basis-3/4 self-end">
                                    <div className="flex">
                                        <p className='mr-1 text-sm sm:text-lg'>{item.year}</p>
                                        <svg className="fill-[#5A698F] cursor-pointer hover:fill-white w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] transition ease-in-out sm:m-1.5" viewBox="0 0 24 24">
                                            <path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z" />
                                        </svg>
                                        <p className='mr-1 text-sm sm:text-lg'>{item.category}</p>
                                        <p className='text-sm sm:text-lg'>{item.rating}</p>
                                    </div> 
                                    <h3 className='text-white sm:text-xl sm:mt-[-5px]'>{item.title}</h3>
                                </div>
                                {!item.isBookmarked 
                                ? <div key={id} className="basis-1/4 flex">
                                    <svg className='bg-darkBlue bg-opacity-40 rounded-[50%] ml-auto sm:mt-2 w-[2rem] h-[2rem] p-0 cursor-pointer fill-transparent' viewBox="0 0 24 24"><path stroke="#FFF" d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"/></svg>
                                    </div> 
                                :<div className="basis-1/4 flex">
                                <svg className='bg-darkBlue bg-opacity-40 rounded-[50%] ml-auto sm:mt-2 w-[2rem] h-[2rem] p-0 cursor-pointer fill-white' viewBox="0 0 24 24"><path stroke="#FFF" d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"/></svg>
                            </div>}
                                
                            </div>
                        </div> 
                        : <></>
                    )
                })}
            </div>
        </div>
    )
}