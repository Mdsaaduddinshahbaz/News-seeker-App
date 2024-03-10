import React, { useEffect, useState } from 'react'
import Card from './Card'
import Spinner from './spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)    
    const updateNews=async()=>{
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url)
        let parsedata = await data.json()
        props.setProgress(10)
        setArticles(parsedata.articles);
        setTotalResults(parsedata.totalResults);
        setPage(page+1)
        props.setProgress(100)
        setLoading(false)
    }
    useEffect(() => {
        updateNews()
        console.log(props)
        // eslint-disable-next-line
    }, []);  
    const fetchMoreData = async () => {
        console.log(totalResults)     
        setPage(page + 1)
        console.log(page)
        setLoading(true)
        if(page===(totalResults/5)-1){
            console.log('Hello')
            setLoading(false)   
        }
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page}&apiKey=${props.apikey}&pageSize=${props.pageSize}`
        let data = await fetch(url)
        let parsedata = await data.json()
        setArticles(articles.concat(parsedata.articles))
        setTotalResults(parsedata.totalResult)
        setLoading(false)
    };
    return (
        <>  
            <div className={`bg-${props.NewsCBg}`}>
            <h1 className={`text-center text-${props.NewsCC}`} style={{position:'relative',top:'31px;'}}>Today -top Head lines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element, index) => {
                            return <div className="col-md-4" key={index} style={{ marginTop: "11px" }}>
                                <Card NewsCBg={props.NewsCBg} NewsCC={props.NewsCC} title={element.title ? element.title.slice(0, 53) : ""} description={element.description ? element.description.slice(0, 93) : ""} imgUrl={element.urlToImage ? element.urlToImage : "https://image.cnbcfm.com/api/v1/image/107302225-1695041239437-gettyimages-1434444157-dsc_9489.jpeg?v=1698409801&w=1920&h=1080"}
                                    newsUrl={element.url} author={element.author} source={element.source.name} Published={element.publishedAt} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            </div>
        </>
    )
}
News.defaultProps = {
    country: 'in',
    category: 'general',
    pageSize: 5
}
News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
}
export default News



