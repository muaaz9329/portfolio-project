import image1 from './skill_imgs/gr1.png'
import image2 from './skill_imgs/gr2.png'
import image3 from './skill_imgs/gr3.png'
import image4 from './skill_imgs/gr4.png'
import image5 from './skill_imgs/gr5.png'
import image6 from './skill_imgs/gr6.png'
import ResBuild from './work_imgs/resBuild.png'
import Zaino from './work_imgs/Zaino.png'
import Avro from './work_imgs/AVRO.png'
import theSilence from './work_imgs/theSilence.png'
import adminPanel from './work_imgs/adminPanel.png'
export const SkillAdd = [image1,image2,image3,image4,image5,image6]
export const workPage=[
    {
        id: 0,
        image: Zaino,
        title: 'Zaino',
        para: 'This website was developed by me for users to know the weather condition of thier current location, This site uses OpenWeather API and Weather.io API for accurate information , Fully responsive designed and automatically reads the location of The user, With current weather condition this site also provides info for upcoming 4 days as well as Wind speed and Humidity.',
        link: 'https://zaino.netlify.app/'
    },
    {
        id: 1,
        image: Avro,
        title: 'Avro',
        para: 'Avro is a Ecommerce website developed by me as a internship project, the challenge for this website was to develop website with pure Java script, no frameworks or libraries were allowed so this website is purly made with html, Css and, Java script and uses browser Localstorage for storing data, This website is totally responsive with all tools working and soon will be shift to react with firbase realtime Database.',
        link: 'https://avro-intern.netlify.app/'
    },
    {
        id: 2,
        image: theSilence,
        title: 'The Silence',
        para: 'The Silence is science blog that is developed by me for a friend , this blogs front end was developed in React and designed in tailwind css , this project also used React router dom for creating routes, this project uses firebase for backend , and firebase database system to read the data to for blog , for writing blogs another website admin-thesilence.netlify.app is made for admin access to blog',
        link: 'https://thesilence.netlify.app/'
    },
    {
        id: 3,
        image: adminPanel,
        title: 'Admin Page Of The Silence',
        para: 'This is the admin panel website for The silence , which also uses firebase for authentication as well as for Creating,Updating,Deleting the blogs for The Silence . This website uses React Router Dom for creating routes for each individual blog to update , also Private routes are made using react router dom to stop unauthorize access to blogs setting. Context api is also used to store data and to distribute it to all the components of application. For desiging tailwind css is used. ',
        link: 'https://admin-thesilence.netlify.app'
    },
    {
        id: 4,
        image: ResBuild,
        title: 'Resume builder',
        para: 'This website was developed by me for users to make their resume by just providing information and choosing their favourite design. The whole website is made with React.js and I am currently working to make it responsive',
        link: 'https://resumebuilder-ver1.netlify.app/'
    },

]
export const aboutData = ' I am a hardworking and ambitious individual with a great passion for Computer Science and Designing thats why I have more than a year of Experience in React. I am currently in my second semester of studying BS Computer Science at Khawaja Fareed University Of Engineering and Technology. I have good Programming skills, enabling me to effectively work with React and its Eco system. My main Passion is making creative and out of box idea into reality.'