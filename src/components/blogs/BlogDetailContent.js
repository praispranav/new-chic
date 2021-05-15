import React,{useState, useEffect} from 'react';
import ListingDetailsComments from "../contact/ListingDetailsComments";
import BlogCommentFields from "./BlogCommentFields";
import BlogBlockquote from "./BlogBlockquote";
import {Link} from "react-router-dom";
import CheckIcon from "@material-ui/icons/Check"
import BlogTags from "./BlogTags";
import BlogShare from "./BlogShare";
import sectiondata from "../../store/store";
import BlogFullWidthList from './BlogFullWidthList';
import Typography from "@material-ui/core/Typography";
import {motion } from "framer-motion"

import axios from "axios"
import QRCode from "react-qr-code"

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
    const [ isLoading, setIsLoading ] = useState(true)
    const [ state, setstate ] = useState([])
    const url = 'http://itransportindex.com:4500/api/acupunctures'
    const [ error , seterror ] = useState(false)
    const [ handleErr , sethandleErr ] = useState(1)
    const [activeNav , setactiveNav ] = useState("Profile")
    
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

    const modelData = state.filter((item)=> item.name.includes(props.name.slice(0,5))).map((item)=>
    <ul>
    <li className="myliststyle"><CheckIcon className="mycustomliststyle" />English : {item.english}</li>
    <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Korean : {item.korean}</li>
    <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Japanese : {item.japanese}</li>
    <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Vietnamese : {item.vietnamese}</li>
    <li className="myliststyle"><CheckIcon className="mycustomliststyle" />PhySical Location : {item.physicalLocation}</li>
    <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Five Elements : {item.fiveElement}</li>
    <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Horary Cycle : {item.horarycycle}</li>
    <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Functionality : {item.functionality}</li>
    <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Name : {item.name}</li>
    <li className="myliststyle"><CheckIcon className="mycustomliststyle" />PinyIn : {item.pinyin}</li>
    <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Meridian : {item.meridian}</li><br/>
    <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Element : {item.element}</li>
    <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Indication : {item.indication}</li>
    <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Caution : {item.caution} </li>
    <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Notes : {item.notes}</li>
    <li className="myliststyle"><CheckIcon className="mycustomliststyle" />Video Link : {item.videoLink}</li>
    </ul>    
    )
    return (
        <>
            <div className="card-item blog-card border-bottom-0">
                <div className="">
                    <Typography variant="h2">{props.name}</Typography>
                    <div className="headerborder"></div>
                </div>
                <br />
                <br />
                <div className="breadcrumb">

                    <Link to="/"><Typography variant="h6" style={{fontSize:"14px", margin:"auto 1em"}}>Home</Typography></Link>
                    /
                    <Link to="/acupuncture"><Typography variant="h6" style={{fontSize:"14px", margin:"auto 1em"}}>Acupuncture</Typography></Link>
                    /
                    <Typography variant="h6" style={{fontSize:"14px", margin:"auto 1em"}}>{props.name}</Typography>
                </div>
                <div className="card-content pl-0 pr-0 pb-0">
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
                            <div style={ activeNav == 'Profile' ? {display:"block"}: {display:"none"}}><br />
                                <Typography variant="h4" style={{color:"rgb(100,100,100)"}}>Epithet</Typography><br />
                                <Typography variant="h6">
                                    
                                    <div style={{ float:"right" }}> <QRCode value="hello" /></div>
                                    {modelData}
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

                    <div className="section-block margin-top-30px margin-bottom-30px"></div>
                    <div className="tag-items d-flex justify-content-between">

                        <BlogTags taglists={sectiondata.blogDetails.bltags.lists} title={sectiondata.blogDetails.bltags.title} />

                        <BlogShare />

                    </div>
                    <div className="section-block margin-top-30px margin-bottom-50px"></div>
                    
                    
                </div>
            </div>
        </>
    );
}

export default BlogDetailContent;
