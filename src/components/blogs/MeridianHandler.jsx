import React,{ useState, useContext} from 'react'
import Typography from "@material-ui/core/Typography"
import {UserContext} from "../../App"
import CloseIcon from "@material-ui/icons/Close"
import { motion } from "framer-motion"

const MeridianList = (props) =>{
    return(
        <motion.div
            whileHover={{ background: "rgb(240,240,240)", transition: {duration: 0.5}}}
             className="mysideFilter" style={{background:"white", zIndex:"10000000000"}}>
            <motion.div 
                whileHover={{
                    color:"red",
                    transition: {duration:0.5}
                }}
                onClick={()=> props.handleClick(props.meridian)}
                style={{ zIndex:"10000000000"}}>
                <Typography 
                    variant="h6" 
                    style={{fontSize:"15px"}} 
                    onClick={()=> props.handleClick(props.meridian)}>
                        {props.meridian}
                </Typography>
            </motion.div>

        </motion.div>
    )
}



function MeridianHandler(props) {
    const context = useContext(UserContext)
    const handleClick =(event)=>{
        context.dispatch({type:"filter", value:event})
        context.dispatch({type:"isopen", value: false})
    }

    const Array = props.meridian.map((item)=> <MeridianList key={item} handleClick={(event)=> 
        handleClick(event)} meridian={item} />)

    
    return (
   <>
    
    <div className="mycustomscroll" style={ props.open ? {
            display:"block",
            width:"80vw",
            position:"fixed",
            top:"20%",
            maxWidth:"600px",
            right:"10%",
            background:"white", 
            overflowY:"auto", 
            height:"50vh", 
            boxShadow:"0px 0px 30px rgb(220,220,230)"}

        :{display:"none"}}

        onMouseLeave={()=> props.handleClick(false)}>
            
        <div style={{textAlign:"right", paddingRight:"1em", paddingTop:"10px"}} 
            onClick={()=> props.handleClick(false)}>
            
            <CloseIcon fontSize="large" />
        </div>
        {Array}
    </div>
   </>
    )
}
export default  React.memo(MeridianHandler)
