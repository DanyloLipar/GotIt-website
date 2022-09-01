import { Award } from "../types/Award";
import badge from "../assets/photos/awards/badge.svg";
import clucth from "../assets/photos/awards/clutch.svg";
import web from "../assets/photos/awards/web.svg";
import goodfirms from "../assets/photos/awards/goodfirms.svg";
import ui from "../assets/photos/awards/ui-ux.svg";
import clutchTwo from "../assets/photos/awards/clutch-2019.svg";
import manifest from "../assets/photos/awards/manifest.svg";
import mobile from "../assets/photos/awards/mobile.svg";


export const allAwards: Award[] = [
    {
        id: 1,
        image: badge,
        alt: 'badge'
    },
    {
        id: 2,
        image: clucth,
        alt: 'clutch'
    },
    {
        id: 3,
        image: web,
        alt: 'web'
    },
    {
        id: 4,
        image: goodfirms,
        alt: 'badge'
    },
    {
        id: 5,
        image: ui,
        alt: 'ui'
    },
    {
        id: 6,
        image: clutchTwo,
        alt: 'clutchTwo'
    },
    {
        id: 7,
        image: manifest,
        alt: 'manifest'
    },
    {
        id: 8,
        image: mobile,
        alt: 'mobile'
    },
]