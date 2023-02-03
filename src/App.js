import "./styles.css";
import { useEffect, useState } from "react";
import { getImage } from "./api";
import ImageContainer from "./imageContainer";
import Task from "./task";
export default function App() {
  const url = "https://aws.random.cat/meow?ref=apilist.fun";
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const [img3, setImg3] = useState(null);

  useEffect(() => {
    const catchData = async () => {
      Promise.all([getImage(url), getImage(url), getImage(url)]).then(
        (values) => {
          const [url1, url2, url3] = values;
          setImg1(url1);
          setImg2(url2);
          setImg3(url3);
        }
      );
    };
    catchData();
  }, []);

  const onClickButton = (index) => {
    getImage(url).then((src) => {
      // eslint-disable-next-line
      switch (index) {
        case 1:
          setImg1(src);
          break;
        case 2:
          setImg2(src);
          break;
        case 3:
          setImg3(src);
          break;
      }
    });
  };

  return (
    <div className="App">
      <Task />
      <div className="images_panorama">
        <ImageContainer index={1} src={img1} onClickButton={onClickButton} />
        <ImageContainer index={2} src={img2} onClickButton={onClickButton} />
        <ImageContainer index={3} src={img3} onClickButton={onClickButton} />
      </div>
    </div>
  );
}
