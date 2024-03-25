// import { Link } from 'react-router-dom'
import React from 'react';
import Faq from "../Faq/index";
import "../../globals.css";

// import ChatbotAI from '../../components/chatbotAI'


export default function Template() {
  return (
    <main>
      <section
        id="HeroSection"
        className="flex justify-center items-center bg-white py-12 lg:py-16"
      >
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-8 lg:px-6">
          <div
            style={{ height: "40vh" }}
            className="space-y-2 mx-auto flex flex-col justify-center items-center"
          >
            <h1 className="font-bold tracking-tighter text-5xl md:text-7xl">
              Free Mental Health Support
            </h1>
            <p className="mx-auto font-medium max-w-2xl text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore our comprehensive library of resources designed to improve
              your mental well-being without the cost barrier.
            </p>
          </div>
        </div>
      </section>

      <section id="MissionStatement">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-4">
                <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                  <img
                    className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                    src="https://images.unsplash.com/photo-1630569267625-157f8f9d1a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" />
                  <div
                    className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                    aria-hidden="true"
                  >
                    <div
                      className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-40"
                      style={{
                        clipPath:
                          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                      }}
                    />
                  </div>
                  <figure className="relative isolate">
                    <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
                      <p>
                        “Studies have found CBT to be very effective for
                        treating less severe forms of depression, anxiety,
                        post-traumatic stress disorder (PTSD), and other
                        conditions.”
                      </p>
                    </blockquote>
                    <figcaption className="mt-6 text-sm leading-6 text-gray-300">
                      <strong className="font-semibold text-white">
                        Gerald Gartlehner (June 2017)
                      </strong>
                      {"\n"}
                      <br></br>
                      Physician, health scientiest, and clinical epidemiologist.
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div>
                <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                  <p className="text-base font-semibold leading-7 text-indigo-600">
                    Our Mission
                  </p>
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Make mental health accessible.
                  </h1>
                  <div className="max-w-xl">
                    <p className="mt-6">
                      Therapy has been proven to be an effective way to improve
                      mental health and well-being. However, the cost of therapy
                      can be a barrier for many people. Our mission is to
                      provide free mental health resources to everyone,
                      regardless of their financial situation.
                    </p>
                    <p className="mt-8">
                      We provide educational content on mental health and
                      therapy strategies, aiming to educate and empower
                      individuals to take control of their mental health.
                      Additionally, we offer services such as cognitive
                      behavioral therapy, meditation timers, and journaling
                      prompts.
                    </p>
                    <p className="mt-8"></p>
                  </div>
                </div>

                <div className="mt-10 flex">
                  <a
                    href="#"
                    className="text-base font-semibold leading-7 text-indigo-600"
                  >
                    Learn more about our company{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Faq />
      <section
        style={{ height: "20vh" }}
        className="w-full flex justify-center items-center"
      >
      </section>
    </main>
  );
}
