import React,{useContext,useState} from 'react';
import {Link} from "react-router-dom";
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'
import Typography from "@material-ui/core/Typography"
import { UserContext } from "../../App"

function Pagination() {
    const context = useContext(UserContext)
    const activeFilter = context.state.activeFilter
    
    const handleClick = (event) =>{
        context.dispatch({ type: 'filter', value: event })
    }
    
    const color = { background: "linear-gradient(to bottom right,red, pink)", color: "white", boxShadow: "2px 2px 4px rgb(200,200,200)" }
    
    return (
        <>
            <div className="pagination-wrapper mt-4 text-center">
                <ul className="pagination-list mycustomlist">
                    <li style={activeFilter == 'all' ? color : null} onClick={()=> handleClick('all')}>All</li>
                    <li style={activeFilter == 'a' ? color : null} onClick={()=> handleClick('a')}><Typography>A</Typography></li>
                    <li style={activeFilter == 'b' ? color : null} onClick={()=> handleClick('b')}><Typography>B</Typography></li>
                    <li style={activeFilter == 'c' ? color : null} onClick={()=> handleClick('c')}><Typography>C</Typography></li>
                    <li style={activeFilter == 'd' ? color : null} onClick={()=> handleClick('d')}><Typography>D</Typography></li>
                    <li style={activeFilter == 'e' ? color : null} onClick={()=> handleClick('e')}><Typography>E</Typography></li>
                    <li style={activeFilter == 'f' ? color : null} onClick={()=> handleClick('f')}><Typography>F</Typography></li>
                    <li style={activeFilter == 'g' ? color : null} onClick={()=> handleClick('g')}><Typography>G</Typography></li>
                    <li style={activeFilter == 'h' ? color : null} onClick={()=> handleClick('h')}><Typography>H</Typography></li>
                    <li style={activeFilter == 'i' ? color : null} onClick={()=> handleClick('i')}><Typography>I</Typography></li>
                    <li style={activeFilter == 'j' ? color : null} onClick={()=> handleClick('j')}><Typography>J</Typography></li>
                    <li style={activeFilter == 'k' ? color : null} onClick={()=> handleClick('k')}><Typography>K</Typography></li>
                    <li style={activeFilter == 'l' ? color : null} onClick={()=> handleClick('l')}><Typography>L</Typography></li>
                    <li style={activeFilter == 'm' ? color : null} onClick={()=> handleClick('m')}><Typography>M</Typography></li>
                    <li style={activeFilter == 'n' ? color : null} onClick={()=> handleClick('n')}><Typography>N</Typography></li>
                    <li style={activeFilter == 'o' ? color : null} onClick={()=> handleClick('o')}><Typography>O</Typography></li>
                    <li style={activeFilter == 'p' ? color : null} onClick={()=> handleClick('p')}><Typography>P</Typography></li>
                    <li style={activeFilter == 'q' ? color : null} onClick={()=> handleClick('q')}><Typography>Q</Typography></li>
                    <li style={activeFilter == 'r' ? color : null} onClick={()=> handleClick('r')}><Typography>R</Typography></li>
                    <li style={activeFilter == 's' ? color : null} onClick={()=> handleClick('s')}><Typography>S</Typography></li>
                    <li style={activeFilter == 't' ? color : null} onClick={()=> handleClick('t')}><Typography>T</Typography></li>
                    <li style={activeFilter == 'u' ? color : null} onClick={()=> handleClick('u')}><Typography>U</Typography></li>
                    <li style={activeFilter == 'v' ? color : null} onClick={()=> handleClick('v')}><Typography>V</Typography></li>
                    <li style={activeFilter == 'w' ? color : null} onClick={()=> handleClick('w')}><Typography>W</Typography></li>
                    <li style={activeFilter == 'x' ? color : null} onClick={()=> handleClick('x')}><Typography>X</Typography></li>
                    <li style={activeFilter == 'y' ? color : null} onClick={()=> handleClick('y')}><Typography>Y</Typography></li>
                    <li style={activeFilter == 'z' ? color : null} onClick={()=> handleClick('z')}><Typography>Z</Typography></li>
                    {/* <li className="pag__active"><Link to="#">2</Link></li> */}
                    
                    {/* <li><Link to="#" className="pag__next"><i><FiChevronsRight /></i></Link></li> */}
                </ul>
            </div>
        </>
    );
}

export default React.memo(Pagination);