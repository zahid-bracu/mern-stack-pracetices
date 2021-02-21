import React, {useEffect} from 'react'
import './style.css';
export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="container">
            <div className="mt-5">
            <h4>You can check our <a className="link-nav text-danger" href="https://github.com/zahid-bracu">github</a> account.</h4>
            <h4>You can also visit our <a className="link-nav text-primary" href="https://www.instagram.com/zaheed_rahman/">instagram</a> account too.</h4>
            <h4>Or send us mail : <span className="text-success">zahid.mym@gmail.com</span></h4>
            </div>
        </div>
    )
}
