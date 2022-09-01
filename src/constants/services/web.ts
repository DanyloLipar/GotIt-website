import { Lifecycle } from "../../types/Lifecycle";
import requirement from "../../assets/photos/services/web/requirement.svg";
import design from "../../assets/photos/services/web/design.svg";
import dev from "../../assets/photos/services/web/dev.svg";
import launch from "../../assets/photos/services/web/launch.svg";
import support from "../../assets/photos/services/web/support.svg";

export const devLifecycle: Lifecycle[] = [
    {
        id: 1,
        title: "Requirement discovery",
        text: "Our web app development team offers progressive web apps and multi-tenant SaaS apps based on modern frameworks, including React, Vue, Angular, and ASP.NET MVC. All the developed solutions are mobile responsive, intuitive, and backward/forward compatible.",
        icon: requirement,
    },
    {
        id: 2,
        title: "Design & Prototype creation",
        text: "Prototyping helps not only to identify and formulate the main direction of the design but also significantly save time. But this is not the only reason to devote time to the prototype. We can safely assume that the prototype will be equally useful to both parties. It allows you to make the process of creating a site understandable, controllable and more comfortable for both parties. This development stage also helps understand how the web application will look like and make the desired changes if necessary.",
        icon: design,
    },
    {
        id: 3,
        title: "Development & Testing",
        text: "Development and testing are at the core of Got It Agency services. This is usually the most time-consuming phase consisting of application coding, user documentation creation, and quality assurance. Using the most advanced web development technologies and solutions, including Angular, React, Vue, and ASP.Net MVC, our team creates a responsive web app ready for deployment. After the rigorous testing on mobile and desktop devices, the application is sure to provide an ultimate user experience.",
        icon: dev,
    },
    {
        id: 4,
        title: "Launch & Measure",
        text: "Once the our quality assurance team shows the green flag for the web app, it is deployed to the server using FTP (File Transfer Protocol). At Techuz we use, deploy the web apps to the servers using, Github, Bitbucket and FileZilla. The web development process doesn’t end after deployment. There are several post-deployment tasks to be carried out by the web development team such as providing the clients with the source code and project documents, working on their feedbacks and the post-deployment support and maintenance. This stage holds equal gravity because the real purpose of the web app starts once it’s live for the users. Further changes according to the user’s feedback, support and maintenance as well as new updates are equally necessary.",
        icon: launch,
    },
    {
        id: 5,
        title: "Maintenance & Suport",
        text: "The final stage of software development lifecycle includes maintenance and regular updates. The phase is treated with the utmost attention since during the stage the product is polished, upgraded, enhanced and fine-tuned according to the real-world feedbacks on its performance. That’s exactly a perfect timing to robust the application’s functionalities to upgrade its performance and modify according to the actual needs of the end-user add new capabilities or meet additional user requirements.",
        icon: support,
    },
]