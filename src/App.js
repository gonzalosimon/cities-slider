import React from "react";
import "./index.css";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Slider heading="Slider" slides={slideData} />
          </Route>

          <Route exact path="/Cordoba">
            <Cordoba />
          </Route>

          <Route exact path="/Aconcagua">
            <Aconcagua />
          </Route>

          <Route exact path="/Mendoza">
            <Mendoza />
          </Route>

          <Route exact path="/Calafate">
            <Calafate />
          </Route>

          <Route exact path="/BuenosAires">
            <BuenosAires />
          </Route>

          <Route exact path="/Humahuaca">
            <Humahuaca />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

class Cordoba extends React.Component {
  render() {
    return (
      <div className="cites">
        <h1 className="cities-h1">Cordoba</h1>
        <img
          className="img-city"
          src="https://www.paradavisual.com/wp-content/uploads/2019/11/slider1.jpg"
          alt="picture_cordoba"
        ></img>
        <p>
          Córdoba is a city in central Argentina, in the foothills of the
          Sierras Chicas on the Suquía River, about 700 km (435 mi) northwest of
          the Buenos Aires. It is the capital of Córdoba Province and the second
          most populous city in Argentina after Buenos Aires, with about 1.3
          million inhabitants according to the 2010 census. It was founded on 6
          July 1573 by Jerónimo Luis de Cabrera, who named it after Córdoba,
          Spain. It was one of the early Spanish colonial capitals of the region
          that is now Argentina <a href="wikipedia.com">More Information</a>{" "}
        </p>
        <h2>Historia</h2>
        <img
          className="img-city"
          src="https://upload.wikimedia.org/wikipedia/commons/1/17/Avenida_Olmos%2C_C%C3%B3rdoba_%281943%29.jpg"
          alt="Avenida Olmos, Córdoba (1943)"
        ></img>
        <p>
          Córdoba is a city in central Argentina, in the foothills of the
          Sierras Chicas on the Suquía River, about 700 km (435 mi) northwest of
          the Buenos Aires. It is the capital of Córdoba Province and the second
          most populous city in Argentina after Buenos Aires, with about 1.3
          million inhabitants according to the 2010 census. It was founded on 6
          July 1573 by Jerónimo Luis de Cabrera, who named it after Córdoba,
          Spain. It was one of the early Spanish colonial capitals of the region
          that is now Argentina
        </p>
        <p>
          In 1776, King Carlos III created the Viceroyalty of the Río de la
          Plata, in which Córdoba stays in 1785 as the Government Intendency of
          Córdoba, including the current territories of the provinces of
          Córdoba, La Rioja and the region of Cuyo. According to the 1760
          census, the population of the city was 22,000 inhabitants. During the
          May Revolution in 1810, the widespread opinion of the most notable
          citizens was of continuing respecting the orders of Fernando VII,
          attitude assumed by the local authorities, which led to the Liniers
          Counter-revolution. This position was not shared by the Dean Gregorio
          Funes, who was adhering to the revolutionary ideas, beside supporting
          contact with Manuel Belgrano and Juan José Castelli.
        </p>
        <h2>Geography</h2>
        <p>
          The city's geographic location is 31°25′S 64°11′W, taking as a point
          of reference San Martín Square in downtown Córdoba. The relative
          location of the municipal common land, is in the south hemisphere of
          the globe, to the south of the South American subcontinent, in the
          geographical centre – west of Argentina and of the province of
          Córdoba; to a distance of 702 km (436 mi) from Buenos Aires and 401 km
          (249 mi) from the city of Rosario
        </p>
        <h2>Demographics</h2>
        Population: around 1,3m
        <h3>Ethnicity</h3>
        <p>
          The largest ethnic groups in Córdoba are Italians/Italian Argentine
          and Spaniards/Spanish Argentine (mostly Galicians and Basques/Basque
          Argentine). Waves of immigrants from other European countries arrived
          in the late 19th and early 20th centuries. From the rest of Western
          Europe came immigrants from Switzerland, Germany, United Kingdom,
          Ireland and Scandinavia (especially Sweden). Eastern Europeans also
          arrived from nations such as Croatia, Poland, Hungary, Russia,
          Romania, Ukraine, Armenia and the Balkans (especially Greece, Serbia
          and Montenegro). By the 1910s, 43 percent of the city population was
          non-native Argentine after immigration rates peaked.[13][14] Important
          Lebanese, Georgian, Syrian and Armenian communities have had a
          significant presence in commerce and civic life since the beginning of
          the 20th century.
        </p>
        <h2>Urban structure</h2>
        <h2>Economy</h2>
        <h2>Culture</h2>
        <h2>Gallery</h2>
      </div>
    );
  }
}

