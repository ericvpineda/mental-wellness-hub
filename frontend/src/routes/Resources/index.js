import React from "react";
import PropTypes from 'prop-types';
import AnxietyImage from '../../assets/images/understanding_anxiety.jpg'
import ManagingStressImage from '../../assets/images/stress.jpg'
import SelfCare from '../../assets/images/self_care.jpg'
import UnderstandingBipolar from '../../assets/images/understanding_bipolar.jpg'
import MediationImage from '../../assets/images/mediation.jpg'
import MentalHealthImage from '../../assets/images/mental_health.jpg'
import HealthyRelationshipImage from '../../assets/images/healthy_relationship.jpg'
import DepressionImage from '../../assets/images/depression.jpg'

const ResourceItem = ({ title, link, description, imgSrc }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <a
        className="font-semibold text-blue-500 underline hover:text-blue-700 visited:text-purple-600 hover:underline"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
      {imgSrc && (
        <img src={imgSrc} alt={title} className="object-cover w-full h-64" />
      )}
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

const Resources = () => {

  const articles = [
    {
      title: "Understanding Anxiety Disorders",
      link: "https://www.nimh.nih.gov/health/topics/anxiety-disorders",
      description: "Learn practical strategies to handle stress in your everyday life.",
      imgSrc: AnxietyImage
    },
    {
      title: "Tips for Managing Stress",
      link: "https://www.webmd.com/balance/tips-to-control-stress",
      description: "Explore the different forms of anxiety and the available therapies.",
      imgSrc: ManagingStressImage
    },
    {
      title: "Importance of Self-Care",
      link: "https://www.snhu.edu/about-us/newsroom/health/what-is-self-care",
      description: "Discover the benefits of self-compassion and how to cultivate it.",
      imgSrc: SelfCare
    },
    {
      title: "Healthier Relationships = Better Health",
      link: "https://www.pinerest.org/newsroom/articles/healthier-relationships-better-health-blog/",
      description: "Read this article to explore how to have healthier relationships",
      imgSrc: HealthyRelationshipImage
    }
  ];


  const hotlinks = [
    { title: "National Suicide Prevention Lifeline", link: "https://988lifeline.org/", description: "Call 1-800-273-TALK (8255) for 24/7 confidential support." },
    { title: "Anxiety and Depression Association of America (ADAA)", link: "https://adaa.org/", description: "Access information, resources, and support for anxiety and depression." },
    { title: "NAMI HelpLine", link: "https://www.nami.org/help", description: "Call the National Alliance on Mental Illness for information, referrals, and support." }
  ];

  const videos = [
    { title: "Understanding Bipolar Disorder: Personal Stories", link: "https://www.youtube.com/watch?v=O4D8XIsoU0Y", description: "Hear from individuals living with bipolar disorder about their experiences and insights.", imgSrc: UnderstandingBipolar },
    { title: "Mindfulness Meditation: Finding Calm in the Present", link: "https://www.youtube.com/watch?v=O4D8XIsoU0Y", description: "Join this guided meditation session to practice mindfulness and relaxation.", imgSrc: MediationImage },
    { title: "Breaking the Silence: Youth Mental Health", link: "https://www.youtube.com/watch?v=O4D8XIsoU0Y", description: "Watch this panel discussion on addressing mental health challenges among young people.", imgSrc: MentalHealthImage },
    {
      title: "Understanding Depression: Symptoms and Treatments",
      link: "https://www.youtube.com/watch?v=d7NPnvKFs2Y",
      description: "Learn about the symptoms of depression and the various treatment options available.",
      imgSrc: DepressionImage
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-12 lg:py-24">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mental Health Resources</h1>
            <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Access a curated collection of mental health articles, hotlinks, and videos to support your well-being.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto py-12 lg:py-24 min-w-screen">
        <div className="grid items-start justify-center gap-4 px-4 md:gap-8 md:px-6">
          <div className="flex flex-col items-center space-y-2 mt-[-8rem]">
            <img src={MediationImage} alt="Meditation" className="object-cover w-full h-[38rem] object-top rounded-lg" />
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Meditation for Relaxation</h2>
            <p className="text-gray-500 dark:text-gray-400">Take a moment to practice mindfulness and relaxation through meditation.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12 lg:py-24">
        <div className="grid items-start justify-center gap-4 px-4 md:gap-8 md:px-6">
          <div className="flex flex-col space-y-2">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Articles</h2>
            <p className="text-gray-500 dark:text-gray-400">Informative reads</p>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-center gap-6 md:grid-cols-2 md:gap-8 lg:gap-10 max-w-screen-md mx-auto">
            {articles.map((article, index) => (
              <ResourceItem key={index} title={article.title} link={article.link} description={article.description} imgSrc={article.imgSrc} />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12 lg:py-24">
        <div className="grid items-start justify-center gap-4 px-4 md:gap-8 md:px-6">
          <div className="flex flex-col space-y-2">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Hotlinks</h2>
            <p className="text-gray-500 dark:text-gray-400">Quick access resources</p>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-center gap-6 md:grid-cols-2 md:gap-8 lg:gap-10 max-w-screen-md mx-auto">
            {hotlinks.map((hotlink, index) => (
              <ResourceItem key={index} title={hotlink.title} link={hotlink.link} description={hotlink.description} />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12 lg:py-24">
        <div className="grid items-start justify-center gap-4 px-4 md:gap-8 md:px-6">
          <div className="flex flex-col space-y-2">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Videos</h2>
            <p className="text-gray-500 dark:text-gray-400">Educational content</p>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-center gap-6 md:grid-cols-2 md:gap-8 lg:gap-10 max-w-screen-md mx-auto">
            {videos.map((video, index) => (
              <ResourceItem key={index} title={video.title} link={video.link} description={video.description} imgSrc={video.imgSrc} />
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default Resources;

ResourceItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired
};
