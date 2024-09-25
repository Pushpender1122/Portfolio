import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const Info = ({ currentStage }) => {
    if (currentStage === 1)
        return (
            <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
                Hi, I'm
                <span className='font-semibold mx-2 text-white'>Pushpender</span>
                👋
                <br />
            </h1>
        );

    if (currentStage === 2) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    Worked on diverse personal projects <br /> and developed a wide range of skills along the way.
                </p>

                <Link to='/about' className='neo-brutalism-white neo-btn'>
                    Learn more
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    if (currentStage === 3) {
        return (
            <div className='info-box'>
                <p className='font-medium text-center sm:text-xl'>
                    Successfully created and completed various  projects <br /> Want to see the results?
                </p>

                <Link to='/projects' className='neo-brutalism-white neo-btn'>
                    Visit my portfolio
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    if (currentStage === 4) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    Looking for help with your project or need a developer? <br /> I'm just a message away!

                </p>

                <Link to='/contact' className='neo-brutalism-white neo-btn'>
                    Let's talk
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    return null;
};

export default Info;
