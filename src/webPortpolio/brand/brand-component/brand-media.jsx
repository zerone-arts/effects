import React from "react";

const facebook = "https://www.facebook.com/pascucci1883";
const blog = "http://blog.naver.com/pascucci1883";
const insta = "https://www.instagram.com/pascucci_kr/";
const youtube = "https://www.youtube.com/channel/UCHKRIWTWjq0uzJOAm6KFHOg";
const happypoint = "http://www.happypointcard.com/";

function BrandMedia() {
  return (
    <div className="brand-Media">
      <div className="brand-media-container">
        <button
          className="brand-medias facebook"
          onClick={() => {
            window.open(facebook);
          }}
        >
          <div className="facebook-logo">
            <div className="facebook-f">f</div>
          </div>
          <div className="facebook-facebook">Facebook</div>
        </button>
        |
        <button
          className="brand-medias blog"
          onClick={() => {
            window.open(blog);
          }}
        >
          <div className="blog-logo">
            <div className="blog-b">b</div>
          </div>
          <div className="blog-blog">Blog</div>
        </button>
        |
        <button
          className="brand-medias instargram"
          onClick={() => {
            window.open(insta);
          }}
        >
          <div className="instar-logo">
            <div className="instar-bg">
              <div className="instar-logo-circle">
                <div className="instar-logo-incircle"></div>
              </div>
            </div>
          </div>
          <div className="insta-insta">Instagram</div>
        </button>
        |
        <button
          className="brand-medias youtube"
          onClick={() => {
            window.open(youtube);
          }}
        >
          <div className="youtube-logo">
            <div className="youtube-triangle"></div>
          </div>
          <div className="youtube-youtube">Youtube</div>
        </button>
        |
        <button
          className="brand-medias happypoint"
          onClick={() => {
            window.open(happypoint);
          }}
        >
          <div className="happypoint-logo">
            <div className="happypoint-semicircle-1"></div>
            <div className="happypoint-semicircle-2"></div>
            <div className="happypoint-circle">
              <div className="happypoint-incircle"></div>
            </div>
          </div>
          <div className="happypoint-happypoint">HappyPoint</div>
        </button>
      </div>
    </div>
  );
}

export default BrandMedia;
