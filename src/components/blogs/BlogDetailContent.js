import React,{useState, useContext} from 'react';
import ListingDetailsComments from "../contact/ListingDetailsComments";
import BlogCommentFields from "./BlogCommentFields";
import {Link} from "react-router-dom";
import BlogTags from "./BlogTags";
import BlogShare from "./BlogShare";
import sectiondata from "../../store/store";
import Typography from "@material-ui/core/Typography";
import {motion } from "framer-motion"

import QRCode from "react-qr-code"
import CheckIcon from "@material-ui/icons/Check"
import withHOC from "./withHOC"
import { UserContext } from "../../App"
import NavigateNext from '@material-ui/icons/NavigateNext';

const CustomNav = (props) =>{
    return(
        <motion.div onClick={()=> props.handleClick(props.name)} className="mycustomnav">
                <motion.div
                    className="myround"
                    whileHover={{ scale: 1.05, border: "2px solid red" }}
                    whileTap={{
                      scale: 0.8,
                      rotate: -90,
                      borderRadius: "100%"
                    }}>
                    <Typography variant="body1" className="mycustomnavactive" 
                        style={ props.activenav == props.name ? {border:"1px solid red"}: null }
                    >{props.name}</Typography>
                </motion.div>
        </motion.div>
    )
}

function BlogDetailContent(props) {
    const [activeNav , setactiveNav ] = useState("Profile")
    const { isLoading, state, error, name } = props
    const context = useContext(UserContext)

    const modelData = state.filter((item)=> item.name.includes(name.slice(0,5))).map((item)=>


    <div><ul>
    {/* <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Name :</li> */}
    <div className="">
        <Typography variant="h4">{item.name}</Typography>
        <div className="headerborder"></div>
    </div>
    <br />
    <br />
    <div className="breadcrumb" style={{ display:"flex", alignItems:"center"}}>
        <Link to="/"><Typography variant="h6" style={{fontSize:"14px", margin:"auto 1em"}}>Home</Typography></Link>/
        <Link to="/acupuncture"><Typography variant="h6" style={{fontSize:"14px", margin:"auto 1em"}}>Acupuncture</Typography></Link>/
        <Typography variant="h6" style={{fontSize:"14px", margin:"auto 1em"}}>{name}</Typography>
    </div>
    <Typography variant="h4" style={{color:"rgb(100,100,100)"}}>Epithet</Typography><br />
        <div className="qrcode"> <QRCode value={`/acupunture/${name}`} size="110" /></div>
                                    
    
    <li className="myliststyle"><CheckIcon className="mycustomliststyle" />PinyIn : {item.pinyin}</li>
    <li className="myliststyle"><CheckIcon className="mycustomliststyle" />English : {item.english}</li>
    <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Japanese : {item.japanese}</li>
    <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Korean : {item.korean}</li>
    <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Vietnamese : {item.vietnamese}</li>
                <br />
                            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                                <div style={{display:"inline-flex",width:"80vw",overflowX:"auto", textAlign:"center"}} className="custom-scroll">
                                        <CustomNav name="Profile" activenav={activeNav} handleClick={(event)=> setactiveNav(event)} />
                                        <CustomNav name="Topic and Comments" activenav={activeNav} handleClick={(event)=> setactiveNav(event)} />
                                        <CustomNav name="Function" activenav={activeNav} handleClick={(event)=> setactiveNav(event)} />
                                        <CustomNav name="Indication" activenav={activeNav} handleClick={(event)=> setactiveNav(event)} />
                                        <CustomNav name="Reference" activenav={activeNav} handleClick={(event)=> setactiveNav(event)} />
                                        <CustomNav name="Notes" activenav={activeNav} handleClick={(event)=> setactiveNav(event)} />
                                </div>
                            </div>
                <br />
    </ul>
    <ul style={ activeNav == 'Profile' ? {display:"block"}: {display:"none"}}>            
    <li className="myliststyle"><CheckIcon className="mycustomliststyle" />PhySical Location : {item.physicalLocation}</li>
    <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Five Elements : {item.fiveElement}</li>
    <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Horary Cycle : {item.horarycycle}</li>
    <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Functionality : {item.functionality}</li>
    <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Meridian : {item.meridian}</li><br/>
    <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Element : {item.element}</li>
    <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Indication : {item.indication}</li>
    <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Caution : {item.caution} </li>
    <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Notes : {item.notes}</li>
    <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Video Link : {item.videoLink}</li>
    </ul>    </div>
    )
    return (
        <>{console.log(props)}
            <div className="card-item blog-card border-bottom-0">
                
                
                <div className="card-content pl-0 pr-0 pb-0">
                            
                            <br />
                            <div><br />
                            <Typography variant="h6">
                                    
                                    <div style={isLoading ? {display:"block", textAlign:"center"}: {display:"none"}}>
                                        <Typography variant="h5">Loading...</Typography>
                                    </div>
                                    {modelData}
                                    <div style={error ? {display:"block", textAlign:"center"}: {display:"none"}}>
                                        <Typography variant="h6">An Error Occured While Loading Data...</Typography>
                                    </div>
                                </Typography>
                            </div>
                                <div style={ activeNav === 'Topic and Comments' ? { display: "block" } : { display : "none" }}>
                                    <div className="comments-wrap">
                                        <h2 className="widget-title">3 Comments</h2>
                                        <div className="title-shape"></div>

                                        <ListingDetailsComments commentlists={sectiondata.listingDetails.comments} />

                                    </div>
                                    <div className="add-review-listing padding-top-50px">
                                        <h2 className="widget-title">Add a Comment</h2>
                                        <div className="title-shape"></div>
                                        <div className="section-heading padding-top-10px">
                                            <p className="sec__desc font-size-16">Your email address will not be published. Required fields are marked *</p>
                                        </div>
                                        <div className="contact-form-action mt-3">
                                            <BlogCommentFields />
                                        </div>
                                    </div>
                                </div>
                                <div style={ activeNav === 'Topic and Comments' | activeNav === 'Profile' ? { display: "none" } : 
                                    { display : "flex", justifyContent: "space-around", marginTop:"30vh", flexDirection:"column", alignItems:"center", textAlign:"center"  }}>
                                        <Typography variant="h4">No Data Found</Typography>
                                </div>
                </div>
            </div><br /><br />
            <div style={{ display:"flex", justifyContent:"space-evenly"}}>
                <div><NavigateNext style={{transform:"rotateY(180deg)"}} className="mynavcon"/></div>
                <div><NavigateNext className="mynavcon"/></div>
            </div>
        </>
    );
}

export default withHOC(React.memo(BlogDetailContent));
