import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className='body'>
            <div className="card">
                <h1>Top Stories</h1>
                <img src="https://cdn.cnn.com/cnnnext/dam/assets/210621100723-02-stefan-lofven-0621-medium-tease.jpg" alt="" />
                <div className="newsContent">
                    <h2>Paths to Insurrection</h2>
                    <p>Six months ago, tens of thousands of people converged in Washington, DC, from all corners of the country to decry what they erroneously believed to be a stolen election.
                    The raucous protest culminated on January 6 with a deadly riot at the US Capitol, a landmark stain on American democracy.
                    Deluded rallygoers, who saw themselves as patriots fighting for their country, demanded that Congress declare Donald Trump the rightful winner of the 2020 presidential election.</p>
                </div>
            </div>
        </div>
    )
}

export default Home
