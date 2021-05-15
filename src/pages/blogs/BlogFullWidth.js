import React,{useEffect,useState, useContext} from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import BlogSidebar from "../../components/sidebars/BlogSidebar";
import BlogFullWidthItems from "../../components/blogs/BlogFullWidthItems";
import MeridianHandler from "../../components/blogs/MeridianHandler";
import Pagination from "../../components/blogs/Pagination";
// import MeridianHandler from "./MeridianHandler"
// import ListingDetailsComments from "../contact/ListingDetailsComments";
import ListingDetailsComments from "../../components/contact/ListingDetailsComments";
// import BlogCommentFields from "./BlogCommentFields";
import BlogCommentFields from "../../components/blogs/BlogCommentFields";
import sectiondata from "../../store/store";

import NewsLetter from "../../components/other/cta/NewsLetter"
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import bg from "../../assets/images/custom/bg.jpg"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

import flag1 from "../../assets/images/custom/flag1.jpg"
import { UserContext } from '../../App';

function BlogFullWidth() {
    const context = useContext(UserContext)
    const [ state, setstate ] = useState(false)
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
                            <NewsLetter />

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
                    <div className={ state ? "col-lg-6 mycustomtopicinactive" :
                             "col-lg-6 mycustomtopicactive"}>

                        <div 
                            className="mytopicmobile mytopic1"
                            style={ state ? {background:"rgba(255,255,255,0)"} : {padding:"0.5em"}} 
                            onClick={()=> setstate(false)}>
                            <Typography variant="h6" style={ state ? {}:  {color: "red"}}>Accu-Points</Typography>
                        </div>
                    </div>
                    <div className={ state ? "col-lg-6 mycustomtopicactive":"col-lg-6 mycustomtopicinactive"} >
                        <div 
                                className="mytopicmobile mytopic1"
                                style={ state ? {padding:"0.5em"}: {background:"rgba(255,255,255,0)"}} 
                                onClick={()=> setstate(true)}>
                            <Typography variant="h6" style={ state ? {color: "red"}: {}}>Topic and Comments</Typography>
                        </div>
                    </div>
                </div>
            </div>

            <section className="blog-grid padding-top-40px padding-bottom-100px" style={ state ? {display:"none"} : {display:"block"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <BlogFullWidthItems  />
                        </div>
                    </div>
                </div>
            </section>

            <section style={state ? {display:"block", marginTop:"4em"} : {display:"none"}}>
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

            {/* Footer */}
            <Footer />

            <ScrollTopBtn />

        </main>
    );
}

export default React.memo(BlogFullWidth);
