import Logo from "../assets/logo_stat.svg";
import AuthorImage from "../assets/profilepic copy/startupechoes_logo_main_header.svg";

// Import all post images
const postImages = {
  profilePic1: require("../assets/posts/profile_pic_1.svg"),
  startup1: require("../assets/posts/startup1_01.png"),
  startup2: require("../assets/posts/startup2-01.png"),
  startup3: require("../assets/posts/startup3.png"),
  startup4: require("../assets/posts/startup4.png"),
  startup5: require("../assets/posts/startup5.png"),
  startup6: require("../assets/posts/startup6.png"),
  business1: require("../assets/posts/business1-01.png"),
  business2: require("../assets/posts/business2-01.png"),
  business3: require("../assets/posts/business3-01.png"),
  business4: require("../assets/posts/business4-01.png"),
  business5: require("../assets/posts/business5-01.png"),
  business6: require("../assets/posts/business6-01.png"),
  // Remove references to missing images until they are available
};

// Service images
const serviceImages = {
    seo: require("../assets/profilepic copy/seooptimization.jpg"),
    socialMedia: require("../assets/profilepic copy/uiuxdesign.jpg"),
    // ... rest of your service images
};

const images = {
    Logo,
    AuthorImage,
    posts: postImages,
    services: serviceImages,
    defaultProfile: postImages.profilePic1,
    startups: {
        post1: postImages.startup1,
        post2: postImages.startup2,
        post3: postImages.startup3,
        post4: postImages.startup4,
        post5: postImages.startup5,
        post6: postImages.startup6,
    },
    business: {
        post1: postImages.business1,
        post2: postImages.business2,
        post3: postImages.business3,
        post4: postImages.business4,
        post5: postImages.business5,
        post6: postImages.business6,
    },
    economic: {
        // economic images
    },
    market: {
        // market images
    }
};

export default images;
