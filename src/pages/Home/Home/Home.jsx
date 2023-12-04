import EditorsPicks from "../../../common/EditorsPicks/EditorsPicks";
import Followus from "../../../common/FollowUs/Followus";
import Subscription from "../../../common/Subscription/Subscription";
import TrandingNow from "../../../common/TrandingNow/TrandingNow";
import AdvertiseBanner from "../AdvertiseBanner/AdvertiseBanner";
import BodyBanner from "../BodyBanner/BodyBanner";
import Celebrities from "../Celebrities/Celebrities";
import Dontmiss from "../DontMiss/Dontmiss";
import FeaturedStorys from "../FeaturedStorys/FeaturedStorys";
import Herro from "../Herro/Herro";
import MoreTop from "../MoreTop/MoreTop";
import Banner from "../SubBanner/Banner";
import Technology from "../Technology/Technology";
import Travel from "../TravelAndTurism/Travel";

const Home = () => {
  return (
    <div className=" max-w-7xl mx-auto">
      <Herro></Herro>
      <Banner></Banner>
      <AdvertiseBanner></AdvertiseBanner>
      <div className=" flex lg:flex-row flex-col px-5 lg:px-0 justify-center my-10 w-full max-w-7xl mx-auto gap-10">
        <div className=" lg:w-9/12 w-full">
          <FeaturedStorys></FeaturedStorys>
        </div>
        <div className=" w-full lg:w-3/12">
          <TrandingNow></TrandingNow>
        </div>
      </div>
      <BodyBanner></BodyBanner>
      <div className=" flex lg:flex-row flex-col px-5 lg:px-0 justify-center my-10 w-full max-w-7xl mx-auto gap-10">
        <div className=" lg:w-9/12 w-full">
          <Technology></Technology>
        </div>
        <div className=" w-full lg:w-3/12">
          <Followus></Followus>
          <EditorsPicks></EditorsPicks>
        </div>
      </div>
      <Dontmiss></Dontmiss>
      <div className=" flex lg:flex-row flex-col px-5 lg:px-0 justify-center my-10 w-full max-w-7xl mx-auto gap-10">
        <div className=" lg:w-9/12 w-full">
          <Celebrities></Celebrities>
        </div>
        <div className=" w-full lg:w-3/12">
          <Subscription></Subscription>
        </div>
      </div>
      <div className=" flex lg:flex-row flex-col px-5 lg:px-0 justify-center my-10 w-full max-w-7xl mx-auto gap-10">
        <div className=" lg:w-9/12 w-full">
          <Travel></Travel>
        </div>
        <div className=" w-full lg:w-3/12">
          <TrandingNow></TrandingNow>
        </div>
      </div>
    </div>
  );
};

export default Home;
