import thesis from "../../images/thesis.png";
import titanic from "../../images/PointPlot.png"
import social from "../../images/SocialMedia.jpg"

const data = [{
        id: 1,
        image: thesis,
        title: "Master's Thesis",
        text: 'Studied the evolution of PMFs using 3D MHD equations. Currently working on the publication of the data',
        bothButtons: true,
        githubLink: "https://github.com/farhatbassel/thesisPlots",
        firstButton: 'Full Thesis',
        kaggle: false,
        cssReference: 'thesis',
    },
    {
        id: 2,
        image: social,
        title: "Social Media Website",
        text: 'Created a Social Media account using MERN technologies',
        bothButtons: false,
        githubLink: "https://github.com/farhatbassel/social-media-app",
        firstButton: null,
        kaggle: false,
        cssReference: 'social',
    },
    {
        id: 3,
        image: titanic,
        title: "Data Analysis",
        text: 'Studied multiple data sets using different visualization technics and machine learning algorithms',
        bothButtons: false,
        githubLink: "https://www.kaggle.com/farhatbassel",
        firstButton: null,
        kaggle: true,
        cssReference: 'titanic',
    }
]

export default data