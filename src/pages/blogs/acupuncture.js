import React,{useEffect,useState, useRef, useContext} from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";

import BlogFullWidthItems from "../../components/blogs/BlogFullWidthItems";
import withHOC from "../../components/blogs/withHOC";
import Pagination from "../../components/blogs/Pagination";
import ListingDetailsComments from "../../components/contact/ListingDetailsComments";
import BlogCommentFields from "../../components/blogs/BlogCommentFields";
import sectiondata from "../../store/store";

import NewsLetter from "../../components/other/cta/NewsLetter"
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import bg from "../../assets/images/custom/bg.jpg"
import Typography from "@material-ui/core/Typography"
import flag1 from "../../assets/images/custom/flag1.jpg"
import { UserContext } from '../../App';

function BlogFullWidth(props) {
    const { isLoading, state, error, open  } = props
    
    const context = useContext(UserContext)
    const [ statE, setstatE ] = useState(false)
    const [ isOpen , setisOpen ] = useState(false)
    const meridian = useRef()
    const handleClick=()=> {
        setisOpen(false)
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        context.dispatch({type:"filter", value: meridian.current.value})
    }

    const newList = []
    state.forEach((value)=>{
        if(newList.indexOf(value.meridian) == -1){
            newList.push(value.meridian)
        }
    })

    const Meridian = newList.map((item)=> 
                                            <option 
                                                id={item} 
                                                value={item}>{item}
                                            </option>)
    return (
        <main className="blog-fullwidth-page">
            {/* Header */}
            <GeneralHeader />

            {/* Breadcrumb */}
            <Breadcrumb CurrentPgTitle="Accupunture" MenuPgTitle="Blog" img={bg} />
            <div style={{textAlign:"center"}}>
                <p style={{color:"red"}}>The only database of acupuncture out there!</p>
                <h1>Acupuncture (zhēnjiǔ) of Traditional Chinese Medicine 针灸</h1>
            </div>
            <section className="blog-grid padding-top-40px padding-bottom-50px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <img src={flag1} className="imgstyle" />
                        </div>
                        <div className="col-lg-6"  style={{marginTop:"4em", fontSize:"20px"}}>
                            <p>
                            Looking for information about Acupuncture ? <br /><br />
                            Browse our database. Share your knowledge, ideas and feedback on the efficacy of Acupuncture.
                            View, give feedback to and vote on others’ contributions.<br /> <br />
                            See what is missing and help us to make our knowledge database grow by signup for an account.<br /> <br />
                            Browse the name of the acupuncture-point by choosing the alphabet. Or choose the Meridian by picking from the dropdown-menu.
                            </p>
                            <br />
                            
                            <hr />
                            <br />
                            <form onSubmit={(e)=> handleSubmit(e)}>
                            <div style={{}}>
                                <Typography variant="h5">Meridians : </Typography><br />
                                {/* space for meridian */}
                                <div>
                                    <select name="meridian" id="meridian" ref={meridian}>
                                        {Meridian}
                                    </select>
                                </div>
                                <div >
                                </div>
                                <br />
                                <div style={{textAlign:"right"}}>
                                    <button className="theme-btn border-0" type="submit" value="submit">
                                        <i className="la la-paper-plane"></i> Submit
                                    </button>
                                </div>
                            </div>
                            </form>


                            {/* <NewsLetter newsLetterContent={sectiondata.calltoactions.newsletters} /> */}

                        </div>
                    </div>
                </div>
            </section>
            <div className="mymobile">
                <Pagination />
            </div>
            <br />
            <div style={{textAlign:"center"}}>
                <p>Active Filter: {context.state.activeFilter}</p>
            </div>
            <br />
            <br />
            <div className="container">
                <div className="row">
                    <div className={ statE ? "col-lg-6 mycustomtopicinactive" :
                             "col-lg-6 mycustomtopicactive"}>

                        <div 
                            className="mytopicmobile mytopic1"
                            style={ statE ? {background:"rgba(255,255,255,0)"} : {padding:"0.5em"}} 
                            onClick={()=> setstatE(false)}>
                            <Typography variant="h6" style={ state ? {}:  {color: "red"}}>Accu-Points</Typography>
                        </div>
                    </div>
                    <div className={ statE ? "col-lg-6 mycustomtopicactive":"col-lg-6 mycustomtopicinactive"} >
                        <div 
                                className="mytopicmobile mytopic1"
                                style={ statE ? {padding:"0.5em"}: {background:"rgba(255,255,255,0)"}} 
                                onClick={()=> setstatE(true)}>
                            <Typography variant="h6" style={ statE ? {color: "red"}: {}}>Topic and Comments</Typography>
                        </div>
                    </div>
                </div>
            </div>

            <section className="blog-grid padding-top-40px padding-bottom-100px" style={ statE ? {display:"none"} : {display:"block"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <BlogFullWidthItems 
                                open={isOpen} 
                                state={state}
                                isLoading={isLoading}
                                error={error}  
                                handleClick={()=> handleClick()} />
                        </div>
                    </div>
                </div>
            </section>

            <section style={statE ? {display:"block", marginTop:"4em"} : {display:"none"}}>
            <div className="container">
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
            </section>
            
            <section>

            </section>

            {/* Newsletter */}
                                        <NewsLetter />
            {/* Footer */}
            <Footer />

            <ScrollTopBtn />

        </main>
    );
}

export default withHOC(React.memo(BlogFullWidth));