class BuenosAires extends React.Component {
  render() {
    return <div>This is Buenos Aires</div>;
  }
}

class Aconcagua extends React.Component {
  render() {
    return <div>This is Aconcagua</div>;
  }
}

class Calafate extends React.Component {
  render() {
    return <div>This is El Calafate</div>;
  }
}

class Mendoza extends React.Component {
  render() {
    return <div>This is Mendoza</div>;
  }
}

class Humahuaca extends React.Component {
  render() {
    return <div>This is Humahuaca</div>;
  }
}

const slideData = [
  {
    index: 0,
    headline: "Cordoba",
    button: "New Fashion Apparel",
    src:
      "https://images.unsplash.com/photo-1577220125104-cebbc30c35e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
  },
  {
    index: 1,
    headline: "Aconcagua",
    button: "Up to the highest point",
    src:
      "https://images.unsplash.com/photo-1483631224226-a219224bb76e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2068&q=80",
  },
  {
    index: 2,
    headline: "Mendoza",
    button: "Focus On The Writing",
    src:
      "https://images.unsplash.com/photo-1500937078812-a4aea2239059?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2632&q=80",
  },
  {
    index: 3,
    headline: "Calafate",
    button: "For Your Current Mood",
    src:
      "https://images.unsplash.com/photo-1465917566611-efba2904dd8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2255&q=80",
  },
  {
    index: 4,
    headline: "Buenos-Aires",
    button: "In The Wilderness",
    src:
      "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/07/03201757/Ciudades-mas-caras-de-America-Latina-Buenos-Aires.jpg",
  },
  {
    index: 5,
    headline: "Humahuaca",
    button: "For a relaxing morning",
    src:
      "https://images.unsplash.com/photo-1545889238-ae8ff5ab582f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=80",
  },
];

// Slide

class Slide extends React.Component {
  constructor(props) {
    super(props);

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleSlideClick = this.handleSlideClick.bind(this);
    this.imageLoaded = this.imageLoaded.bind(this);
    this.slide = React.createRef();
  }

  handleMouseMove(event) {
    const el = this.slide.current;
    const r = el.getBoundingClientRect();

    el.style.setProperty(
      "--x",
      event.clientX - (r.left + Math.floor(r.width / 2))
    );
    el.style.setProperty(
      "--y",
      event.clientY - (r.top + Math.floor(r.height / 2))
    );
  }

  handleMouseLeave(event) {
    this.slide.current.style.setProperty("--x", 0);
    this.slide.current.style.setProperty("--y", 0);
  }

  handleSlideClick(event) {
    this.props.handleSlideClick(this.props.slide.index);
  }

  imageLoaded(event) {
    event.target.style.opacity = 1;
  }

  render() {
    const { src, button, headline, index } = this.props.slide;
    const current = this.props.current;
    let classNames = "slide";

    if (current === index) classNames += " slide--current";
    else if (current - 1 === index) classNames += " slide--previous";
    else if (current + 1 === index) classNames += " slide--next";

    return (
      <li
        ref={this.slide}
        className={classNames}
        onClick={this.handleSlideClick}
        onMouseMove={this.handleMouseMove}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="slide__image-wrapper">
          <img
            className="slide__image"
            alt={headline}
            src={src}
            onLoad={this.imageLoaded}
          />
        </div>

        <article className="slide__content">
          <h2 className="slide__headline">{headline}</h2>
          <Link to={headline} type="submit" className="btn">
            {button}
          </Link>
        </article>
      </li>
    );
  }
}

// Slider

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { current: 0 };
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleSlideClick = this.handleSlideClick.bind(this);
  }

  handlePreviousClick() {
    const previous = this.state.current - 1;

    this.setState({
      current: previous < 0 ? this.props.slides.length - 1 : previous,
    });
  }

  handleNextClick() {
    const next = this.state.current + 1;

    this.setState({
      current: next === this.props.slides.length ? 0 : next,
    });
  }

  handleSlideClick(index) {
    if (this.state.current !== index) {
      this.setState({
        current: index,
      });
    }
  }

  render() {
    const { current } = this.state;
    const { slides, heading } = this.props;
    const headingId = `slider-heading__${heading
      .replace(/\s+/g, "-")
      .toLowerCase()}`;
    const wrapperTransform = {
      transform: `translateX(-${current * (100 / slides.length)}%)`,
    };

    return (
      <div>
        <div className="slider" aria-labelledby={headingId}>
          <ul className="slider__wrapper" style={wrapperTransform}>
            <h3 id={headingId} className="visuallyhidden">
              {heading}
            </h3>

            {slides.map((slide) => {
              return (
                <Slide
                  key={slide.index}
                  slide={slide}
                  current={current}
                  handleSlideClick={this.handleSlideClick}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
