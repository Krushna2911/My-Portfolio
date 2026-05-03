import {
 FaAws,
 FaJava
} from "react-icons/fa";

import {
 SiGooglecloud,
 SiCodecademy
} from "react-icons/si";

import { BsBriefcaseFill } from "react-icons/bs"; // for TCS


export const CERTS = [
{
 name:"AWS re/Start Graduate",
 issuer:"Amazon",
 issued:"2024",
 credential:"Graduate Program",
 category:"Cloud",
 icon: FaAws,
 bg:"#FF9900"
},

{
 name:"NASSCOM Java Completion Certificate",
 issuer:"Coding Ninjas",
 issued:"2022",
 credential:"Java Certification",
 category:"Programming",
 icon: FaJava,
 bg:"#f97316"
},

{
 name:"TCS iON Career Edge - Young Professional",
 issuer:"TCS iON",
 issued:"2021",
 credential:"Professional Skills",
 category:"Career",
 icon: BsBriefcaseFill,
 bg:"#2563eb"
},

{
 name:"Introduction to Digital Transformation with Google Cloud",
 issuer:"Coursera",
 issued:"2022",
 credential:"Cloud Fundamentals",
 category:"Cloud",
 icon: SiGooglecloud,
 bg:"#4285F4"
},

{
 name:"Innovating with Data and Google Cloud",
 issuer:"Coursera",
 issued:"2022",
 credential:"Data & Cloud",
 category:"Data",
 icon: SiGooglecloud,
 bg:"#34A853"
},

{
 name:"Codecademy Certifications (18+)",
 issuer:"Codecademy",
 issued:"2024",
 credential:"Multiple Certifications",
 category:"Programming",
 icon: SiCodecademy,
 bg:"#1f2937"
}
];