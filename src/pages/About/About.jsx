import React from "react";
import Footer from "../../components/Footer/Footer";
import FirstImg from "../../assets/first-aboutimg.png";
import SecondImg from "../../assets/second-aboutimg.png";
import "./About.css";
import Ourvision from "../../assets/briefcase-dollar.png";
import Ourmission from "../../assets/arrows.png";
import JoinImg from "../../assets/join-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import KachiPic from "../../assets/kachi.png";
import ChimdiaPic from "../../assets/chimdia.png";
import { motion } from "framer-motion";

const About = () => {
  const headerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 1.5 } }
};

const teamCardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1.5 } }
};


const overlayVariants = {
    hidden: { y: '100%' },
    visible: { 
        y: 0, 
        transition: { 
          duration: 0.4,  // 0.4 seconds
          ease: "easeInOut"  // ease-in-out transition
      } 
    }
};

const iconVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

  return (
    <section className="about">
      <div className="about-hero">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h2>
                <span>Welcome</span> to Hagull
              </h2>
              <p>
                We are dedicated to providing a seamless platform that connects
                currency buyers and sellers from around the world.
              </p>

              <ul className="stat-group">
                <li>
                  <span>120+ Happy Client</span>
                </li>
                <li>
                  <span>100% Transactions</span>
                </li>
              </ul>
            </div>
            <div className="col-md-7 images">
              <div className="img-group mt-5">
                <img src={FirstImg} alt="FirstImg" className="FirstImg" />
                <img src={SecondImg} alt="SecondImg" className="SecondImg" />
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="140"
                height="114"
                viewBox="0 0 140 114"
                fill="none"
              >
                <path
                  d="M-0.000388197 91.5101L11.5185 90.7051L5.06192 81.1319L-0.000388197 91.5101ZM104.293 91.5101L105.173 91.9848L104.293 91.5101ZM68.2254 60.0963L67.3497 59.6133L67.3319 59.6456L67.3165 59.6792L68.2254 60.0963ZM139.492 2.10549L128.015 0.832174L132.651 11.4078L139.492 2.10549ZM2.72383 90.8928C3.20876 90.5734 3.69643 90.2552 4.18672 89.9382L3.10097 88.2586C2.60594 88.5786 2.11348 88.8999 1.62374 89.2225L2.72383 90.8928ZM5.66109 88.994C6.14871 88.6845 6.63876 88.3763 7.13111 88.0695L6.07325 86.3721C5.57634 86.6818 5.0817 86.9929 4.58946 87.3053L5.66109 88.994ZM8.61493 87.1529C9.11177 86.8488 9.61078 86.546 10.1119 86.2447L9.0811 84.5307C8.57554 84.8348 8.07204 85.1403 7.57069 85.4472L8.61493 87.1529ZM11.6072 85.3532C12.1065 85.0581 12.6078 84.7645 13.1108 84.4723L12.1064 82.7428C11.599 83.0375 11.0934 83.3337 10.5897 83.6314L11.6072 85.3532ZM14.6251 83.6005C15.1301 83.3122 15.6368 83.0255 16.1451 82.7403L15.1666 80.9961C14.654 81.2836 14.143 81.5728 13.6337 81.8635L14.6251 83.6005ZM17.6679 81.8933C18.177 81.6126 18.6875 81.3335 19.1993 81.0561L18.2463 79.2978C17.7302 79.5775 17.2155 79.8589 16.7021 80.142L17.6679 81.8933ZM20.7386 80.2289C21.2515 79.9557 21.7656 79.6841 22.2809 79.4143L21.3531 77.6425C20.8337 77.9145 20.3153 78.1883 19.7982 78.4638L20.7386 80.2289ZM23.8295 78.6104C24.3467 78.3442 24.865 78.0798 25.384 77.8173L24.4814 76.0326C23.9582 76.2972 23.4358 76.5637 22.9143 76.8321L23.8295 78.6104ZM26.9449 77.0349C27.4663 76.7758 27.9885 76.5186 28.5114 76.2634L27.6341 74.4661C27.107 74.7234 26.5806 74.9826 26.0549 75.2438L26.9449 77.0349ZM30.0817 75.5037C30.606 75.2523 31.1309 75.003 31.6561 74.7557L30.8042 72.9462C30.2747 73.1955 29.7457 73.4469 29.2171 73.7002L30.0817 75.5037ZM33.2413 74.0164C33.77 73.772 34.2991 73.5298 34.8283 73.2898L34.0023 71.4683C33.4687 71.7103 32.9353 71.9545 32.4023 72.2008L33.2413 74.0164ZM36.4166 72.5764C36.9497 72.3392 37.483 72.1043 38.0162 71.8717L37.2165 70.0385C36.6788 70.273 36.1412 70.5099 35.6036 70.749L36.4166 72.5764ZM39.6209 71.1786C40.1557 70.9499 40.6904 70.7237 41.2248 70.4998L40.4522 68.6551C39.9132 68.8809 39.374 69.109 38.8347 69.3396L39.6209 71.1786ZM42.8338 69.833C43.3754 69.6109 43.9167 69.3914 44.4574 69.1744L43.7127 67.3182C43.1673 67.5371 42.6213 67.7585 42.075 67.9825L42.8338 69.833ZM46.0779 68.5316C46.6175 68.3199 47.1564 68.111 47.6946 67.9047L46.9789 66.0372C46.4358 66.2453 45.892 66.4561 45.3476 66.6697L46.0779 68.5316ZM49.3364 67.2831C49.8833 67.0786 50.4293 66.877 50.9743 66.6782L50.2892 64.7993C49.739 64.9999 49.1878 65.2034 48.6358 65.4098L49.3364 67.2831ZM52.6059 66.091C53.1576 65.8951 53.7081 65.7022 54.2572 65.5125L53.6042 63.6221C53.0496 63.8137 52.4937 64.0085 51.9366 64.2063L52.6059 66.091ZM55.9132 64.9488C56.4637 64.7641 57.0127 64.5827 57.56 64.4046L56.9412 62.5027C56.388 62.6827 55.8333 62.866 55.277 63.0526L55.9132 64.9488ZM59.2202 63.873C59.7802 63.6967 60.3382 63.5239 60.8942 63.3548L60.3123 61.4414C59.7499 61.6124 59.1856 61.7871 58.6195 61.9654L59.2202 63.873ZM62.5559 62.8586C63.115 62.6948 63.6718 62.5347 64.2262 62.3786L63.684 60.4535C63.1227 60.6116 62.5591 60.7735 61.9934 60.9393L62.5559 62.8586ZM65.9175 61.9123C66.4786 61.761 67.037 61.6138 67.5925 61.4708L67.0941 59.5339C66.531 59.6789 65.9651 59.828 65.3968 59.9813L65.9175 61.9123ZM69.2762 61.0483C69.8484 60.9084 70.4172 60.7732 70.9825 60.6427L70.5326 58.6939C69.9587 58.8264 69.3816 58.9636 68.8012 59.1055L69.2762 61.0483ZM72.6677 60.2654C73.2392 60.1415 73.8068 60.0226 74.3703 59.9089L73.9747 57.9484C73.4016 58.0641 72.8246 58.1849 72.244 58.3108L72.6677 60.2654ZM76.0868 59.576C76.6545 59.4705 77.2177 59.3704 77.7762 59.2759L77.4424 57.3039C76.8731 57.4003 76.2993 57.5023 75.7213 57.6097L76.0868 59.576ZM79.5051 58.9987C80.0833 58.9113 80.656 58.8302 81.2229 58.7555L80.9614 56.7726C80.3817 56.8491 79.7965 56.932 79.2062 57.0212L79.5051 58.9987ZM82.9215 58.5487C83.5107 58.4831 84.0931 58.4248 84.6683 58.3739L84.492 56.3817C83.9013 56.4339 83.3039 56.4937 82.7002 56.561L82.9215 58.5487ZM86.3719 58.2437C86.9595 58.206 87.5388 58.1766 88.1095 58.1557L88.0362 56.1571C87.4466 56.1787 86.8491 56.209 86.244 56.2478L86.3719 58.2437ZM89.8285 58.118C90.4097 58.1142 90.9808 58.1198 91.5416 58.135L91.5957 56.1357C91.0116 56.1199 90.418 56.1141 89.8153 56.1181L89.8285 58.118ZM93.2637 58.214C93.8389 58.2518 94.4014 58.3006 94.951 58.3606L95.1681 56.3724C94.5885 56.3091 93.9972 56.2579 93.3947 56.2183L93.2637 58.214ZM96.6526 58.589C97.2196 58.6802 97.7702 58.7847 98.3041 58.9027L98.7356 56.9498C98.1619 56.823 97.5731 56.7114 96.9702 56.6144L96.6526 58.589ZM99.9423 59.3226C100.491 59.4842 101.019 59.6622 101.524 59.8567L102.242 57.9901C101.684 57.7751 101.105 57.58 100.507 57.404L99.9423 59.3226ZM103.029 60.517C103.535 60.7692 104.014 61.0412 104.463 61.3332L105.552 59.6556C105.035 59.3201 104.491 59.0109 103.921 58.727L103.029 60.517ZM105.756 62.2933C106.17 62.6453 106.553 63.0203 106.903 63.4185L108.405 62.0975C107.988 61.6245 107.537 61.1822 107.052 60.7698L105.756 62.2933ZM107.861 64.6899C108.145 65.1327 108.397 65.601 108.618 66.0957L110.445 65.2818C110.184 64.6962 109.884 64.1394 109.545 63.6113L107.861 64.6899ZM109.167 67.6132C109.31 68.1117 109.425 68.6344 109.511 69.182L111.487 68.8713C111.389 68.2462 111.256 67.6435 111.09 67.0631L109.167 67.6132ZM109.679 70.8497C109.704 71.3701 109.705 71.9101 109.682 72.4703L111.681 72.5512C111.706 71.9355 111.704 71.3367 111.677 70.7549L109.679 70.8497ZM109.545 74.1742C109.483 74.7007 109.401 75.2427 109.299 75.8007L111.267 76.1597C111.376 75.5628 111.464 74.9795 111.531 74.4096L109.545 74.1742ZM108.933 77.521C108.809 78.0365 108.668 78.5642 108.512 79.1042L110.433 79.6608C110.597 79.0933 110.745 78.5366 110.877 77.9906L108.933 77.521ZM107.994 80.7607C107.817 81.2883 107.626 81.8266 107.42 82.3757L109.293 83.0776C109.507 82.5073 109.706 81.9468 109.89 81.396L107.994 80.7607ZM106.802 83.9489C106.583 84.4828 106.351 85.0263 106.106 85.5793L107.934 86.3908C108.186 85.821 108.426 85.2601 108.653 84.708L106.802 83.9489ZM105.397 87.1235C105.159 87.6264 104.91 88.1366 104.651 88.6544L106.44 89.5496C106.705 89.0192 106.96 88.4957 107.205 87.9793L105.397 87.1235ZM103.842 90.2304C103.701 90.4968 103.558 90.7652 103.412 91.0354L105.173 91.9848C105.322 91.7088 105.468 91.4347 105.611 91.1623L103.842 90.2304ZM103.412 91.0354C103.277 91.2871 103.139 91.5366 103 91.7839L104.744 92.7637C104.889 92.5063 105.032 92.2466 105.173 91.9848L103.412 91.0354ZM102.148 93.2416C101.853 93.7259 101.552 94.2011 101.245 94.6672L102.916 95.7668C103.236 95.2809 103.549 94.7858 103.856 94.2814L102.148 93.2416ZM100.293 96.0597C99.9639 96.5219 99.6296 96.9742 99.2899 97.4165L100.876 98.6346C101.231 98.1728 101.58 97.7008 101.922 97.2187L100.293 96.0597ZM98.2396 98.7327C97.8773 99.1696 97.5098 99.5958 97.1375 100.011L98.6268 101.346C99.0163 100.911 99.4005 100.466 99.7792 100.009L98.2396 98.7327ZM95.9933 101.239C95.5975 101.647 95.1972 102.043 94.7928 102.428L96.1711 103.877C96.5952 103.474 97.0147 103.058 97.4292 102.631L95.9933 101.239ZM93.5595 103.554C93.1308 103.929 92.6983 104.291 92.2626 104.641L93.5136 106.201C93.972 105.834 94.4266 105.453 94.8769 105.058L93.5595 103.554ZM90.9341 105.658C90.4773 105.992 90.0178 106.312 89.5563 106.618L90.6606 108.285C91.1482 107.963 91.6331 107.625 92.1146 107.273L90.9341 105.658ZM88.1357 107.51C87.654 107.797 87.1709 108.068 86.6873 108.323L87.6209 110.092C88.1349 109.82 88.6474 109.533 89.1577 109.229L88.1357 107.51ZM85.1806 109.067C84.6694 109.303 84.1586 109.52 83.6489 109.72L84.3799 111.582C84.9258 111.368 85.4718 111.135 86.0169 110.884L85.1806 109.067ZM82.0928 110.278C81.5562 110.452 81.0221 110.605 80.4915 110.739L80.9799 112.678C81.5546 112.534 82.1312 112.368 82.7089 112.181L82.0928 110.278ZM78.8762 111.086C78.3293 111.183 77.7877 111.257 77.2523 111.31L77.4471 113.3C78.0355 113.243 78.6285 113.161 79.2248 113.055L78.8762 111.086ZM75.6162 111.401C75.063 111.408 74.5184 111.389 73.9837 111.346L73.8218 113.339C74.4206 113.388 75.0275 113.408 75.6409 113.401L75.6162 111.401ZM72.3773 111.134C71.8431 111.035 71.321 110.909 70.8124 110.756L70.2352 112.671C70.816 112.846 71.4095 112.989 72.0138 113.101L72.3773 111.134ZM69.3071 110.205C68.8166 109.991 68.341 109.749 67.8819 109.478L66.8643 111.199C67.3953 111.513 67.9443 111.793 68.509 112.039L69.3071 110.205ZM66.5627 108.582C66.1468 108.26 65.7472 107.909 65.3654 107.529L63.9544 108.946C64.3946 109.384 64.8563 109.79 65.3376 110.163L66.5627 108.582ZM64.2997 106.332C63.9722 105.918 63.6615 105.476 63.3691 105.007L61.6715 106.064C62.0024 106.595 62.3559 107.098 62.7305 107.572L64.2997 106.332ZM62.5879 103.595C62.3562 103.123 62.1405 102.627 61.9419 102.107L60.0736 102.821C60.2932 103.396 60.533 103.948 60.7922 104.476L62.5879 103.595ZM61.4173 100.54C61.2689 100.029 61.1354 99.4982 61.0178 98.9473L59.0619 99.3651C59.1893 99.9614 59.3344 100.539 59.4967 101.098L61.4173 100.54ZM60.7259 97.3217C60.6464 96.7812 60.5809 96.2237 60.5301 95.649L58.5379 95.825C58.5919 96.4369 58.6619 97.0329 58.7473 97.6129L60.7259 97.3217ZM60.4275 94.0049C60.4066 93.4502 60.3986 92.8811 60.404 92.2975L58.4041 92.2791C58.3985 92.8929 58.4068 93.4932 58.4289 94.08L60.4275 94.0049ZM60.4531 90.6499C60.4809 90.0925 60.5201 89.5229 60.5713 88.9411L58.579 88.7659C58.5257 89.3722 58.4846 89.967 58.4556 90.5505L60.4531 90.6499ZM60.745 87.2881C60.8123 86.7359 60.8897 86.1736 60.9777 85.6009L59.0009 85.2973C58.9098 85.89 58.8295 86.473 58.7597 87.0464L60.745 87.2881ZM61.2588 83.9309C61.3579 83.3892 61.4659 82.8389 61.5831 82.2799L59.6257 81.8694C59.505 82.4449 59.3937 83.0122 59.2915 83.5713L61.2588 83.9309ZM61.9626 80.5774C62.0871 80.0494 62.2195 79.514 62.36 78.9714L60.4238 78.4702C60.2798 79.0266 60.1439 79.576 60.016 80.1185L61.9626 80.5774ZM62.8058 77.3215C62.9592 76.7759 63.1206 76.2233 63.29 75.6636L61.3758 75.0842C61.2026 75.6562 61.0376 76.2214 60.8805 76.7799L62.8058 77.3215ZM63.7881 74.0699C63.9612 73.5325 64.1416 72.9889 64.3292 72.439L62.4364 71.793C62.2451 72.3535 62.0612 72.9081 61.8844 73.4566L63.7881 74.0699ZM64.9015 70.8062C65.0875 70.2887 65.2799 69.7658 65.4786 69.2377L63.6068 68.5333C63.4046 69.0705 63.2088 69.6026 63.0194 70.1296L64.9015 70.8062ZM66.0942 67.6372C66.3055 67.0992 66.5233 66.5558 66.7476 66.0071L64.8964 65.2502C64.6686 65.8073 64.4473 66.3593 64.2326 66.9061L66.0942 67.6372ZM67.3867 64.4718C67.6053 63.9555 67.8297 63.4346 68.0597 62.9091L66.2277 62.1069C65.9944 62.6397 65.7668 63.168 65.545 63.6919L67.3867 64.4718ZM68.7673 61.3189C68.8882 61.0516 69.0105 60.7831 69.1342 60.5135L67.3165 59.6792C67.1912 59.9523 67.0673 60.2243 66.9449 60.4951L68.7673 61.3189ZM69.101 60.5793C69.238 60.331 69.3764 60.0833 69.5164 59.8364L67.7763 58.8504C67.6326 59.1039 67.4904 59.3583 67.3497 59.6133L69.101 60.5793ZM70.3737 58.3624C70.665 57.8743 70.9619 57.3888 71.2644 56.906L69.5695 55.8442C69.2595 56.339 68.955 56.8369 68.6562 57.3376L70.3737 58.3624ZM72.1852 55.47C72.4975 54.994 72.815 54.5208 73.1375 54.0502L71.4879 52.9195C71.1578 53.401 70.8328 53.8855 70.513 54.3729L72.1852 55.47ZM74.1162 52.652C74.4473 52.1887 74.7832 51.7281 75.1236 51.2702L73.5186 50.0769C73.1708 50.5447 72.8275 51.0155 72.489 51.4893L74.1162 52.652ZM76.156 49.908C76.5042 49.4571 76.8568 49.0089 77.2134 48.5635L75.6523 47.3134C75.2884 47.7678 74.9286 48.2252 74.573 48.6856L76.156 49.908ZM78.2945 47.237C78.6584 46.7981 79.0262 46.362 79.3977 45.9287L77.8793 44.627C77.5008 45.0684 77.126 45.5129 76.7549 45.9604L78.2945 47.237ZM80.5228 44.6375C80.9011 44.2102 81.2829 43.7858 81.6679 43.3642L80.191 42.0155C79.7992 42.4445 79.4106 42.8766 79.0253 43.3118L80.5228 44.6375ZM82.8325 42.108C83.2241 41.6918 83.6187 41.2784 84.0162 40.868L82.5796 39.4766C82.1755 39.8938 81.7742 40.3141 81.3759 40.7374L82.8325 42.108ZM85.217 39.6455C85.6207 39.2402 86.027 38.8378 86.4356 38.4384L85.0378 37.008C84.6228 37.4136 84.2101 37.8224 83.7999 38.2342L85.217 39.6455ZM87.67 37.248C88.0845 36.8534 88.5011 36.4619 88.9198 36.0734L87.5593 34.6074C87.1346 35.0015 86.7117 35.3989 86.291 35.7994L87.67 37.248ZM90.1855 34.9134C90.6095 34.5295 91.0354 34.1487 91.4628 33.771L90.1384 32.2723C89.7051 32.6552 89.2733 33.0413 88.8432 33.4307L90.1855 34.9134ZM92.7581 32.6398C93.1913 32.2659 93.6258 31.8952 94.0615 31.5276L92.7719 29.9989C92.3305 30.3713 91.8902 30.7469 91.4513 31.1258L92.7581 32.6398ZM95.383 30.4253C95.8251 30.0606 96.2681 29.6992 96.7119 29.3411L95.4558 27.7847C95.0066 28.1472 94.558 28.5132 94.1103 28.8825L95.383 30.4253ZM98.0559 28.268C98.5065 27.9121 98.9576 27.5595 99.4089 27.2104L98.1853 25.6284C97.7287 25.9816 97.2722 26.3384 96.8162 26.6986L98.0559 28.268ZM100.773 26.1661C101.232 25.8185 101.691 25.4744 102.149 25.134L100.957 23.5282C100.493 23.8725 100.029 24.2204 99.5652 24.572L100.773 26.1661ZM103.531 24.1177C103.998 23.7781 104.464 23.4422 104.929 23.1101L103.767 21.4823C103.297 21.8179 102.826 22.1574 102.354 22.5008L103.531 24.1177ZM106.328 22.1212C106.802 21.7892 107.275 21.4612 107.747 21.1373L106.614 19.4888C106.138 19.8161 105.66 20.1475 105.181 20.4829L106.328 22.1212ZM109.161 20.1747C109.642 19.8502 110.121 19.5301 110.599 19.2142L109.495 17.5464C109.013 17.8654 108.529 18.1887 108.043 18.5165L109.161 20.1747ZM112.028 18.2767C112.516 17.9597 113.001 17.6474 113.484 17.3396L112.408 15.6536C111.921 15.9643 111.431 16.2796 110.938 16.5997L112.028 18.2767ZM114.929 16.4258C115.423 16.1164 115.913 15.8121 116.399 15.5129L115.351 13.8096C114.86 14.1116 114.365 14.4187 113.867 14.731L114.929 16.4258ZM117.862 14.6208C118.36 14.3196 118.854 14.0239 119.343 13.7338L118.322 12.014C117.828 12.3068 117.33 12.6052 116.827 12.9092L117.862 14.6208ZM120.825 12.8616C121.326 12.5693 121.821 12.2832 122.31 12.0033L121.316 10.2677C120.823 10.5502 120.323 10.8389 119.817 11.1339L120.825 12.8616ZM123.815 11.1493C124.32 10.8655 124.816 10.5888 125.305 10.3192L124.338 8.56843C123.845 8.84043 123.344 9.11963 122.835 9.40599L123.815 11.1493ZM126.825 9.48774C127.343 9.20701 127.849 8.93505 128.344 8.67195L127.405 6.90604C126.906 7.17158 126.394 7.44604 125.872 7.72934L126.825 9.48774ZM129.855 7.87656C130.381 7.60222 130.891 7.3391 131.383 7.08733L130.473 5.30641C129.976 5.56063 129.461 5.82627 128.93 6.10321L129.855 7.87656ZM132.928 6.30628C133.47 6.03515 133.986 5.78036 134.473 5.54209L133.594 3.74539C133.102 3.98625 132.581 4.24371 132.033 4.51759L132.928 6.30628ZM136.02 4.79464C136.591 4.52239 137.106 4.28094 137.559 4.07072L136.718 2.25614C136.258 2.46935 135.737 2.71393 135.159 2.98945L136.02 4.79464Z"
                  fill="#EB8207"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="vision-section mt-5">
        <div
          className="container"
          style={{ paddingLeft: "10rem", paddingRight: "10rem" }}
        >
          <h4 className="text-center pt-5">Who we are</h4>
          <p className="text-center pt-3">
            Hagull is your best currency exchange platform with you in mind. We
            think about that parent paying for their wards school fees abroad,
            the businessman trading goods , that student that needs to pay
            bills, shop at affordable rates.and the normal african who finds it
            hard to access foreign currencies.
          </p>

          <div className="row vision">
            <div className="col-md-6">
              <img src={Ourvision} alt="Logo" className="Ourvision" />
            </div>
            <div className="col-md-6">
              <h5>Our Vision</h5>
              <p>
                Hagull wants to ensure that your funds are at your finger tips
                whenever you need them at an affordable rate anywhere you go
              </p>
            </div>
          </div>
          <div className="row vision" style={{ paddingBottom: "135px" }}>
            <div className="col-md-6">
              <h5>Our Mission</h5>
              <p>
                At Hagull we believe its necessary for everyone to access their
                funds without borders and at an affordable rate
              </p>
            </div>
            <div className="col-md-6">
              <img src={Ourmission} alt="Logo" className="Ourmission" />
            </div>
          </div>
        </div>
      </div>

      <div className="value mt-5">
        <div className="header-container">
          <h4 className="small-header">Our Core Values</h4>
          <h1 className="big-header">Hagull Culture</h1>
        </div>

        <div className="container">
          <div className="row justify-content-center values-row">
            <div className="col-4">
              <div
                className="value-card  text-center mb-3"
                style={{ width: "18rem" }}
              >
                <div className="card-body">
                  <div className="letter">
                    <h1>H</h1>
                  </div>
                  <h5 className="card-title pb-3">Honesty</h5>
                  <p className="card-text">
                    Being honest and transparent with one another is very
                    crucial to communicate effectively.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div
                className="value-card  text-center mb-3"
                style={{ width: "18rem" }}
              >
                <div className="card-body">
                  <div className="letter">
                    <h1>A</h1>
                  </div>
                  <h5 className="card-title pb-3">Adaptability</h5>
                  <p className="card-text">
                    As time change we should be able to adapt to different
                    situations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div
                className="value-card  text-center mb-3"
                style={{ width: "18rem" }}
              >
                <div className="card-body">
                  <div className="letter">
                    <h1>G</h1>
                  </div>
                  <h5 className="card-title pb-3">Growth</h5>
                  <p className="card-text">
                    Personal growth is as much important as team growth, growth
                    is welcomed at hagull.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center values-row">
            <div className="col-4">
              <div
                className="value-card  text-center mb-3"
                style={{ width: "18rem" }}
              >
                <div className="card-body">
                  <div className="letter">
                    <h1>U</h1>
                  </div>
                  <h5 className="card-title pb-3">User Focusedy</h5>
                  <p className="card-text">
                    Users and the community is the reason why we exist, so we
                    can solve their problem.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div
                className="value-card  text-center mb-3"
                style={{ width: "18rem" }}
              >
                <div className="card-body">
                  <div className="letter">
                    <h1>L</h1>
                  </div>
                  <h5 className="card-title pb-3">Learn</h5>
                  <p className="card-text">
                    Keep learning and be proactive, Be free to come up with
                    ideas.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div
                className="value-card  text-center mb-3"
                style={{ width: "18rem" }}
              >
                <div className="card-body">
                  <div className="letter">
                    <h1>L</h1>
                  </div>
                  <h5 className="card-title pb-3">Loyalty</h5>
                  <p className="card-text">
                    Being honest and transparent with one another is very
                    crucial to communicate effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="join position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="join-img position-absolute">
                <img src={JoinImg} alt="JoinImg" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="join-text">
                <p>
                  Join us at Hagull and experience the convenience, security,
                  and endless possibilities of currency trading. Together let's
                  reshape the way we exchange currencies and open up a world of
                  opportunities in the global financial landscape.
                </p>

                <button>
                  Get Started <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="team mt-5">
        <div className="container">
          <motion.h1
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={headerVariants}
          >
            Meet Our Team
          </motion.h1>
          <motion.p
            className="text-center pt-3"
            initial="hidden"
            animate="visible"
            variants={headerVariants}
          >
            We are proud to have a dedicated and talented team of professionals
            revolutionizing the currency marketplace industry.
          </motion.p>

          <div className="row mt-5">
            <div className="col-md-4">
              <motion.div className="team-card" initial="hidden" animate="visible" variants={teamCardVariants}>
                <img src={KachiPic} alt="Team Member 1" />
                <motion.div
                  className="overlay linkedin"
                  initial="hidden"
                  animate="visible"
                  variants={overlayVariants}
                >
                  <a href="https://www.linkedin.com/in/onyedikachi-shedrach-erugo-b1bab3152/" target="_blank" rel="noopener noreferrer">
                    <motion.div variants={iconVariants}>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </motion.div>
                  </a>
                </motion.div>
              </motion.div>

              <motion.div  className="text-center mt-3 mb-3 team-desc" initial="hidden" animate="visible" variants={teamCardVariants}>
              <h6>Onyedikachi Shedrach Erugo</h6>
              <p>co-CEO</p>
              </motion.div>
            </div>
            <div className="col-md-4">
              <motion.div className="team-card" initial="hidden" animate="visible" variants={teamCardVariants}>
                <img src={ChimdiaPic} alt="Team Member 2" />
                <motion.div
                  className="overlay linkedin"
                  initial="hidden"
                  animate="visible"
                  variants={overlayVariants}
                >
                  <a href="#">
                    <motion.div variants={iconVariants}>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </motion.div>
                  </a>
                </motion.div>
              </motion.div>

              <motion.div  className="text-center mt-3 mb-3 team-desc" initial="hidden" animate="visible" variants={teamCardVariants}>
              <h6>Shedrack Akuchukwu Erugo</h6>
              <p>co-CEO / Chief Operation Officer</p>
              </motion.div>
            </div>
            <div className="col-md-4">
              <motion.div className="team-card" initial="hidden" animate="visible" variants={teamCardVariants}>
                <img src={KachiPic} alt="Team Member 3" />
                <motion.div
                  className="overlay linkedin"
                  initial="hidden"
                  animate="visible"
                  variants={overlayVariants}
                >
                  <a href="#">
                    <motion.div variants={iconVariants}>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </motion.div>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <div className="row mb-5" style={{marginTop: '100px'}}>
            <div className="col-md-3">
              <motion.div className="team-card" initial="hidden" animate="visible" variants={teamCardVariants}>
                <img src={KachiPic} alt="Team Member 1" />
                <motion.div
                  className="overlay linkedin"
                  initial="hidden"
                  animate="visible"
                  variants={overlayVariants}
                >
                  <a href="#">
                    <motion.div variants={iconVariants}>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </motion.div>
                  </a>
                </motion.div>
              </motion.div>
            </div>
            <div className="col-md-3">
              <motion.div className="team-card" initial="hidden" animate="visible" variants={teamCardVariants}>
                <img src={ChimdiaPic} alt="Team Member 2" />
                <motion.div
                  className="overlay linkedin"
                  initial="hidden"
                  animate="visible"
                  variants={overlayVariants}
                >
                  <a href="#">
                    <motion.div variants={iconVariants}>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </motion.div>
                  </a>
                </motion.div>
              </motion.div>
            </div>
            <div className="col-md-3">
              <motion.div className="team-card" initial="hidden" animate="visible" variants={teamCardVariants}>
                <img src={KachiPic} alt="Team Member 3" />
                <motion.div
                  className="overlay linkedin"
                  initial="hidden"
                  animate="visible"
                  variants={overlayVariants}
                >
                  <a href="#">
                    <motion.div variants={iconVariants}>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </motion.div>
                  </a>
                </motion.div>
              </motion.div>
            </div>
            <div className="col-md-3">
              <motion.div className="team-card" initial="hidden" animate="visible" variants={teamCardVariants}>
                <img src={KachiPic} alt="Team Member 3" />
                <motion.div
                  className="overlay linkedin"
                  initial="hidden"
                  animate="visible"
                  variants={overlayVariants}
                >
                  <a href="#">
                    <motion.div variants={iconVariants}>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </motion.div>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
