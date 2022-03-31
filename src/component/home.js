import React, { Fragment, useContext, useState } from 'react';
import classes from './home.module.css';
import { Link, useNavigate } from 'react-router-dom';

import { FaTh, FaSearch,FaMicrophone } from 'react-icons/fa';
import { searchContext } from '../store/searchCtx';

const Home = () => {

    const ctx = useContext(searchContext);
    const navigate = useNavigate();
    const [value, setValue] = useState("");

    const handleChange = (e)=>{
        setValue(()=>e.target.value);     
    }

    const handleSearch=(e)=>{
        e.preventDefault();
        console.log(value);
        ctx.dispatch({ type: "SET", payload: value});
        navigate("/search");
        
    }

    return (
        <Fragment>
            <nav className={classes.home_nav}>
                <div className={classes.nav_container}>
                    <div className={classes.indv_nav_icon} >
                        <a href='https://mail.google.com/' target="_blank">Gmail</a>
                    </div>
                    <div className={classes.indv_nav_icon}>
                        <a href='#' target="_blank">Images</a>
                    </div>
                    <div className={classes.indv_nav_icon}>
                        <a href="https://about.google/products/" target="_blank">
                            <FaTh className={classes.product_home_nav} />
                        </a>
                    </div>
                    <div className={classes.indv_nav_icon}>
                        <img src='https://lh3.googleusercontent.com/ogw/ADea4I67XpQDO4gxJgAzZMwTa5LDuUMSopgfhTB7phos=s32-c-mo' className={classes.avatar_home_nav} />
                    </div>
                </div>
            </nav>

            <main>
                <header className={classes.home_main_icon}>
                    <div>
                        <Link to="/">
                            <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt='Google' />
                        </Link>
                    </div>
                </header>
                <article className={classes.home_input_section}>
                    <div className={classes.flasuvaisdf_input}>
                        <div className={classes.main_input_container}>
                            <div className={classes.home_main_search_icon}>
                               <FaSearch className={classes.home_search_btn} onClick={handleSearch} />
                            </div>
                            <div className={classes.home_input_here}>
                                <form onSubmit={handleSearch}>
                                    <input type="text" id='value' value={value} onChange={handleChange} name='value' />
                                </form>
                            </div>
                            <div className={classes.home_record_here}>
                                <FaMicrophone className={classes.home_record_icon} />
                            </div>
                        </div>
                    </div>
                    
                    <div className={classes.home_search_bottom}>
                        <div className={classes.home_bottom_search_indv}>
                            <button>
                                Google Search
                            </button>
                        </div>
                        
                        <div className={classes.home_bottom_search_indv}>
                            <button>
                                I'm Feeling Lucky
                            </button>
                        </div>
                    </div>

                    <div className={classes.google_home_off_container}>
                        <div className={classes.google_home_off}>
                            Google offered in: <a href='#' style={{color:"blue"}}>नेपाली</a> 
                        </div>
                    </div>
                </article>
            </main>

            <footer className={classes.home_footer}>
                <div className={classes.home_first_footer}>
                    <p>Nepal</p>
                </div>
                <div className={classes.home_last_footer}>
                    <div className={classes.home_last_first_links}>
                        <div>
                            <a href="https://about.google/?utm_source=google-NP&utm_medium=referral&utm_campaign=hp-footer&fg=1" target={"_blank"}>
                            About
                            </a>
                        </div>
                        <div>
                            <a href='#'>
                            Advertising
                            </a>
                        </div>
                        <div>
                            <a href='#'>
                            Business
                            </a>
                        </div>
                        <div className={classes.home_how_works}>
                            <a href='#'>
                            How Search Works
                            </a>
                        </div>
                        
                    </div>
                    <div className={classes.home_last_last_links}>
                        <div>
                            <a href='#'>
                            Privacy
                            </a>
                        </div>
                        <div>
                            <a href='#'>
                            Terms
                             </a>
                        </div>
                        <div>
                            <a href='#'>
                            Settings
                            </a>
                        </div>
                        
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Home