import "./Banner.css";


export const Banner = () => {
    return (
      <BannerContainer>
        <div>
          <h3>Hello!</h3>
          <p>I am a food lover and I created this blog for all the people like me. I spend a lot of our lifetime in the kitchen cooking, baking, and creating! i hope to inspire you to be more confident in the kitchen, because making food from scratch can be really fun. I'm happy to share my easy recipes here with you!</p>
        </div>
        <img src={banner} alt="banner" />
      </BannerContainer>
    )
  }
  