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
//             
//               <div className="flex flex-row sm:justify-center items-center">
//            
//               </div>
//             </div>
//           </div>
//         </div>
//       </Layout>
//     );
//   }
// }
