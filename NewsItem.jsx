import React from 'react'

export default function NewsItem(props) {
    return (
        <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
            <div class="card">
                <img src={props.pic} height={150} width="100%" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <div className='card-date'>
                        <p>{props.source}</p>
                        <p>{new Date(props.date).toLocaleDateString()}</p>
                    </div>
                    <p class="card-text">{props.description}</p>

                    <a href={props.url} class="btn btn-primary w-100 background">Read Full Article</a>
                </div>
            </div>
        </div>
    )
}
