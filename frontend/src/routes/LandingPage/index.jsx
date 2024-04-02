// import { Link } from 'react-router-dom'
import React from 'react';
import Faq from "../Faq/index";
import { useNavigate } from "react-router-dom";
import "../../globals.css";
import {
  BookOpenIcon,
  ClockIcon,
  ChatBubbleBottomCenterIcon,
  FingerPrintIcon,
} from "@heroicons/react/24/outline";

// import ChatbotAI from '../../components/chatbotAI'
const features = [
  {
    name: "CBT Sessions",
    description:
      "With our bot, KelvinAI, we offer a guider to walk you through Cognitive Behavioral Therapy sessions.",
    icon: ChatBubbleBottomCenterIcon,
  },
  {
    name: "Journaling",
    description:
      "We provide a journaling feature to help you track your thoughts and feelings, and identify patterns in your behavior.",
    icon: BookOpenIcon,
  },
  {
    name: "Meditation Timer",
    description:
      "Our meditation timer and guides help you to practice mindfulness and reduce stress and anxiety.",
    icon: ClockIcon,
  },
  {
    name: "Personalized Dashboard",
    description:
      "We offer a personalized dashboard to help you track your progress and set goals for your mental health journey.",
    icon: FingerPrintIcon,
  },
];

export default function Template() {
  const navigate = useNavigate();

  return (
    <main>
      <section id="HeroSection" className="bg-white py-12 lg:py-36">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-8 lg:px-6">
          <svg
            className="hidden md:absolute md:block left-0 xl:right-24 inset-0 z-10 h-full w-full stroke-gray-300 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
            />
          </svg>
          <div className="space-y-2 mx-auto flex flex-col gap-4 justify-center items-center">
            <h1 className="z-10 font-bold tracking-tighter text-5xl md:text-7xl lg:text-7xl">
              Free Mental Health Support
            </h1>
            <p className="z-10 mx-auto font-medium max-w-2xl text-gray-600 md:text-xl lg:text-base xl:text-xl dark:text-gray-400 mt-11">
              Explore our comprehensive library of resources designed to improve
              your mental well-being without the cost barrier.
            </p>
          </div>
        </div>
      </section>

      <section id="MissionStatement z-50">
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
                    {" "}
                    <span
                      aria-hidden="true"
                      onClick={() => {
                        navigate("/dashboard");
                      }}
                    >
                      Get Started &rarr;
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600"></h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Resources to help you thrive.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              On our services page, you can find a variety of resources used to
              assist in mental wellness.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <Faq />

      <section
        style={{ height: "20vh" }}
        className="w-full flex justify-center items-center"
      >
        {" "}
        <span
          aria-hidden="true"
          className="cursor-pointer"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Get Started &rarr;
        </span>
      </section>
    </main>
  );
}
