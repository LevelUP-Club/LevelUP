// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Level UP",
  middleName: "",
  lastName: "",
  message: " Let's level UP together ",
  icons: [
    {
      image: "fa-github",
      url: "#",
    },
    {
      image: "fa-facebook",
      url: "#",
    },
    {
      image: "fa-instagram",
      url: "#",
    },
    {
      image: "fa-twitter",
      url: "#",
    },
  ],
};


const about = {
  background: require("../editable-stuff/logolevelup.png"),
  show: true,
  heading: "About US",
  imageLink: require("../editable-stuff/logolevelup.png"),
  imageSize: 375,
  message:
    "club presentation ",
};



// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/logolevelup.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/logolevelup.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};



// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "",
  email: "",
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, leadership, getInTouch };
