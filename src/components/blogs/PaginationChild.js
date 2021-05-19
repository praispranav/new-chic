import React from 'react';
import Typography from "@material-ui/core/Typography"
import { useDispatch } from 'react-redux';
import { activeFilter } from "../../actionCreator"

const List = (props) =>{

    const dispatch = useDispatch()

    const handleClick = (event) =>{
        dispatch(activeFilter(event))
    }

    const color = { 
        background: "linear-gradient(to bottom right,red, pink)", 
        color: "white", 
        boxShadow: "2px 2px 4px rgb(200,200,200)" 
    }

    const color2 = { 
        background: "linear-gradient(to bottom right,red, pink)", 
        color: "white", 
        boxShadow: "2px 2px 4px rgb(200,200,200)",
        paddingLeft:"10px",
        paddingRight: "10px", 
    }

    const Style = props.activeFilter == props.filter ? color : null ;
    // const AllStyle = props.activeFilter === 'all' ? color2 : Style ;
    return(
        <li className="mycustomliststyle" style={ Style } 
            onClick={()=> handleClick(props.filter)}>
                
            <Typography>
                {props.filter.toUpperCase()}
            </Typography>
        </li>
    )
}

export default React.memo(List);