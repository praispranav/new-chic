
import React,{ useState,useEffect, useContext } from 'react';
import { UserContext } from "../../App"
import axios from "axios"
import BlogFullWidthArray from "./BlogFullWidthArray"
import BlogFullWidthList from "./BlogFullWidthList"
import MeridianHandler from "./MeridianHandler"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"


function BlogFullWidthItems(){
    const [ isLoading, setIsLoading ] = useState(true)
    const [ state, setstate ] = useState([])
    const [ isModelOpen , setIsModelOpen ] = useState(false)
    const [ modelData , setModelData ] = useState([])
    const url = 'http://itransportindex.com:4500/api/acupunctures'
    const [ error , seterror ] = useState(false)
    const context = useContext(UserContext)
    const [ handleErr , sethandleErr ] = useState(1)

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal
        
            if(handleErr === 1){
                axios.get(url,{signal: signal})
                .then((res)=>{
                    setstate(res.data)
                    setIsLoading(false)
                    sethandleErr(0)
                    console.log("hello")
    
                } )
                .catch((err)=> seterror(true))
            }
        
        return()=>{
            controller.abort()
        }
    },[])

    // const handleClick = (event)=> {
    //     setIsModelOpen(true)
    //     setModelData(event)
    // }
    const Array = state != null ?  state.map((item)=> <Link to={`/acupuncture/${item.name}`}>
            <BlogFullWidthArray 
                name={item.name} 
                english={item.english}
         /> </Link>) : "Loading...." ;

    const FilteredArray = state != null ?  state.filter((it)=>{
        

        if(context.state.activeFilter.length > 5){
            return it.meridian === context.state.activeFilter
        }
        else{
            return it.name.includes(context.state.activeFilter)
        }
    }


    ).map((item)=>
        <Link to={`/acupuncture/${item.name}`}> 

            <BlogFullWidthArray key={item._id}
            name={item.name} 
            english={item.english} /> 
        </Link> ) : "Loading...." ;
    
    const FilterActive = context.state.activeFilter === 'all' ? Array : FilteredArray
    //test

    var newList = []
    state.forEach((value)=>{
        if(newList.indexOf(value.meridian) == -1){
            newList.push(value.meridian)
        }
    })

    return(
        <>
        <div style={{position:"fixed", right:'10px', top:"20%"}}>
            
            <MeridianHandler meridian={newList} />
        </div>
        
        <div style={ isLoading ? {display:"block", textAlign:"center"} : {display:"none"}}>
                <div className="loading"></div>
            <h1>Loading .....</h1>
        </div>
        
        <div style={error ? {display:"block", textAlign:"center"}: {display:"none"}}>
            Sorry An error Occured While Loading Data....Please Refresh
        </div>
        
        <div className="array-parent" >
            {FilterActive}
        </div>
        </>
    )
}

export default React.memo(BlogFullWidthItems);