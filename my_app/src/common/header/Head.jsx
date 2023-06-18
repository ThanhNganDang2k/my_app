import React from 'react'

const Head = () => {
  return (
    <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            {/* <i class="fa-regular fa-phone"> </i> */}
            <i class="fa fa-phone"></i>
            <label>+84 385 930 622</label>
            <i className='fa fa-envelope'></i>
            <label> hoangdanh54317@gmail.com</label>
          </div>
          <div className='right row RText'>
            <label>Theme FAQ's</label>
            <label>Need Helps</label>
            <span><img src=''></img></span>
            <label>EN</label>
            <span>🏳️‍⚧️</span>
            <label>US</label>
          </div>
        </div>
    </section>
  )
}
export default Head;
