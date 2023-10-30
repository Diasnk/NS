import { PiTargetBold } from 'react-icons/pi'
import { FiHelpCircle } from 'react-icons/fi'


export default function About() {
    return (
        <div className="mt-8 mx-6">
            <h1 className="text-3xl mb-10 text-center font-bold">ABOUT FEINAPP</h1>
            <div className='flex items-center justify-around gap-[10%]'>
                <div className="mb-10">
                    <h1 className="font-bold text-2xl mb-4 flex items-center gap-2"><PiTargetBold className="text-[#003566]" />The goal</h1>
                    <p>
                        To help people study effectively using Feynman technique, which states that you will learn better if you explain the topic to someone
                    </p>
                </div>
                <div className="mb-10">
                    <h1 className="font-bold text-2xl mb-4 flex items-center gap-2"><FiHelpCircle className="text-[#003566]" />Features</h1>
                    <p>
                        1. Analyzing the explanation of a user
                        2. Simplifying the information to increase awareness
                        3. Generating notes based on the topic
                    </p>
                </div>
            </div>
        </div>
    );
}





