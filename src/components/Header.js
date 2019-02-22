import React from "react";
import logo from "../../public/img/super-dad.png"
import { StaticQuery } from "gatsby";
import { graphql, Link } from "gatsby";

const TitleAndDescription = ({data}) => {
    const title = data.site.siteMetadata.title;

    return(
        <div className="c-header">
            <div className="c-header__effect">
                <div className="c-spinner">
                    <div className="c-spinner__vane"></div>
                    <div className="c-spinner__vane"></div>
                    <div className="c-spinner__vane"></div>
                    <div className="c-spinner__vane"></div>
                    <div className="c-spinner__vane"></div>
                    <div className="c-spinner__vane"></div>
                    <div className="c-spinner__vane"></div>
                    <div className="c-spinner__vane"></div>
                    <div className="c-spinner__vane"></div>
                    <div className="c-spinner__vane"></div>
                </div>
                <div className="c-header__content">
                    <Link className="c-header__link" to="/">
                        <h1 className="heading-primary">{title}</h1>
                    </Link>
                    
                </div>
                <img className="c-header__logo" src={logo} alt="logo" height="200"/>
            </div>
        </div>
    )
}

const Header = () => {
    return(
        <StaticQuery
            query={graphql`
                query {
                    site{
                        siteMetadata{
                            title
                            description
                        }
                    }
                }
            `}
            render={data => <TitleAndDescription data={data} />}
        />
    )
}

export default Header;