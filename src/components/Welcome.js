import Slider from "react-slick";
import { cdnUrl } from "./../utilities/cdnUrl";
export default function Welcome({ popular }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  console.log("populardam dınen", popular);
  return (
    <div>
      <Slider {...settings}>
         
        {popular.map((image, index) => {
          return (
            <img
              key={`pop-${index}`}
              src={`${cdnUrl}/w1280/${image?.backdrop_path}`}
              alt=""
            />
          );
        })}
      </Slider>
    </div>
  );
}
