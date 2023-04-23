import React from 'react'
import Header from './header';
import { Link } from 'react-router-dom'
import Benefits from './benefits'
const Homebody = () => {
  return (
    <div>
      <Header />

      <div className="h-screen w-full flex">
        <div className="w-1/2  p-14 mt-4">

          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl  text-transparent  bg-clip-text bg-gradient-to-r from-bele2 to-bele1">Your One-Stop Learning Solution.</h1>
          <p className="mb-6 text-lg font-normal text-gray-700 lg:text-xl dark:text-gray-400 text-justify">Welcome to CourseVerse, the platform that lets you learn anything with ease. Whether you want to improve your web development skills, cook like a chef, or learn a new language, we've got you covered. Our distraction-free environment lets you import any playlist and watch it without interruptions, so you can learn more efficiently and effectively. Sign up now to discover a new world of learning and unleash your full potential!.</p>
          <Link to="/import">
            <button className="bg-gradient-to-r from-bele2 to-bele1 hover:bg-gradient-to-r hover:from-cyan-800 hover:to-indigo-900 box-shadow hover:focus:shadow-none text-xl font-medium text-white py-3 px-5 rounded-full">Get Started</button>
          </Link>


        </div>

        <div className=" w-1/2 ml-10 py-16 mt-1 ">
          <img className="  " src='images/home1.png' />
        </div>

      </div>

    <Benefits />
      <div className="h-screen w-full flex">


        <div className="container my-14 px-6 mx-auto bg-gradient-to-r from-bele2 to-bele1">

          <section className="mb-32 text-gray-800 text-center ">

            <h2 className=" text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl  text-white mt-8 mb-16">Testimonials</h2>

            <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
              <div className="mb-12 md:mb-0 overflow-hidden shadow-lg  hover:shadow-2xl bg-white rounded-3xl px-4 py-8">
                <div className="flex justify-center mb-6">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" className="rounded-full shadow-lg w-32" />
                </div>
                <h5 className="text-lg font-bold mb-4">Maria Smantha</h5>
                <h6 className="font-medium text-blue-600 mb-4">Web Developer</h6>
                <p className="mb-4">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left"
                    className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
                    </path>
                  </svg>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic
                  tenetur quae quaerat ad velit ab hic tenetur.
                </p>
                <ul className="flex justify-center mb-0">
                  <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500"
                      role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                      </path>
                    </svg>
                  </li>
                  <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500"
                      role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                      </path>
                    </svg>
                  </li>
                  <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500"
                      role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                      </path>
                    </svg>
                  </li>
                  <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500"
                      role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                      </path>
                    </svg>
                  </li>
                  <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star-half-alt"
                      className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 536 512">
                      <path fill="currentColor"
                        d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z">
                      </path>
                    </svg>
                  </li>
                </ul>
              </div>
              <div className="mb-12 md:mb-0 overflow-hidden shadow-lg  hover:shadow-2xl bg-white rounded-3xl px-4 py-8">
                <div className="flex justify-center mb-6 ">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg" className="rounded-full shadow-lg w-32" />
                </div>
                <h5 className="text-lg font-bold mb-4">Lisa Cudrow</h5>
                <h6 className="font-medium text-blue-600 mb-4">Graphic Designer</h6>
                <p className="mb-4">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left"
                    className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
                    </path>
                  </svg>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                  laboriosam, nisi ut aliquid commodi.
                </p>
                <ul className="flex justify-center mb-0">
                  <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500"
                      role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                      </path>
                    </svg>
                  </li>
                  <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500"
                      role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                      </path>
                    </svg>
                  </li>
                  <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500"
                      role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                      </path>
                    </svg>
                  </li>
                  <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500"
                      role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                      </path>
                    </svg>
                  </li>
                  <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500"
                      role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                      </path>
                    </svg>
                  </li>
                </ul>
              </div>
              <div className="mb-0 overflow-hidden shadow-lg  hover:shadow-2xl bg-white rounded-3xl px-4 py-8">
                <div className="flex justify-center mb-6">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" className="rounded-full shadow-lg w-32" />
                </div>
                <h5 className="text-lg font-bold mb-4">John Smith</h5>
                <h6 className="font-medium text-blue-600 mb-4">Marketing Specialist</h6>
                <p className="mb-4">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left"
                    className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
                    </path>
                  </svg>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                  voluptatum deleniti atque corrupti.
                </p>
                <ul className="flex justify-center mb-0">
                  <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500"
                      role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                      </path>
                    </svg>
                  </li>
                  <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500"
                      role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                      </path>
                    </svg>
                  </li>
                  <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500"
                      role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                      </path>
                    </svg>
                  </li>
                  <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500"
                      role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                      </path>
                    </svg>
                  </li>
                  <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" className="w-4 text-yellow-500"
                      role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="currentColor"
                        d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z">
                      </path>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>

          </section>

        </div>


      </div>
      <div className="h-screen w-full flex">

        <div className="container my-24 px-6 mx-auto">


          <section className="mb-32 text-center text-gray-900 ">
            <div className="max-w-[500px] mx-auto px-3 lg:px-6  p-8 shadow-lg  hover:shadow-2xl bg-gradient-to-r from-bele2 to-bele1 rounded-3xl">
              <h2 className="text-3xl font-bold mb-12 text-white">Contact us</h2>
              <div >
                <div className="form-group mb-6">
                  <input type="text" className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-900 border border-black
            placeholder-gray-800
              bg-transparent
              rounded-full
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:border-blue-600 focus:outline-none  bg-white text-bbg" id="exampleInput7" 
                    placeholder="Name" />
                </div>
                <div className="form-group mb-6">
                  <input type="email" className="form-control block            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-900
            border border-black
            bg-transparent
            placeholder-gray-800
            rounded-full
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none bg-white text-bbg" id="exampleInput8"
                    placeholder="Email address" />
                </div>
                <div className="form-group mb-6">
                  <textarea className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            placeholder-gray-800
            bg-transparent
            border border-black
            rounded-xl
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none bg-white text-bbg
          " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                </div>
                <div className="form-group form-check text-center mb-6">
                  <input type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                    id="exampleCheck87" readOnly />
                  <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck87">Send me a copy of this
                    message</label>
                </div>
                <button type="submit" className="
          w-full
          px-6
          py-2.5
          bg-blue-600
          
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out bg-bbg text-bele2 ">Send</button>
              </div>
            </div>
          </section>


        </div>

      </div>

    
    </div>

  )
}

export default Homebody
