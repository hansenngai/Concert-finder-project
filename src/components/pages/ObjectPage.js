import React from 'react'
import Image2 from './../../images/samplepicture2.png'
import faker from 'faker'

export default function ObjectPage() {
    return (
        <div>
            <img src={Image2} width="50%" height="25%"></img>


            <div className="ui container comments">
                <div className="comment">
                    <a href="/" className="avatar">
                        <img alt="avatar" src={faker.image.avatar()}/>
                    </a>
                    <div className="content">
                        <a href="/" className="author">
                            Sam
                        </a>
                        <div className="metadata">
                            <span className="date"> Today at 6:00PM</span>
                        </div>
                        <div className="text">Nice!</div>
                    </div>
                </div>

                <div className="comment">
                    <a href="/" className="avatar">
                        <img alt="avatar" src={faker.image.avatar()}/>
                    </a>
                    <div className="content">
                        <a href="/" className="author">
                            Jane
                        </a>
                        <div className="metadata">
                            <span className="date"> Today at 7:00PM</span>
                        </div>
                        <div className="text">Poor service!</div>
                    </div>
                </div>
		    </div>
        </div>
    )
}
