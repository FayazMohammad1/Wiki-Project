import React from 'react'
import { Link } from 'react-router-dom'

const ViewQuestion = () => {
  return (
    <div className='main'>
        <div className="main-conatiner">
            <div className="main-top">
                <h2 className="main-question">This is Question title</h2>
                <Link to='/all-questions/ask'></Link>
            </div>
        </div>
    </div>
  )
}

export default ViewQuestion