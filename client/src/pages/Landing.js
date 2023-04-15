
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/Testing'
import {Logo} from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className='container page'>
                <div className='info'>
                    <h1>
                        job <span> Tracking</span> app
                    </h1>
                    
                    <p>
                        A good paragraph should have a clear internal structure with an opening, development and ending. Each paragraph should deal with one idea or aspect of an idea, and it should be clear to the reader what this main idea is. This idea is usually shown in the topic sentence
                    </p>
                    <Link to="/register"className='btn btn-hero'>Login/Register</Link>

                </div>
                <img src={main} alt='Job Hunt' className='img main-img'></img>

            </div>

        </Wrapper>

    )
}

export default Landing
