import { Comments, Counter, Item, Services, SubItemLabel, Support } from "@/modal/index";
import web from '../../assets/img/world-www.svg';
import interfaces from '../../assets/img/interface-align-layers-1-design-layer-layers-pile-stack.svg';
import app from '../../assets/img/more-app.svg';
import coding from '../../assets/img/coding.jpg';
import UX from '../../assets/img/UX.jpg';
import Lidaship from "../../assets/img/Lidaship.jpg";
import contenti from '../../assets/img/contenti.jpg';
import dijyito from '../../assets/img/dijyito.jpg';
import metenase from '../../assets/img/metenase.jpg';
import secyuriti from '../../assets/img/secyuriti.jpg';
import consiritasiyo from '../../assets/img/consiritasiyo.jpg';
import AppCons from '../../assets/img/AppCons.jpg';
import IT from '../../assets/img/support.svg';
import training from '../../assets/img/school.svg';
import maintenance from '../../assets/img/maintenance.svg';
import multimedia from '../../assets/img/multimedia.svg';
import marketing from '../../assets/img/social-joomla.svg';
import network from '../../assets/img/network-alt.svg';

export const content: Item[] = [
{
    title: "Software Development",
    label: "Network technology just testing",
    items: [
    {value: 'Now this is a story all about how, my life got flipped-turned upside down'},
    {value: 'Now this is a story all about how, my life got flipped-turned upside down'},
    {value: 'Now this is a story all about how, my life got flipped-turned upside down'},
    ]
},
{
    title: "Networking",
    label: "Network technology just testing",
    items: [
    {value: 'Now this is a story all about how, my life got flipped-turned upside down'},
    {value: 'Now this is a story all about how, my life got flipped-turned upside down'},
    {value: 'Now this is a story all about how, my life got flipped-turned upside down'},
    ]
},
{
    title: "Multimedia",
    label: "Network technology just testing",
    items: [
    {value: 'Now this is a story all about how, my life got flipped-turned upside down'},
    {value: 'Now this is a story all about how, my life got flipped-turned upside down'},
    {value: 'Now this is a story all about how, my life got flipped-turned upside down'},
    ]
},
{
    title: "IT Support",
    label: "Network technology just testing",
    items: [
    {value: 'Now this is a story all about how, my life got flipped-turned upside down'},
    {value: 'Now this is a story all about how, my life got flipped-turned upside down'},
    {value: 'Now this is a story all about how, my life got flipped-turned upside down'},
    ]
}
];

export const comment: Comments[] = [
{
    title: "Efficient Collaborating",
    description: "You have many examples that can be used to create a fast prototype for your team.\"",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
    customer_name: "Joseph McFall",
    role: "CTO at Google"
},
{
    title: "Efficient Collaborating",
    description: "You have many examples that can be used to create a fast prototype for your team.\"",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
    customer_name: "Joseph McFall",
    role: "CTO at Google"
},
{
    title: "Efficient Collaborating",
    description: "You have many examples that can be used to create a fast prototype for your team.\"",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
    customer_name: "Joseph McFall",
    role: "CTO at Google"
},
{
    title: "Efficient Collaborating",
    description: "You have many examples that can be used to create a fast prototype for your team.\"",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
    customer_name: "Joseph McFall",
    role: "CTO at Google"
}
];

export const Listing: SubItemLabel[] = [
    {sub_value_1: "Support",sub_value_2: "Testing"},
    {sub_value_1: "Consult",sub_value_2: "Develop"},
    {sub_value_1: "Secure",sub_value_2: "Train"},
];

export const ServiceDescripts: Services[] = [
    {
        title: "Website Development",
        description: "Content management systems for easy website maintenance and updates.",
        icon: web,
        bg: coding,
        label: "String of just",
        link: ""
    },
    {
        title: "User Interface Design",
        description: "Engaging and visually appealing designs that captivate and retain visitors",
        icon: interfaces,
        bg: UX,
        label: "String of just",
        link: ""
    },
        {
        title: "Apps Development",
        description: "Incorporating the latest technologies for enhanced functionality and performance.",
        icon: app,
        bg: AppCons,
        label: "String of just",
        link: ""
    },
    {
        title: "IT Consultancy",
        description: "Optimizing IT budgets through cost-effective solutions and resource allocation.",
        icon: IT,
        bg: consiritasiyo,
        label: "String of just",
        link: ""
    },
    {
        title: "Training Center",
        description: "Our diverse range of IT courses and workshops cover various technologies and skillsets.",
        icon: training,
        bg: Lidaship,
        label: "String of just",
        link: ""
    },
    {
        title: "Maintenance",
        description: "With proactive maintenance and regular updates, we ensure optimal performance and minimize downtime.",
        icon: maintenance,
        bg: metenase ,
        label: "String of just",
        link: ""
    },
    {
        title: "Multimedia Content Creation",
        description: "Optimizing IT budgets through cost-effective solutions and resource allocation.",
        icon: multimedia,
        bg: contenti,
        label: "String of just",
        link: ""
    },
    {
        title: "Marketing Campaigns",
        description: "Optimizing IT budgets through cost-effective solutions and resource allocation.",
        icon: marketing,
        bg: dijyito,
        label: "String of just",
        link: ""
    },
    {
        title: "Network Design and Security",
        description: "Experience the power of seamless connectivity through our comprehensive Networking solutions.",
        icon: network,
        bg: secyuriti,
        label: "String of just",
        link: ""
    }
];

export const CounterDetail: Counter[] = [
    {
        count: 10,
        label: 'Dedicated Support Staff'
    },
    {
        count: 6,
        label: 'Days in a Week'
    },
    {
        count: 8,
        label: 'Hours in a Day'
    },
        {
        count: 50,
        label: 'Avg. Daily Ticket Issued'
    }
];

export const BigCard: Support[] = [
    {
        title: "Any Custom Idea?",
        description: "Any awesome idea needs to turn into reality? or any customization needed?",
        icon: "https://thesoftking.com/assets/images/how-work-icon/innovation.png",
        link: "",
        label: "See A Meeting"
    },
    {
        title: "Facing Technical Issue?",
        description: "Facing any technical dificulties with our products? Relax! We are here to assist you.",
        icon: "https://thesoftking.com/assets/images/how-work-icon/error.png",
        link: "",
        label: "Get Support"
    }
]