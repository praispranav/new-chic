import React,{ useState, useContext} from 'react'
import Typography from "@material-ui/core/Typography"
import {UserContext} from "../../App"
import CloseIcon from "@material-ui/icons/Close"

const MeridianList = (props) =>{
    return(
        <div className="mysideFilter">
            <div onClick={()=> props.handleClick(props.meridian)}>
                <Typography variant="h6" style={{fontSize:"15px"}} onClick={()=> props.handleClick(props.meridian)}>{props.meridian}</Typography></div>

        </div>
    )
}

const Red = () =>{
    const context = useContext(UserContext)
    return(
        <div style={{}} className="sidefilter">
            <Typography variant="body1"><small>{context.state.activeFilter.length > 3? 
                context.state.activeFilter : "Hand Yin Lung Meridian (LU) (手太阴肺经穴, 手太陰肺經)" }</small></Typography>
        </div>
    )
}

function MeridianHandler(props) {
    const context = useContext(UserContext)
    const [ isOpen , setisOpen] = useState(false)
    const handleClick =(event)=>{
        context.dispatch({type:"filter", value:event})
        setisOpen(false)
    }

    const Array = props.meridian.map((item)=> <MeridianList key={item} handleClick={(event)=> 
        handleClick(event)} meridian={item} />)
    
    return (
   <>
    <div onMouseEnter={()=> setisOpen(true)} style={ isOpen ? {display:"none"}: {display:"block"}} onClick={()=> setisOpen(true)}>
        <Red />
    </div>
    <div style={ isOpen ? {
            display:"block", 
            background:"white", 
            overflowY:"auto", 
            height:"50vh", 
            boxShadow:"0px 0px 10px rgb(230,230,230)"}

        :{display:"none"}}
        onMouseLeave={()=> setisOpen(false)}>
            
        <div style={{textAlign:"right", paddingRight:"1em", paddingTop:"10px"}} onClick={()=> setisOpen(false)}>
            <CloseIcon fontSize="large" />
        </div>
        {Array}
    </div>
   </>
    )
}
export default  React.memo(MeridianHandler)
