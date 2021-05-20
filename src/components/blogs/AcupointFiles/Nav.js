import React,{ useState } from "react"

import { useSelector , useDispatch } from "react-redux"
// import { selectAcuPoint } from "../../"
import { activeNav, selectAcuPoint } from "../../../actionCreator"

import Typography from "@material-ui/core/Typography"
import { motion } from "framer-motion"

const CustomNav = (props) =>{

    const Width = props.name.length > 10 ? 
                {width: "13em"} : 
                {width:"8em"}
    
    return(
        <motion.div 
            onClick={()=> props.handleClick(props.name)} 
            className="mycustomnav"
            style={Width}>

                <motion.div
                    className="myround"
                    whileHover={{ scale: 1.05, border: "2px solid red" }}
                    whileTap={{
                      scale: 0.8,
                      rotate: -90,
                      borderRadius: "100%"
                    }}>

                    <Typography variant="body1" className="mycustomnavactive" 
                        style={ 
                            props.activenav === props.name ? 
                            { border:"1px solid red" } : null }>
                            {props.name}
                    </Typography>

                </motion.div>

        </motion.div>
    )
}


const Nav = (props) =>{
    
    const Thisstate = useSelector(selectAcuPoint) 
    const dispatch = useDispatch()
    const navigation = Thisstate.nav

    return(
        <div style={{
                display:"flex", 
                alignItems:"center", 
                justifyContent:"space-between"
            }}>
            <div 
                style={{
                    display:"inline-flex",
                    width:"90vw",
                    flexFlow:"row wrap",
                    textAlign:"center"
                }} 
                className="custom-scroll">

                    <CustomNav 
                        name="Profile" 
                        activenav={navigation} 
                        handleClick={
                            (event)=> dispatch(activeNav(event))
                        } />

                    <CustomNav 
                        name="Topic and Comments" 
                        activenav={navigation} 
                        handleClick={
                            (event)=> dispatch(activeNav(event))
                        } />

                    <CustomNav 
                        name="Function" 
                        activenav={navigation} 
                        handleClick={ 
                            (event)=> dispatch(activeNav(event))
                            } />

                    <CustomNav 
                        name="Indication" 
                        activenav={navigation} 
                        handleClick={
                            (event)=> dispatch(activeNav(event))
                            } />

                    <CustomNav 
                        name="Reference" 
                        activenav={navigation} 
                        handleClick={
                            (event)=> dispatch(activeNav(event))
                            } />

                    <CustomNav 
                        name="Notes" 
                        activenav={navigation} 
                        handleClick={
                            (event)=> dispatch(activeNav(event))
                            } />
            </div>
        </div>
    )
}


export default React.memo(Nav);