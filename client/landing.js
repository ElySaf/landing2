import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

class Dummy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <header id="header" className="alt">
          <h1><a href="index.html">Retrospect</a></h1>
          <a href="#nav">Menu</a>
        </header>
        <nav id="nav">
          <ul className="links">
            <li><a href="index.html">Home</a></li>
            <li><a href="generic.html">Generic</a></li>
            <li><a href="elements.html">Elements</a></li>
          </ul>
        </nav>
        <section id="banner">
          <i className="icon fa-diamond" />
          <h2>Etiam adipiscing</h2>
          <p>Magna feugiat lorem dolor egestas</p>
          <ul className="actions">
            <li><a href="#" className="button big special">Learn More</a></li>
          </ul>
        </section>
        <section id="one" className="wrapper style1">
          <div className="inner">
            <article className="feature left">
              <span className="image" /><img src="images/pic01.jpg" alt="" />
              <div className="content">
                <h2>Integer vitae libero acrisus egestas placerat  sollicitudin</h2>
                <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. </p>
                <ul className="actions">
                  <li>
                    <a href="#" className="button alt">More</a>
                  </li>
                </ul>
              </div>
            </article>
            <article className="feature right">
              <span className="image" /><img src="images/pic02.jpg" alt="" />
              <div className="content">
                <h2>Integer vitae libero acrisus egestas placerat  sollicitudin</h2>
                <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est.</p>
                <ul className="actions">
                  <li>
                    <a href="#" className="button alt">More</a>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>
        <section id="two" className="wrapper special">
          <div className="inner">
            <header className="major narrow">
              <h2>Aliquam Blandit Mauris</h2>
              <p>Ipsum dolor tempus commodo turpis adipiscing Tempor placerat sed amet accumsan</p>
            </header>
            <div className="image-grid">
              <a href="#" className="image"><img src="images/pic03.jpg" alt="" /></a>
              <a href="#" className="image"><img src="images/pic04.jpg" alt="" /></a>
              <a href="#" className="image"><img src="images/pic05.jpg" alt="" /></a>
              <a href="#" className="image"><img src="images/pic06.jpg" alt="" /></a>
              <a href="#" className="image"><img src="images/pic07.jpg" alt="" /></a>
              <a href="#" className="image"><img src="images/pic08.jpg" alt="" /></a>
              <a href="#" className="image"><img src="images/pic09.jpg" alt="" /></a>
              <a href="#" className="image"><img src="images/pic10.jpg" alt="" /></a>
            </div>
            <ul className="actions">
              <li><a href="#" className="button big alt">Tempus Aliquam</a></li>
            </ul>
          </div>
        </section>
        <section id="three" className="wrapper style3 special">
          <div className="inner">
            <header className="major narrow">
              <h2>Magna sed consequat tempus</h2>
              <p>Ipsum dolor tempus commodo turpis adipiscing Tempor placerat sed amet accumsan</p>
            </header>
            <ul className="actions">
              <li><a href="#" className="button big alt">Magna feugiat</a></li>
            </ul>
          </div>
        </section>
        <section id="four" className="wrapper style2 special">
          <div className="inner">
            <header className="major narrow">
              <h2>Get in touch</h2>
              <p>Ipsum dolor tempus commodo adipiscing</p>
            </header>
            <form action="#" method="POST">
              <div className="container 75%">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input name="name" placeholder="Name" type="text" />
                  </div>
                  <div className="6u$ 12u$(xsmall)">
                    <input name="email" placeholder="Email" type="email" />
                  </div>
                  <div className="12u$">
                    <textarea name="message" placeholder="Message" rows="4" />
                  </div>
                </div>
              </div>
              <ul className="actions">
                <li><input type="submit" className="special" value="Submit" /></li>
                <li><input type="reset" className="alt" value="Reset" /></li>
              </ul>
            </form>
          </div>
        </section>
        <footer id="footer">
          <div className="inner">
            <ul className="icons">
              <li>
                <a href="#" className="icon fa-facebook">
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon fa-twitter">
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon fa-instagram">
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon fa-linkedin">
                  <span className="label">LinkedIn</span>
                </a>
              </li>
            </ul>
            <ul className="copyright">
              <li>&copy; Untitled.</li>
              <li>Images: <a href="http://unsplash.com">Unsplash</a>.</li>
              <li>Design: <a href="http://templated.co">TEMPLATED</a>.</li>
            </ul>
          </div>
        </footer>
      </div>
    )
  }
}

Dummy.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
