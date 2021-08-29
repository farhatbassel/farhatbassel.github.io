import thesis from "../../images/thesis.png";
import titanic from "../../images/PointPlot.png"
import houses from "../../images/houses.png"
const data = [{
        id: 1,
        image: thesis,
        title: "Master's Thesis",
        text: 'Studied the evolution of PMFs using 3D MHD equations. Currently working on the publication of the data',
        bothButtons: true,
        githubLink: "https://github.com/farhatbassel/thesisPlots",
        firstButton: 'Full Thesis',

    },
    {
        id: 2,
        image: titanic,
        title: "Learning from the disaster",
        text: 'Studied the survival rate from the titanic. Used Random Forest as best fit model.',
        bothButtons: false,
        githubLink: "https://github.com/farhatbassel/Titanic",
        firstButton: null,
    },
    {
        id: 3,
        image: houses,
        title: "Suitable Housing",
        text: 'Studied the house pricing on a housing dataset using multiple solvers. Used stacked models as best fit.',
        bothButtons: false,
        githubLink: "https://github.com/farhatbassel/housePricing",
        firstButton: null,
    }
]

export default data