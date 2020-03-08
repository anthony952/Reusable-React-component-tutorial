import React from 'react';
import './card.css';

export default function Cards (props){

console.log(props);
    return(
        <div className="card-wrapper">
            <div className="card">
                <div className="author-info-button">
                    <div className="author-info">
                        <div className="author-picture"><img src={require('../assets/img/woman1.jpg')}/></div>
                        <div className="author-name-date">
                            <div className="author-name">{props.post.name}</div>
                            <div className="author-date-min">{`${props.post.date} - ${props.post.timeread} timeread`}</div>
                        </div>
                    </div>
                    <div>
                       
                    </div>
                </div>
                <div className="post-picture"><img src={require('../assets/img/post1.jpg')}/></div>
                <div className="post-title"><a href="" >{props.post.title}</a></div>
                <div className="post-description">{props.post.description}</div>
                <div className="post-extra">
                    <div className="comments"></div>
                    <div className="likes"></div>
                </div>
            </div>
        </div>
    )
};