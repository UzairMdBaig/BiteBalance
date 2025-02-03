import React from "react"
import SignIn from "./components/SignIn"
import Card from "./components/Card"

export default function Intro(){
    return(
        <div className="scrollbar-hide">
            <section className="flex flex-col h-screen gap-10 bg-oranges_in_green_dark bg-center bg-cover bg-no-repeat bg-opacity-100  bg-fixed justify-center items-center scrollbar-hide sm:flex-row sm:p-20 sm:bg-avocado_dark sm:justify-between sm:items-center">
                <div className="text-center">
                <h1 className="font-roboto text-white font-bold text-7xl sm:text-left sm:text-8xl sm:font-bold">BiteBalance</h1>
                <p className="text-white text-3xl sm:text-4xl sm:text-left sm:ml-2">Where cravings meet health</p>
                </div>

                <SignIn />
            </section>
            <section className="h-screen bg-gray-300 bg-cover pl-8 pt-8 sm:p-12 sm:white_2 sm:flex sm:flex-col sm:gap-32">
                <h2 className="text-black font-roboto font-bold text-4xl mb-12 sm:mb-4 sm:mt-8 sm:text-5xl">Whats BiteBalance ? 🥕 </h2>
                <p className="text-xl text-black sm:text-2xl">BiteBalance is an innovative health and wellness platform that leverages the power of advanced AI technologies, including Retrieval-Augmented Generation (RAG) models and ChatGPT-4, to provide personalized recipe recommendations tailored to individual health conditions. Whether you're managing diabetes, celiac disease, or other dietary restrictions, BiteBalance offers a unique solution that blends your culinary preferences with medically sound nutritional advice.<br></br><br></br> Our goal is to help you maintain a balanced and enjoyable diet by delivering recipes that not only cater to your specific health needs but also satisfy your taste buds. Discover a new way to enjoy healthy eating with BiteBalance, where cravings meet health in perfect harmony.</p>
            </section>
            <section className="h-full bg-gray-300 bg-cover pl-8 pt-8 sm:p-12 sm:white_2 sm:flex sm:flex-col sm:gap-32 sm:h-screen">
                <h2 className="text-black font-roboto font-bold text-4xl mb-16 sm:mb-4 sm:mt-8 sm:text-5xl">How to use it ? 🍉 </h2>
                <div className="flex flex-col items-center gap-8 pb-8 sm:flex-row sm:justify-around">
                    <Card content="Create Account" logo="src\images\auth.png" />
                    <Card content="State Conditions" logo="src\images\health.png" />
                    <Card content="Ask Recipies" logo="src\images\llm.png" />
                </div>
            </section>
            <section className="h-24 p-8  bg-gray-800 text-gray-500 text-lg">
                <p>BiteBalance</p>
            </section>
            
        </div>
    )
}