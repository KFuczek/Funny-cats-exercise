import React, { useRef } from "react";

const ImageContainer = ({ index, src, onClickButton }) => {
  const renderCounter1 = useRef(0);
  renderCounter1.current++;

  const getBorderColor = () => {
    const colors = ["black", "red", "green", "yellow", "blue", "orange"];
    const nextColor = renderCounter1.current % 6;
    return colors[nextColor];
  };

  const onClickHandler = () => {
    onClickButton(index);
  };

  return (
    <div className="img_container">
      <img src={src} alt="kity" style={{ borderColor: getBorderColor() }} />
      <button className="reload_button" onClick={onClickHandler}>
        Reload
      </button>
      <div className="render_label">rendered: {renderCounter1.current}</div>
    </div>
  );
};

export default React.memo(ImageContainer);
