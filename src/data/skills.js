import {
 FaReact,
 FaPython,
 FaAws,
 FaDocker,
 FaGitAlt,
 FaJava,
 FaLinux
} from "react-icons/fa";

import {
 SiMongodb,
 SiTailwindcss,
 SiSpringboot,
 SiMysql,
 SiHibernate,
 SiNumpy,
 SiPandas
} from "react-icons/si";


export const SKILLS = {

Frontend:[
 {name:"React", level:85},
 {name:"JavaScript", level:85},
 {name:"HTML/CSS", level:90},
 {name:"Tailwind", level:82},
 {name:"Bootstrap", level:85}
],

Backend:[
 {name:"Java", level:88},
 {name:"Spring Boot", level:84},
 {name:"Spring MVC", level:82},
 {name:"Node.js", level:75},
 {name:"REST APIs", level:85}
],

Database:[
 {name:"MySQL", level:85},
 {name:"MongoDB", level:72},
 {name:"JPA/Hibernate", level:80},
 {name:"Query Optimization", level:76}
],

Cloud:[
 {name:"AWS", level:82},
 {name:"Lambda", level:80},
 {name:"RDS", level:78},
 {name:"CloudFormation", level:76},
 {name:"CI/CD", level:75}
],

"Data Science":[
 {name:"Python", level:85},
 {name:"NumPy", level:80},
 {name:"Pandas", level:78},
 {name:"Seaborn", level:75},
 {name:"Matplotlib", level:76}
],

Tools:[
 {name:"Git/GitHub", level:85},
 {name:"Linux", level:80},
 {name:"Maven", level:75},
 {name:"VS Code", level:88}
]

};


export const TECH_MARQUEE = [
 {name:"Java", icon:FaJava},
 {name:"React", icon:FaReact},
 {name:"Spring Boot", icon:SiSpringboot},
 {name:"Python", icon:FaPython},
 {name:"AWS", icon:FaAws},
 {name:"Docker", icon:FaDocker},
 {name:"MySQL", icon:SiMysql},
 {name:"Hibernate", icon:SiHibernate},
 {name:"NumPy", icon:SiNumpy},
 {name:"Pandas", icon:SiPandas},
 {name:"Git", icon:FaGitAlt},
 {name:"Linux", icon:FaLinux},
 {name:"Tailwind", icon:SiTailwindcss},
 {name:"MongoDB", icon:SiMongodb}
];


export const SKILL_COLORS = {
Frontend:{
 grad:"linear-gradient(135deg,#7c3aed,#4f46e5)"
},

Backend:{
 grad:"linear-gradient(135deg,#10b981,#0d9488)"
},

Database:{
 grad:"linear-gradient(135deg,#2563eb,#06b6d4)"
},

Cloud:{
 grad:"linear-gradient(135deg,#f59e0b,#fb923c)"
},

"Data Science":{
 grad:"linear-gradient(135deg,#d97706,#f43f5e)"
},

Tools:{
 grad:"linear-gradient(135deg,#64748b,#334155)"
}
};