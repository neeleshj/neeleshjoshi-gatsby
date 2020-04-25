// import React, { Fragment, Component } from "react";
// import { Link } from "gatsby";

// import Layout from "../components/layout";
// import Image from "../components/image";
// import SEO from "../components/seo";
// import Navbar from "../components/navbar/navbar";
// import HexagonGrid from "../components/hexa/hexagrid";
// import Hexagon from "../components/hexa/hexagon";
// import anime from "animejs";

// import "../styles/tw.css";
// import "../components/hexa/hexagon.scss";

// export default class extends Component {
//   componentDidMount() {
//     anime({
//       targets: ".title-text",
//       duration: 1500,
//       easing: "easeInOutExpo",
//       opacity: [0, 1],
//       delay: anime.stagger(75), // increase delay by 100ms for each elements.
//     });
//     anime({
//       targets: ".hexagon",
//       duration: 1750,
//       easing: "easeInOutExpo",
//       opacity: [0, 1],
//       delay: anime.stagger(25), // increase delay by 100ms for each elements.
//     });
//     anime({
//       targets: ".title-text--2",
//       duration: 1500,
//       easing: "easeInOutExpo",
//       opacity: [0, 1],
//       delay: 750, // increase delay by 100ms for each elements.
//     });
//   }
//   render() {
//     const headerHeight = "95px";
//     return (
//       <Layout>
//         <div className="relative">
//           {/* <header
//             className="w-full p-3"
//             style={{ minHeight: `calc(100vh - ${headerHeight}` }}
//           >
//             <div
//               className="w-full bg-blue-primary"
//               style={{ minHeight: `calc(100vh - ${headerHeight} ) ` }}
//             />
//           </header> */}
//           {/* <Navbar /> */}
//           <div className="h-screen w-full bg-white px-3 flex flex-col items-center justify-center">
//             <div className="text-start sm:text-center">
//               <h4 className="mb-3">
//                 <span className="title-text font-mont text-3xl">
//                   Hello, I'm{" "}
//                 </span>
//                 <span className="title-text font-merri font-bold text-4xl">
//                   Neelesh
//                 </span>
//                 <span className="title-text font-mont text-3xl">
//                   , a web developer.
//                 </span>
//               </h4>
//               <HexagonGrid />
//               <h5 className="title-text--2 font-mont text-3xl my-2">
//                 Let's talk?
//               </h5>
//               <div className="flex flex-row sm:justify-center items-center">
//                 <a
//                   className="cursor-pointer"
//                   href="mailto:hello@neeleshjoshi.co.uk"
//                 >
//                   <Hexagon color="gmail">
//                     <svg
//                       role="img"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <title>Gmail icon</title>
//                       <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z" />
//                     </svg>
//                   </Hexagon>
//                 </a>
//                 <a
//                   className="cursor-pointer"
//                   href="https://www.linkedin.com/in/neeleshjjoshi/"
//                   target="_blank"
//                 >
//                   <Hexagon color="linkedin">
//                     <svg
//                       role="img"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <title>LinkedIn icon</title>
//                       <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                     </svg>
//                   </Hexagon>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Layout>
//     );
//   }
// }
