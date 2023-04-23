import React from 'react'

const Benefits = () => {
    return (
        <div>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">

                <div className=" overflow-hidden shadow-lg  hover:shadow-2xl bg-gradient-to-r from-bele2 to-bele1 rounded-3xl">
                    <img className="w-full p-4 rounded-3xl" src="images/foucessed_1.jpg" alt="Mountain" />
                    <div className="px-6 py-2">
                        <div className="font-semibold text-2xl mb-2 text-white">Distraction-free learning</div>
                        <p className="text-base text-gray-700  text-justify  text-white">
                            The ability to watch videos in a clean and minimalist interface that eliminates distractions and interruptions allows for focused attention on the video content. This can lead to a more immersive and effective learning experience.
                        </p>
                    </div>

                </div>

                <div className="overflow-hidden shadow-lg  hover:shadow-2xl bg-gradient-to-r from-bele2 to-bele1 rounded-3xl">
                    <img className="w-full p-4 rounded-3xl" src="images/ai.jpg" alt="River" />
                    <div className="px-6 py-2">
                        <div className="font-semibold text-2xl mb-2 text-white">Automate summaries</div>
                        <p className="text-gray-700 text-base text-justify text-white">
                            The use of AI-powered automated summaries saves time and provides a quick overview of the key points covered in a video. This is a helpful tool for those who want to review multiple videos on the same topic or for longer videos.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">

                    </div>
                </div>


                <div className=" overflow-hidden shadow-lg  hover:shadow-2xl bg-gradient-to-r from-bele2 to-bele1 rounded-3xl ">
                    <img className="w-full p-4 rounded-3xl" src="images/quiz.jpg" alt="Forest" />
                    <div className="px-6 py-2">
                        <div className="font-semibold text-2xl mb-2 text-white">Interactive quizzes</div>
                        <p className="text-gray-700 text-base text-justify text-white">
                            Engaging with interactive quizzes that reinforce knowledge and promote long-term retention of material can enhance the overall learning experience. Quizzes offer an opportunity to actively engage with the video content and test understanding.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">

                    </div>
                </div>

                <div className=" overflow-hidden shadow-lg  hover:shadow-2xl bg-gradient-to-r from-bele2 to-bele1 rounded-3xl">
                    <img className="w-full p-4 rounded-3xl" src="images/doubtsolving.jpg" alt="Doubt Solving" />
                    <div className="px-6 py-2">
                        <div className="font-semibold text-2xl mb-2 text-white">Live doubt solving</div>
                        <p className="text-gray-700 text-base text-justify text-white">
                            Get real-time doubt resolution with ChatGPT, without leaving the app. This feature provides personalized learning and quick, efficient answers to enhance the overall learning experience and  also helps users to stay engaged and motivated.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">

                    </div>
                </div>
            </div>
        </div>


    )
}

export default Benefits
