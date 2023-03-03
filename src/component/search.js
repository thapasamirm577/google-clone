import React, { Fragment, useContext, useEffect, useState } from "react";
import { searchContext } from "../store/searchCtx";
import { searching } from "../store/searching";
import { Link } from "react-router-dom";
import searchedValue from "../result";
import parse from "html-react-parser";
import classes from "./search.module.css";
import { FaTh, FaSearch, FaMicrophone } from "react-icons/fa";
import {
    RiSettings4Line,
    RiImage2Line,
    RiArticleLine,
    RiMapPin2Line,
    RiMovieLine,
    RiMore2Line,
} from "react-icons/ri";

const Search = () => {
    const ctx = useContext(searchContext);

    const [data, setData] = useState({});
    const [value, setValue] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            if (ctx.state.value) {
                setLoading(true);
                const searchData = await searching(ctx.state.value);
                setData((prevState) => {
                    return { ...searchData };
                });
                ctx.dispatch({ type: "SEARCH", payload: searchData });
            }
            setLoading(false);
        }
        fetchData();
    }, [ctx.state.value]);

    useEffect(() => {
        if (ctx.state.value) {
            setValue(() => ctx.state.value);
        }
    }, [ctx.state.value]);

    console.log(data);
    const handleChange = (e) => {
        setValue(() => e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(value);
        ctx.dispatch({ type: "SET", payload: value });
    };

    return (
        <Fragment>
            {!loading && (
                <nav className={classes.result_nav}>
                    <div className={classes.result_nav_container}>
                        <div className={classes.result_nav_logo_container}>
                            <Link to="/">
                                <img
                                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                                    alt="logo"
                                />
                            </Link>
                        </div>
                        <div className={classes.result_nav_input_container}>
                            <div className={classes.result_nav_input_section}>
                                <div className={classes.result_nav_input}>
                                    <form onSubmit={handleSearch}>
                                        <input
                                            type="text"
                                            id="value"
                                            name="value"
                                            value={value}
                                            onChange={handleChange}
                                        />
                                    </form>
                                </div>
                                <div
                                    className={
                                        classes.result_nav_microphone_icon
                                    }
                                >
                                    <FaMicrophone
                                        className={
                                            classes.result_microphone_icon
                                        }
                                    />
                                </div>
                                <div className={classes.result_nav_search_icon}>
                                    <FaSearch
                                        className={classes.result_search_icon}
                                        onClick={handleSearch}
                                    />
                                </div>
                            </div>
                            <div className={classes.result_nav_menu_section}>
                                <div className={classes.indv_nav_icon}>
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <RiSettings4Line
                                            className={classes.setting_home_nav}
                                        />
                                    </a>
                                </div>
                                <div className={classes.indv_nav_icon}>
                                    <a
                                        href="https://about.google/products/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <FaTh
                                            className={classes.produc_home_nav}
                                        />
                                    </a>
                                </div>
                                <div className={classes.indv_nav_icon}>
                                    <img
                                        src="https://lh3.googleusercontent.com/ogw/ADea4I67XpQDO4gxJgAzZMwTa5LDuUMSopgfhTB7phos=s32-c-mo"
                                        className={classes.avatar_home_nav}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.result_all_links_container}>
                        <div className={classes.result_all_links_section}>
                            <div>
                                <a href="#">
                                    <FaSearch /> All
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <RiImage2Line /> Images
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <RiArticleLine /> News
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <RiMapPin2Line /> Maps
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <RiMovieLine /> Videos
                                </a>
                            </div>
                            <div>
                                <a>
                                    <RiMore2Line /> More
                                </a>
                            </div>
                        </div>
                        <div className={classes.result_nav_tool_name}>
                            <a href="#">Tools</a>
                        </div>
                    </div>
                </nav>
            )}

            {!loading && (
                <main className={classes.main_search_result}>
                    <div className={classes.search_info}>
                        About &nbsp;
                        {data.data?.searchInformation.formattedTotalResults}
                        &nbsp;results &nbsp; (
                        {data.data?.searchInformation.formattedSearchTime}{" "}
                        seconds)
                    </div>

                    {data.data?.items.map((item) => {
                        return (
                            <section
                                className={classes.result_show_main}
                                key={item.cachedId}
                            >
                                <div className={classes.result_formattedurl}>
                                    {item.formattedUrl}
                                    &nbsp;{" "}
                                    <RiMore2Line
                                        style={{ cursor: "pointer" }}
                                    />
                                </div>
                                <div className={classes.title_link}>
                                    <a href={item.link}>{item.title}</a>
                                </div>
                                <div className={classes.result_htmlsnippet}>
                                    {item.htmlSnippet &&
                                        parse(item.htmlSnippet)}
                                </div>
                            </section>
                        );
                    })}
                </main>
            )}
        </Fragment>
    );
};

export default Search;
