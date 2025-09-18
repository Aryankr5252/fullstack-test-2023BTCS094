import React from 'react'

const Footer = () => {
  return (
    <footer>
            <div className="container text-white p-10 border-t-2 border-t-white">
                <div className="flex flex-wrap justify-around items-center">
                    <div className="">
                        <h3 className='text-xl font-medium text-zinc-200 underline hover:text-[#822659] mb-2'>Services</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className='text-xl font-medium text-zinc-200 underline hover:text-[#822659] mb-2'>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Legacy</a></li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className='text-xl font-medium text-zinc-200 underline hover:text-[#822659] mb-2'>Careers</h3>
                        <ul>
                            <li><a href="#">Job openings</a></li>
                            <li><a href="#">Employee success</a></li>
                            <li><a href="#">Benefits</a></li>
                        </ul>
                    </div>
                </div>
                    <div className="mt-10">
                        <p className="text-center">@Company Name © 2018</p>
                    </div>
            </div>
        </footer>
  )
}

export default Footer