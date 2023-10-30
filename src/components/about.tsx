import { PiTargetBold } from 'react-icons/pi'
import { FiHelpCircle } from 'react-icons/fi'


export default function About() {
    return (
        <div className="mt-8 mx-6 grid">
            <h1 className="text-3xl mb-10 text-center font-bold">ABOUT FEYNAPP</h1>
            <div className='grid grid-cols-2 gap-10'>

                <div className="mb-10">
                    <h1 className="font-bold text-2xl mb-4 flex items-center gap-2"><PiTargetBold className="text-[#003566]" />The goal</h1>
                    <p>
                        To help people study effectively using Feynman technique, which states that you will learn better if you explain the topic to someone
                    </p>
                </div>
                <div className="mb-10">
                    <h1 className="font-bold text-2xl mb-4 flex items-center gap-2"><FiHelpCircle className="text-[#003566]" />Features</h1>
                    <p>
                        1. Analyzing the explanation of a user <br></br>
                        2. Simplifying the information to increase awareness <br></br>
                        3. Generating notes based on the topic
                    </p>
                </div>

                <div className="mb-10 ">
                    <h1 className="font-bold text-2xl mb-4 flex items-center gap-2"><PiTargetBold className="text-[#003566]" />Our mission</h1>
                    <p>
                        We aim to facilitate the learning process by using an AI-based request system and making the learning process more productive. FeinApp allows you to analyze the learning process, correct mistakes made while using the platform, and receive high-quality feedback on your works
                    </p>
                </div>
                <div className="mb-10">
                    <h1 className="font-bold text-2xl mb-4 flex items-center gap-2"><FiHelpCircle className="text-[#003566]" />About website</h1>
                    <p>
                    FeynApp - is a platform aimed at helping people, who work with data and have difficulties processing it. FeinApp allows you to analyze, correct, and write notes based on your request using AI.
                    </p>
                </div>
            </div>

        </div>
    );
}





