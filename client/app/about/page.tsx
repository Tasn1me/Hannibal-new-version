"use client"
import React from "react";
import './about.css';
//import 'https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css';
//import 'https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';

const About: React.FC  = () => {
  return (
    <div>
    <div>
    <section className="relative bg-blueGray-50">
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div className="absolute top-0 w-full h-full bg-center bg-cover " id="sth">
          <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  Your story starts with us.
                </h1>
                <p className="mt-4 text-lg text-blueGray-200">
                  We worked Hard On this Project Please Support Us
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px transform: translateZ(0px)">
          <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </div>
      <section className="pb-10 bg-blueGray-200 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Extensive Product Range</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                  Explore a diverse and carefully curated selection of products across various categories.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                    <i className="fas fa-retweet"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Unbeatable Prices</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                  Enjoy competitive prices and exclusive deals that make your shopping experience not only delightful but also budget-friendly.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Fast and Reliable Shipping</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                  Experience prompt delivery with our efficient shipping services. We understand the excitement of receiving your purchases, and we strive to get them to you as quickly as possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
           <footer className="relative  pt-8 pb-6 mt-1">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-6/12 px-4 mx-auto text-center">
      </div>
    </div>
  </div>
</footer></div>
      </section>
    </section></div>
<div className="w-full bg-gray-800">
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
            <h2 className="text-base font-bold text-indigo-600">
                We have the best equipment in the market
            </h2>
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
                Check our awesome team memwhite            
            </h1>
        </div>
        <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-3 gap-2 items-center">
            <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <div className="mb-8">
                    <img className="object-center object-cover rounded-full h-36 w-36" src="https://www.shutterstock.com/image-vector/businessman-icon-260nw-564112600.jpg" alt="photo"/>
                </div>
                <div className="text-center">
                    <p className="text-xl text-white font-bold mb-2">Oussema Cherif</p>
                    <p className="text-base text-gray-400 font-normal">Scrum Master</p>
                </div>
            </div>
            <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <div className="mb-8">
                    <img className="object-center object-cover rounded-full h-36 w-36" src="https://www.shutterstock.com/image-vector/businessman-icon-260nw-564112600.jpg" alt="photo"/>
                </div>
                <div className="text-center">
                    <p className="text-xl text-white font-bold mb-2">Salmen Khelifi</p>
                    <p className="text-base text-gray-400 font-normal"> Web Developper</p>
                </div>
            </div>
            <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <div className="mb-8">
                    <img className="object-center object-cover rounded-full h-36 w-36" src="https://thumbs.dreamstime.com/b/black-business-woman-icon-white-background-black-business-woman-icon-130556016.jpg" alt="photo"/>
                </div>
                <div className="text-center">
                    <p className="text-xl text-white font-bold mb-2">Tasnime Ouertani</p>
                    <p className="text-base text-gray-400 font-normal">Web Developper</p>
                </div>
            </div>
            <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <div className="mb-8">
                    <img className="object-center object-cover rounded-full h-36 w-36" src="https://www.shutterstock.com/image-vector/businessman-icon-260nw-564112600.jpg" alt="photo"/>
                </div>
                <div className="text-center">
                    <p className="text-xl text-white font-bold mb-2">Hamza ben jemaa</p>
                    <p className="text-base text-gray-400 font-normal">Web Developper</p>
                </div>
            </div>
            <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <div className="mb-8">
                    <img className="object-center object-cover rounded-full h-36 w-36" src="https://www.shutterstock.com/image-vector/businessman-icon-260nw-564112600.jpg" alt="photo"/>
                </div>
                <div className="text-center">
                    <p className="text-xl text-white font-bold mb-2">Azib Jeziri</p>
                    <p className="text-base text-gray-400 font-normal">Web Developper</p>
                </div>
            </div>
        </div>
    </section>
</div>
    </div>
  );
};

export default About;