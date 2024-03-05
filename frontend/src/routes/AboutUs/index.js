import React from "react";

const TeamMember = ({ name, description, imageUrl, linkedinUrl }) => {
    return (
        <div className="text-center p-8">
            <img src={imageUrl} alt={name} className="rounded-full w-32 h-32 mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">{name}</h2>
            <p className="text-gray-700 mb-4">{description}</p>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">LinkedIn</a>
        </div>
    );
};

const AboutUs = () => {
    const teamMembers = [
        {
            name: "Eric Pineda",
            description: "Passionate about creating scalable and efficient solutions for web applications.",
            imageUrl: "john-doe.jpg",
            linkedinUrl: "https://www.linkedin.com/in/johndoe"
        },
        {
            name: "Ethan Guitteriez",
            description: "Experienced in front-end development and crafting intuitive user interfaces.",
            imageUrl: "jane-smith.jpg",
            linkedinUrl: "https://www.linkedin.com/in/janesmith"
        },
        {
            name: "Sameh Fazli",
            description: "Specializes in backend development and architecting robust server systems.",
            imageUrl: "alex-johnson.jpg",
            linkedinUrl: "https://www.linkedin.com/in/alexjohnson"
        }
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold text-center mb-8">Meet the Team</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <TeamMember key={index} name={member.name} description={member.description} imageUrl={member.imageUrl} linkedinUrl={member.linkedinUrl} />
                ))}
            </div>
        </div>
    );
};

export default AboutUs;
