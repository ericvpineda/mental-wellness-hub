// import { Link } from 'react-router-dom'
import StressImage from '../../assets/images/stress.jpg'
import AnxietyImage from '../../assets/images/understanding_anxiety.jpg'
import GratitudeImage from '../../assets/images/practice_gratitude.jpg'
import TherapyImage from '../../assets/images/therapy.png'
import ImageItem from '../../components/ImageItem'
import React from 'react';

// import ChatbotAI from '../../components/chatbotAI'


export default function Template() {

  return (
    <>
      <div className="flex justify-center items-center bg-gray-50 py-12 lg:py-16">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-8 lg:px-6">
          <div className="space-y-2 mx-auto">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Your Mental Health Matters
            </h1>
            <p className="mx-auto max-w-2xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Resources and support for your mental well-being.
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 lg:py-16 flex justify-center">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-8 lg:px-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Relaxation Techniques Demo
            </h2>
            <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Watch our video to learn simple relaxation techniques that can
              help you de-stress.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/tEmt1Znux58"
              frameBorder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="border-t border-b divide-y flex justify-center items-center">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-8 lg:px-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Articles
            </h2>
            <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore our collection of articles covering various mental health
              topics.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 justify-center border">
            <ImageItem
              image={StressImage}
              headline={"Coping with Stress"}
              link={
                "https://www.helpguide.org/articles/stress/stress-management.htm/"
              }
            >
              Explore easy-to-implement strategies for managing daily stress and
              enhancing your well-being.
            </ImageItem>
            <ImageItem
              image={AnxietyImage}
              headline={"Understanding Anxiety"}
              link={
                "https://newsinhealth.nih.gov/2016/03/understanding-anxiety-disorders"
              }
            >
              Information about different types of anxiety and available
              treatments.
            </ImageItem>
            <ImageItem
              image={GratitudeImage}
              headline={"Practicing Gratitude"}
              link={
                "https://www.mindful.org/an-introduction-to-mindful-gratitude/"
              }
            >
              The benefits of gratitude and tips for incorporating it into your
              life.
            </ImageItem>
            <ImageItem
              image={TherapyImage}
              headline={"Seeking Help: Therapy Options"}
              link={
                "https://www.helpguide.org/articles/mental-health/finding-a-therapist-who-can-help-you-heal.html"
              }
            >
              Information about different types of therapy and how to find the
              right therapist.
            </ImageItem>
          </div>
        </div>
      </div>
      {/* <ChatbotAI /> */}
    </>
  );
}
