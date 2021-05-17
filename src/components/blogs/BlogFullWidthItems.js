import React,{useState,useEffect, useContext } from 'react';
import { UserContext } from "../../App"
import BlogFullWidthArray from "./BlogFullWidthArray"
import { Link } from "react-router-dom"

function BlogFullWidthItems(props){
    const { isLoading, state, error, open  } = props
    const context = useContext(UserContext)

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
            return it.name.includes(context.state.activeFilter.toUpperCase())
        }
    }
    ).map((item)=>
        <Link to={`/acupuncture/${item.name}`}> 
            <BlogFullWidthArray key={item._id}
            name={item.name} 
            english={item.english} /> 
        </Link> ) : "Loading...." ;
    
    const FilterActive = context.state.activeFilter === 'all' ? Array : FilteredArray
    return(
        <>
        {/* <MeridianHandler meridian={newList} handleClick={()=> props.handleClick()} open={open} /><br /> */}
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