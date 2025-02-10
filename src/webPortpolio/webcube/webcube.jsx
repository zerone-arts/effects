import React, { useState } from "react";
import "./webcube.css";

function WebCube(props) {
  const [box1Zindex, setBox1Zindex] = useState(1);
  const [box1Scale, setBox1Scale] = useState(1.0);
  const [box1Bg, setBox1Bg] = useState("white");
  const [box1Color, setBox1Color] = useState("black");
  const [box1Reset, setBox1Reset] = useState("50%");
  const [box1Border, setBox1Border] = useState(` rgb(233, 233, 233)`);
  const [box1bottomBorder, setBox1BottomBorder] = useState("red");
  const [box1Opacity, setBox1Opacity] = useState(0);
  const [box1Rotate, setBox1Rotate] = useState("0deg");
  const [cssJsOpacity, setCssJsOpacity] = useState(0);

  const [box2Zindex, setBox2Zindex] = useState(2);
  const [box2Scale, setBox2Scale] = useState(1.0);
  const [box2Bg, setBox2Bg] = useState("white");
  const [box2Color, setBox2Color] = useState("black");
  const [box2Reset, setBox2Reset] = useState("50%");
  const [box2Border, setBox2Border] = useState(` rgb(233, 233, 233)`);
  const [box2bottomBorder, setBox2BottomBorder] = useState("red");
  const [box2Opacity, setBox2Opacity] = useState(0);
  const [box2Rotate, setBox2Rotate] = useState("0deg");
  const [graphicOpacity, setGraphicOpacity] = useState(0);

  const [box3Zindex, setBox3Zindex] = useState(1);
  const [box3Scale, setBox3Scale] = useState(1.0);
  const [box3Bg, setBox3Bg] = useState("white");
  const [box3Color, setBox3Color] = useState("black");
  const [box3Reset, setBox3Reset] = useState("50%");
  const [box3Border, setBox3Border] = useState(` rgb(233, 233, 233)`);
  const [box3bottomBorder, setBox3BottomBorder] = useState("red");
  const [box3Opacity, setBox3Opacity] = useState(0);
  const [box3Rotate, setBox3Rotate] = useState("0deg");
  const [myopacicy, setMyOpacity] = useState(0);

  const [rightBox2Bg, setRightBox2Bg] = useState(`rgb(241, 241, 241)`);
  const [square, setSquare] = useState("5%");
  const [circleBd, setCircleBd] = useState("black");
  const [circleBg, setCircleBg] = useState("none");
  const [rightBox1Bg, setRightBox1Bg] = useState(`rgb(241, 241, 241)`);
  const box1HoverHandle = () => {
    setBox1Scale(1.3);
    setBox1Zindex(10);
    setBox1Bg("black");
    setBox1Color("white");
    setBox1Reset("");
    setBox1Border("black");
    setBox1BottomBorder("black");
    setBox1Opacity(1);
    setBox1Rotate("45deg");
    setCssJsOpacity(0.5);
  };
  const box1OutHandle = () => {
    setBox1Scale(1);
    setBox1Zindex(1);
    setBox1Bg("white");
    setBox1Color("black");
    setBox1Reset("50%");
    setBox1Border("rgb(233, 233, 233)");
    setBox1BottomBorder("red");
    setBox1Opacity(0);
    setBox1Rotate("0deg");
    setCssJsOpacity(0);
  };

  const box2HoverHandle = () => {
    setBox2Scale(1.3);
    setBox2Zindex(5);
    setBox2Bg("black");
    setBox2Color("white");
    setBox2Reset("");
    setBox2Border("black");
    setBox2BottomBorder("black");
    setBox2Opacity(1);
    setBox2Rotate("45deg");
    setGraphicOpacity(0.5);
  };
  const box2OutHandle = () => {
    setBox2Scale(1);
    setBox2Zindex(1);
    setBox2Bg("white");
    setBox2Color("black");
    setBox2Reset("50%");
    setBox2Border("rgb(233, 233, 233)");
    setBox2BottomBorder("red");
    setBox2Opacity(0);
    setBox2Rotate("0deg");
    setGraphicOpacity(0);
  };

  const box3HoverHandle = () => {
    setBox3Scale(1.3);
    setBox3Zindex(5);
    setBox3Bg("black");
    setBox3Color("white");
    setBox3Reset("");
    setBox3Border("black");
    setBox3BottomBorder("black");
    setBox3Opacity(1);
    setBox3Rotate("45deg");
    setMyOpacity(0.5);
  };
  const box3OutHandle = () => {
    setBox3Scale(1);
    setBox3Zindex(1);
    setBox3Bg("white");
    setBox3Color("black");
    setBox3Reset("50%");
    setBox3Border("rgb(233, 233, 233)");
    setBox3BottomBorder("red");
    setBox3Opacity(0);
    setBox3Rotate("0deg");
    setMyOpacity(0);
  };

  const rightBox2HoverHandle = () => {
    setSquare(`50%`);
    setRightBox2Bg("white");
  };
  const rightBox2OutHandle = () => {
    setSquare(`5%`);
    setRightBox2Bg(`rgb(241, 241, 241)`);
  };
  const rightBox1HoverHandle = () => {
    setCircleBd("red");
    setCircleBg("red");
    setRightBox1Bg(`white`);
  };
  const rightBox1OutHandle = () => {
    setCircleBd("black");
    setCircleBg("transparent");
    setRightBox1Bg(`rgb(241, 241, 241)`);
  };

  return (
    <div className="webc-main-container">
      <div className="webcWrapper">
        <div
          className="webcbox"
          onMouseOver={box1HoverHandle}
          onMouseLeave={box1OutHandle}
          style={{ zIndex: box1Zindex }}
        >
          <button
            className="webc-css-js-tools"
            id="webc-css-js-tool1"
            style={{
              top: box1Reset,
              left: box1Reset,
            }}
            onClick={() =>
              window.open("https://fonts.google.com/icons", "_blank")
            }
          >
            <p> Text Icon</p>
          </button>
          <button
            className="webc-css-js-tools"
            id="webc-css-js-tool2"
            style={{
              top: box1Reset,
              left: box1Reset,
              opacity: box1Opacity,
              transform: `rotate(${box1Rotate})`,
            }}
            onClick={() =>
              window.open(
                "https://fontawesome.com/icons/youtube?s=solid&f=brands",
                "_blank"
              )
            }
          >
            <p> Icon</p>
          </button>
          <button
            className="webc-css-js-tools"
            id="webc-css-js-tool3"
            style={{
              top: box1Reset,
              left: box1Reset,
              opacity: box1Opacity,
              transform: `rotate(${box1Rotate})`,
            }}
            onClick={() => window.open("https://fonts.google.com/", "_blank")}
          >
            <p>Font</p>
          </button>
          <button
            className="webc-css-js-tools"
            id="webc-css-js-tool4"
            style={{ top: box1Reset, left: box1Reset }}
            onClick={() =>
              window.open(
                "https://getcssscan.com/css-box-shadow-examples",
                "_blank"
              )
            }
          >
            <p>Box Shadow</p>
          </button>
          <div
            id="webc-css-js"
            style={{
              transform: `scale(${box1Scale})`,

              backgroundColor: box1Bg,
              color: box1Color,
              border: `1.5px solid ${box1Border}`,
              borderBottom: `2px solid ${box1bottomBorder}`,
            }}
          >
            <p>
              Css & Js <br />
              Tools
            </p>
          </div>
        </div>
        <div
          className="webcbox"
          onMouseOver={box2HoverHandle}
          onMouseLeave={box2OutHandle}
          style={{ zIndex: box2Zindex }}
        >
          <div
            id="webc-graphic"
            style={{
              transform: `scale(${box2Scale})`,
              zIndex: box2Zindex,
              backgroundColor: box2Bg,
              color: box2Color,
              border: `1.5px solid ${box2Border}`,
              borderBottom: `2px solid ${box2bottomBorder}`,
            }}
          >
            <p>
              Graphic <br />
              Tools
            </p>
          </div>
          <button
            className="webc-graphic-tools"
            id="webc-graphic-tool1"
            style={{
              top: box2Reset,
              left: box2Reset,
            }}
            onClick={() =>
              window.open("https://www.pexels.com/ko-kr/", "_blank")
            }
          >
            <p>
              Free
              <br /> <span>Img & Video</span>
            </p>
          </button>
          <button
            className="webc-graphic-tools"
            id="webc-graphic-tool2"
            style={{
              top: box2Reset,
              left: box2Reset,
              opacity: box2Opacity,
              transform: `rotate(${box2Rotate})`,
            }}
            onClick={() => window.open("https://unsplash.com/ko", "_blank")}
          >
            <p>Free Image</p>
          </button>
          <button
            className="webc-graphic-tools"
            id="webc-graphic-tool3"
            style={{
              top: box2Reset,
              left: box2Reset,
              opacity: box2Opacity,
              transform: `rotate(${box2Rotate})`,
            }}
            onClick={() =>
              window.open("https://www.pinterest.co.kr/", "_blank")
            }
          >
            <p>Pinterest</p>
          </button>
          <button
            className="webc-graphic-tools"
            id="webc-graphic-tool4"
            style={{ top: box2Reset, left: box2Reset }}
            onClick={() =>
              window.open("https://color.adobe.com/ko/create", "_blank")
            }
          >
            <p> Color</p>
          </button>
        </div>
        <div
          className="webcbox"
          onMouseOver={box3HoverHandle}
          onMouseLeave={box3OutHandle}
          style={{ zIndex: 3 }}
        >
          <div
            id="webc-my"
            style={{
              transform: `scale(${box3Scale})`,
              zIndex: box3Zindex,
              backgroundColor: box3Bg,
              color: box3Color,
              border: `1.5px solid ${box3Border}`,
              borderBottom: `2px solid ${box3bottomBorder}`,
            }}
          >
            <p>
              My <br />
              Medias
            </p>
          </div>
          <button
            className="webc-medias"
            id="webc-media1"
            style={{ top: box3Reset, left: box3Reset }}
            onClick={() => window.open("https://github.com/", "_blank")}
          >
            <p> GitHub</p>
          </button>
          <button
            className="webc-medias"
            id="webc-media2"
            style={{
              top: box3Reset,
              left: box3Reset,
              opacity: box3Opacity,
              transform: `rotate(${box3Rotate})`,
            }}
            onClick={() => window.open("https://www.instagram.com/", "_blank")}
          >
            <p>Instagram</p>
          </button>
          <button
            className="webc-medias"
            id="webc-media3"
            style={{
              top: box3Reset,
              left: box3Reset,
              opacity: box3Opacity,
              transform: `rotate(${box3Rotate})`,
            }}
            onClick={() =>
              window.open(
                "https://section.blog.naver.com/BlogHome.naver?directoryNo=0&currentPage=1&groupId=0",
                "_blank"
              )
            }
          >
            <p> Blog</p>
          </button>
          <div
            className="webc-medias"
            id="webc-media4"
            style={{ top: box3Reset, left: box3Reset }}
          >
            <p> 준비중</p>
          </div>
        </div>
        <div className="webc-left-box1">
          <div className="webc-left-box1-line"></div>
          <p>The tools and media I use</p>
          <p>I don't know what to write in one line</p>
        </div>
        <div
          className="webc-right-box1"
          onMouseOver={rightBox1HoverHandle}
          onMouseLeave={rightBox1OutHandle}
          style={{ backgroundColor: rightBox1Bg }}
        >
          <div
            className="webc-right-box1-circle"
            style={{
              border: ` 1.5px solid ${circleBd}`,
              backgroundColor: circleBg,
            }}
          ></div>
        </div>
        <div
          className="webc-right-box2"
          onMouseOver={rightBox2HoverHandle}
          onMouseLeave={rightBox2OutHandle}
          style={{ backgroundColor: rightBox2Bg }}
        >
          <p>Zero</p>
          <div className="webc-right-box2-square" style={{ right: square }}>
            Zr
          </div>
        </div>
        <div className="webc-name">Kim Young Il</div>
      </div>
      <div className="webc-css-js-bg" style={{ opacity: cssJsOpacity }}>
        <p>CSS</p>
        <p>&JS</p>
      </div>
      <div className="webc-graphic-bg" style={{ opacity: graphicOpacity }}>
        <p>Grap</p>
        <p>hic</p>
      </div>
      <div className="webc-media-bg" style={{ opacity: myopacicy }}>
        <p>Media</p>
      </div>
    </div>
  );
}

export default WebCube;
