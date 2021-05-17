import React from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import BlogSidebar from "../../components/sidebars/BlogSidebar";
import AcupointprofileContent from "../../components/blogs/AcupointprofileContent";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import breadcrumbimg from '../../assets/images/bread-bg.jpg'
import sectiondata from "../../store/store";
import bg from "../../assets/images/custom/bg.jpg"

const state = {
    breadcrumbimg: breadcrumbimg,
}
function Acupoint(props,event) {
    return (
        <div>
            {/* Header */}
            <GeneralHeader />

            {/* Breadcrumb */}
            <Breadcrumb CurrentPgTitle="Acupoint:" MenuPgTitle="Blog" img={bg} />
                
            <section className="blog-single-area padding-top-40px padding-bottom-70px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <AcupointprofileContent name={props.name}/>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <div className="container">
                <NewsLetter />
            </div>

            {/* Footer */}
            <Footer />

            <ScrollTopBtn />

        </div>
    );
}

export default React.memo(Acupoint);