import React, { useRef } from "react"
import { useDispatch } from "react-redux"
import Typography from "@material-ui/core/Typography"
import { activeFilter } from "../../../actionCreator"


const MeridianForm = (props) =>{

    const meridian = useRef()
    const dispatch = useDispatch()

    const handleSubmit = (event) =>{
        event.preventDefault();
        dispatch(activeFilter(meridian.current.value))
    }

    const MeridianList = props.newList.map((item)=>{
        return(
            <option 
                key={item}
                id={item} 
                value={item}>{item}
            </option>
        )
    })

    return(
        <form onSubmit={(e)=> handleSubmit(e)}>
            <Typography variant="h5">Meridians : </Typography><br />
            
            <select name="cars" id="cars" ref={meridian}>
                <option id="---Meridians---">----Meridian------</option>
                {MeridianList}
            </select>

            <br /><br />

            <div 
                style={{textAlign:"right"}}>
                <button 
                    className="theme-btn border-0" 
                    type="submit" 
                    value="submit"
                    >
                    <i className="la la-paper-plane"></i> 
                        Submit
                </button>
            </div>

        </form>
    )
}

export default MeridianForm;