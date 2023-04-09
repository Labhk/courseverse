import React from 'react'

const Benefits = () => {
    return (
        <div>
            <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">

                <div class="rounded overflow-hidden shadow-lg border-2 hover:shadow-2xl">
                    <img class="w-full" src="public\images\foucessed_1.jpg" alt="Mountain" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Distraction-free learning</div>
                        <p class="text-gray-700 text-base text-justify">
                            "The ability to watch videos in a clean and minimalist interface that eliminates distractions and interruptions allows for focused attention on the video content. This can lead to a more immersive and effective learning experience."
                        </p>
                    </div>

                </div>

                <div class="rounded overflow-hidden shadow-lg border-2 hover:shadow-2xl">
                    <img class="w-full" src="public\images\ai.jpg" alt="River" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Automated summaries</div>
                        <p class="text-gray-700 text-base text-justify">
                            "The use of AI-powered automated summaries saves time and provides a quick overview of the key points covered in a video. This is a helpful tool for those who want to review multiple videos on the same topic or for longer videos."
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">

                    </div>
                </div>


                <div class="rounded overflow-hidden shadow-lg border-2 hover:shadow-2xl ">
                    <img class="w-full" src="public\images\quiz.jpg" alt="Forest" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Interactive quizzes</div>
                        <p class="text-gray-700 text-base text-justify">
                            "Engaging with interactive quizzes that reinforce knowledge and promote long-term retention of material can enhance the overall learning experience. Quizzes offer an opportunity to actively engage with the video content and test understanding."
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">

                    </div>
                </div>

                <div class="rounded overflow-hidden shadow-lg border-2 hover:shadow-2xl">
                    <img class="w-full" src="public\images\doubtsolving.jpg" alt="Doubt Solving" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Live doubt solving</div>
                        <p class="text-gray-700 text-base text-justify">
                            "Get real-time doubt resolution with ChatGPT, without leaving the app. This feature provides personalized learning and quick, efficient answers to enhance the overall learning experience and  also helps users to stay engaged and motivated."
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">

                    </div>
                </div>
            </div>
        </div>


    )
}

export default Benefits
