import React,{useContext} from 'react'
import CheckIcon from "@material-ui/icons/Check"
import Typography from "@material-ui/core/Typography"
import { UserContext } from '../../App'

export default function Acupointprofile(props) {
    const item = props.item
    return (
        <>
        <ul>
            <li className="myliststyle"><CheckIcon className="mycustomliststyle" />English : {item.english}</li>
            <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Korean : {item.korean}</li>
            <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Japanese : {item.japanese}</li>
            <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Vietnamese : {item.vietnamese}</li>
            <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Physical Location : {item.physicalLocation}</li>
            <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Five Elements : {item.fiveElement}</li>
            <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Horary Cycle : {item.horarycycle}</li>
            <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Functionality : {item.functionality}</li>
            <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Name : {item.name}</li>
            <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Pinyin : {item.pinyin}</li>
            <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Meridian : {item.meridian}</li><br/>
            <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Element : {item.element}</li>
            <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Indication : {item.indication}</li>
            <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Caution : {item.caution} </li>
            <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Notes : {item.notes}</li>
            <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Video Link : {item.videoLink}</li>
        </ul>   
        </>
    )
}
