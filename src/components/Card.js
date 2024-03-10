import React from 'react'

const Card =(props)=>{
        let { title, description, imgUrl, newsUrl, author, source, Published } =props
        let a = Published
        let d = new Date(a)
        let e = d.toUTCString()
        return (
            <div>
                <div className="card" style={{borderColor:' #545353',borderWidth:'3px'}}>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{zIndex:"1", left:"90%"}}>{source}</span>
                    <img src={imgUrl} className="card-img-top" alt="..." />
                    <div className={`card-body bg-${props.NewsCBg} text-${props.NewsCC}`}>
                        <h5 className="card-title">{title} 
                        </h5>
                        <p className="card-text">{description}</p>
                        <p>By {author} on {e}</p>
                        <a href={newsUrl} className="btn btn-primary btn-sm" target='_blank' rel="noreferrer">Read More</a>
                    </div>
                </div>
            </div>
        )
}
export default Card