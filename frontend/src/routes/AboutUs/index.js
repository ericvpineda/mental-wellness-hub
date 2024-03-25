// import EricImage from "../../assets/images/Eric.PNG"
import EricImage from "../../assets/images/eric_picture.PNG"
import React from "react";
import SamImage from "../../assets/images/sam.PNG"
import EthanImage from "../../assets/images/ethan.PNG"
import PropTypes from 'prop-types';

const TeamMember = ({ name, description, imageUrl, linkedinUrl, githubUrl }) => {
    return (
      <div
        style={{ height: "50vh" }}
        className="p-4 bg-gray-50 shadow-md rounded-md flex flex-col justify-around items-center"
      >
        <img
          src={imageUrl}
          alt={name}
          className="rounded-full w-32 h-32 mx-auto mb-4"
        />
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <div>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2 rounded-md bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            LinkedIn
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2 rounded-md bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            GitHub
          </a>
        </div>
      </div>
    );
};

const AboutUs = () => {
    const teamMembers = [
        {
            name: "Eric Pineda",
            description: "Passionate about crafting efficient solutions for web applications, with a strong focus on both frontend and backend development.",
            imageUrl: EricImage,
            linkedinUrl: "https://www.linkedin.com/in/ericvpineda/",
            githubUrl: "https://github.com/ericvpineda"
        },
        {
            name: "Sameh Fazli",
            description: "Experienced in front-end development and crafting intuitive user interfaces, passionate about backend development.",
            imageUrl: SamImage,
            linkedinUrl: "https://www.linkedin.com/in/sameh-fazli/",
            githubUrl: "https://github.com/sfazli96"
        },
        {
            name: "Ethan Gutierrez",
            description: "Specializes in full stack development, with a strong focus on API development. Devoted to building real-world solutions.",
            imageUrl: EthanImage,
            linkedinUrl: "https://www.linkedin.com/in/ethan-gutierrez-0a598124b/",
            githubUrl: "https://github.com/Ethanqg0"
        }
    ];

    return (
        <div className="min-h-[100vh] bg-gray-100 p-10">
            <h1 className="text-4xl font-bold text-center mb-8">Meet the Team</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <TeamMember key={index} name={member.name} description={member.description} imageUrl={member.imageUrl} linkedinUrl={member.linkedinUrl} githubUrl={member.githubUrl} />
                ))}
            </div>
        </div>
    );
};

export default AboutUs;

TeamMember.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    linkedinUrl: PropTypes.string.isRequired,
    githubUrl: PropTypes.string.isRequired
};
