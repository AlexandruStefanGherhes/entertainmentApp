import { Search } from "../components/search";
import { useContext } from "react"
import SearchContext from "../context/searchContext"
export const Movies = ({data}) =>{
    const {value} = useContext(SearchContext)
    return(
        <div className="w-[100vw] p-4 xl:w-[95vw]">
            <Search keyword='Movies or Tv Shows' data={data}/>
            <h1>Movies</h1>
            {
                value.length > 0 ?
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
                {value.map((item,id)=>{
                    return(
                    <div className="flex flex-col h-[10rem]  max-w-[40rem] sm:h-[14rem] 2xl:h-[25rem]">
                        <div className="basis-3/4 bg-no-repeat bg-cover rounded-lg" style={{backgroundImage:`url(./src/${item.thumbnail.regular.large})`}}>
                        {!item.isBookmarked 
                        ? <div className="basis-1/4 flex">
                            <svg className='bg-darkBlue bg-opacity-40 rounded-[50%] ml-auto sm:mt-2 w-[2rem] h-[2rem] p-0 cursor-pointer fill-transparent' viewBox="0 0 24 24"><path stroke="#FFF" d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"/></svg>
                            </div> 
                        :<div className="basis-1/4 flex">
                        <svg className='bg-darkBlue bg-opacity-40 rounded-[50%] ml-auto sm:mt-2 w-[2rem] h-[2rem] p-0 cursor-pointer fill-white' viewBox="0 0 24 24"><path stroke="#FFF" d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"/></svg>
                    </div>}
                        </div>
                        <div className="flex-col flex basis-1/4 pt-3">
                            <div className="flex">
                                <p className='mr-1 text-sm sm:text-lg'>{item.year}</p>
                                <svg className="fill-[#5A698F] cursor-pointer hover:fill-white w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] transition ease-in-out sm:m-1.5" viewBox="0 0 24 24">
                                    <path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z" />
                                </svg>
                                <p className='mr-1 text-sm sm:text-lg'>{item.category}</p>
                                <p className='text-sm sm:text-lg'>{item.rating}</p>
                            </div>
                            <div className="">
                                <h3 className='text-white sm:text-xl sm:mt-[-5px]'>{item.title}</h3>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
                :
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
                {data.map((item,id)=>{
                    return(
                        item.category == 'Movie'
                        ? <div className="">
                            <div className="flex flex-col h-[10rem]  max-w-[40rem] sm:h-[14rem] 2xl:h-[25rem]">
                                <div className="basis-3/4 bg-no-repeat bg-cover rounded-lg" style={{backgroundImage:`url(./src/${item.thumbnail.regular.large})`}}>
                                {!item.isBookmarked 
                                ? <div className="basis-1/4 flex">
                                    <svg className='bg-darkBlue bg-opacity-40 rounded-[50%] ml-auto sm:mt-2 w-[2rem] h-[2rem] p-0 cursor-pointer fill-transparent' viewBox="0 0 24 24"><path stroke="#FFF" d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"/></svg>
                                    </div> 
                                :<div className="basis-1/4 flex">
                                <svg className='bg-darkBlue bg-opacity-40 rounded-[50%] ml-auto sm:mt-2 w-[2rem] h-[2rem] p-0 cursor-pointer fill-white' viewBox="0 0 24 24"><path stroke="#FFF" d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"/></svg>
                            </div>}
                                </div>
                                <div className="flex-col flex basis-1/4 pt-3">
                                    <div className="flex">
                                        <p className='mr-1 text-sm sm:text-lg'>{item.year}</p>
                                        <svg className="fill-[#5A698F] cursor-pointer hover:fill-white w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] transition ease-in-out sm:m-1.5" viewBox="0 0 24 24">
                                            <path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z" />
                                        </svg>
                                        <p className='mr-1 text-sm sm:text-lg'>{item.category}</p>
                                        <p className='text-sm sm:text-lg'>{item.rating}</p>
                                    </div>
                                    <div className="">
                                        <h3 className='text-white sm:text-xl sm:mt-[-5px]'>{item.title}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <></>
                    )
                })}
            </div>
            }
            

            
        </div>
    )

    // return(
    //     <div className="w-[100vw] p-4 xl:w-[95vw]">
    //     <Search keyword='Movies' data={data}/>
    //     <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
    //         {data.map((item,id)=>{
    //                     return(
    //                         item.category == 'Movie' 
    //                         ? <div className="">
    //                             <div className="flex flex-col h-[10rem]  max-w-[40rem] sm:h-[14rem] 2xl:h-[25rem]">
    //                                 <div className="basis-3/4 bg-no-repeat bg-cover rounded-lg" style={{backgroundImage:`url(./src/${item.thumbnail.regular.large})`}}>
    //                                 {!item.isBookmarked 
    //                                 ? <div className="basis-1/4 flex">
    //                                     <svg className='bg-darkBlue bg-opacity-40 rounded-[50%] ml-auto sm:mt-2 w-[2rem] h-[2rem] p-0 cursor-pointer fill-transparent' viewBox="0 0 24 24"><path stroke="#FFF" d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"/></svg>
    //                                     </div> 
    //                                 :<div className="basis-1/4 flex">
    //                                 <svg className='bg-darkBlue bg-opacity-40 rounded-[50%] ml-auto sm:mt-2 w-[2rem] h-[2rem] p-0 cursor-pointer fill-white' viewBox="0 0 24 24"><path stroke="#FFF" d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"/></svg>
    //                             </div>}
    //                                 </div>
    //                                 <div className="flex-col flex basis-1/4 pt-3">
    //                                     <div className="flex">
    //                                         <p className='mr-1 text-sm sm:text-lg'>{item.year}</p>
    //                                         <svg className="fill-[#5A698F] cursor-pointer hover:fill-white w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] transition ease-in-out sm:m-1.5" viewBox="0 0 24 24">
    //                                             <path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z" />
    //                                         </svg>
    //                                         <p className='mr-1 text-sm sm:text-lg'>{item.category}</p>
    //                                         <p className='text-sm sm:text-lg'>{item.rating}</p>
    //                                     </div>
    //                                     <div className="">
    //                                         <h3 className='text-white sm:text-xl sm:mt-[-5px]'>{item.title}</h3>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         :
    //                         <></>
    //                     )
    //                 })}
    //     </div>
    //     </div>
    // )
}