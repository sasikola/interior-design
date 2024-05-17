import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Themes = () => {
  return (
    <div>
      <div className="container-fluid p-5 ">
        <div className="d-flex justify-content-center align-items-center py-4">
          <h1>Themes</h1>
        </div>
        <div className="row py-4">
          <div className="col-lg-6 ">
            <h1 style={{ fontSize: 20 }}>Victorian Style</h1>
            <p style={{ padding: 4 }}>
              Victorian interior design is a style that originated in the United
              Kingdom during the Victorian era. Known for its abundance of
              pattern (in wall coverings and in textiles), ornamentation, and
              use of jewel tones, the interior decoration style absorbs the
              visitor in its rich world. The Victorian era produced both a
              distinct interior design style and a distinct architectural style.
            </p>
            <h1 style={{ fontSize: 20 }}>Transitional Interior design</h1>
            <p style={{ padding: 4 }}>
              Transitional interior design is a mixture of the traditional and
              modern styles. Bringing together pieces from various design styles
              creates a singular design that updates the classics with a
              cohesive, modern feel. It balances luxury with comfort, masculine
              with feminine, and antiques with new pieces.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src="/assets/about/3.webp"
              className="img-fluid rounded-3"
              alt="about"
              loading="lazy"
              style={{
                objectFit: "cover",
                aspectRatio: 16 / 9,
                width: "90%",
              }}
            />
          </div>
        </div>
        <div className="row py-4">
          <div className="col-lg-6">
            <img
              src="/assets/about/5.webp"
              className="img-fluid rounded-3"
              alt="about"
              loading="lazy"
              style={{
                objectFit: "cover",
                aspectRatio: 16 / 9,
                width: "90%",
              }}
            />
          </div>
          <div className="col-lg-6 ">
            <h1 style={{ fontSize: 20 }}>Traditional style</h1>
            <p style={{ padding: 4 }}>
              Traditional style often includes silk, linen and velvet upholstery
              and window coverings in damask, florals, stripes and plaids with
              ornately detailed dark wood, inspired by 18th and 19th century
              designs. Layered in color and texture, traditional style interiors
              bring a sense of history and glamour to a space.
            </p>
            <h1 style={{ fontSize: 20 }}>Shabby chic is an interior</h1>
            <p style={{ padding: 4 }}>
              Shabby chic is an interior decorating style characterized by
              predominantly white spaces, floral prints, ruffles, and soft,
              pastel colors. It's full of vintage charm with a time-worn look,
              which means that you can easily source shabby chic decor from
              thrift stores, flea markets, and antique shops.
            </p>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-lg-6">
            <img
              src="/assets/about/6.webp"
              className="img-fluid rounded-3"
              alt="about"
              loading="lazy"
              style={{
                objectFit: "cover",
                aspectRatio: 16 / 9,
                width: "90%",
              }}
            />
          </div>
          <div className="col-lg-6 ">
            <h1 style={{ fontSize: 20 }}>Rustic interior design</h1>
            <p style={{ padding: 4 }}>
              Rustic interior design represents a natural, rough, aged, and
              casual design style. The category is broad and incorporates a
              range of variations on the style, including Tuscan, coastal,
              cottage and modern rustic. Regardless of the variation, rustic
              style highlights rugged, natural beauty.
            </p>
            <h1 style={{ fontSize: 20 }}>Neutral modern</h1>
            <p style={{ padding: 4 }}>
              In the context of interior design, neutral means without color.
              Neutrals such as beige, ivory, taupe, black, gray, and shades of
              white appear to be without color, but these hues often have
              undertones. Be aware of these underlying tones as you match colors
              or choose paint.
            </p>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-lg-6 ">
            <h1 style={{ fontSize: 20 }}>Modern interior design</h1>
            <p style={{ padding: 4 }}>
              Modern interior design can be characterised by furniture with
              simple form and function, the use of natural materials such as
              wood, leather, glass, and stone, and a warm, neutral colour
              palette.
            </p>
            <h1 style={{ fontSize: 20 }}>Minimalist interior design</h1>
            <p style={{ padding: 4 }}>
              Minimalist interior design is very similar to modern interior
              design and involves using the bare essentials to create a simple
              and uncluttered space. It's characterised by simplicity, clean
              lines, and a monochromatic palette with colour used as an accent.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src="/assets/about/7.webp"
              className="img-fluid rounded-3"
              alt="about"
              loading="lazy"
              style={{
                objectFit: "cover",
                aspectRatio: 16 / 9,
                width: "90%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Themes;
