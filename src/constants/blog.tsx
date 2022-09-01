import goodfirms from "../assets/photos/blog/blogpage/goodfirms.svg";
import team from "../assets/photos/blog/blogpage/team.svg";
import clutch from "../assets/photos/blog/blogpage/clutch.svg";
import blog from "../assets/photos/blog/blogpage/blog.svg";
import { Blog } from "../types/Blog";

export const BlogTopics: Blog[] = [
    {
        id: 1,
        title: "Got It Agency Has Paved Its Way to Thrive by Offering Great Business Solutions: GoodFirms",
        date: "23 September, 2021",
        photo: goodfirms,
        text: "Providing robust solutions to clients and making their business stand out in the market would soon endow Got It Agency as one of the top web developme...",
        chapter: "News",
        link: "/got-it-agency-has-paved-its-way-to-thrive-by-offering-great-business-solutions-goodfirms/"
    },
    {
        id: 2,
        title: "Dedicated Team Services",
        date: "23 April, 2021",
        photo: team,
        text: "So you decided to get some assistance with software development. You had a number of interviews, discussions and finally chose a vendor. Now the quest...",
        chapter: "Web",
        link: "/dedicated-team-services/"
    },
    {
        id: 3,
        title: "Got It Agency Named to Clutch 2019 Top Eastern European",
        date: "12 January, 2021",
        photo: blog,
        text: "Got It Agency is proud to announce that we have been recognized as a top company in Ukraine by Clutch, a leading ratings and reviews platform.   ...",
        chapter: "News",
        link: "/the-launch-of-our-new-website-blog/"
    },
    {
        id: 4,
        title: "We're proud to announce the launch of our new Website & Blog",
        date: "28 January, 2021",
        photo: clutch,
        text: "The wait is finally over! We are delighted to announce the launch of our new website and blog. The structure of the website has been redesigned making...",
        chapter: "News",
        link: "/got-it-agency-named-to-clutch-2019-top-eastern-european/"
    },
]