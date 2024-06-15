import {} from 'react';
import Navbar from '../Navbar/navbar'; 
import Footer from '../Footer/footer'

const BlogDetails = () => {
  return (
    <>
      <Navbar />
      <div>
      <header className="blog-detail banner-header">
        <div className="page-title wow fadeIn">
          <div className="page-title-container wow pulse">
            <h1 className="page-title-heading">Blog detail</h1>
            <div className="breadcrumb-trail">
              Home / Blog detail
            </div>
          </div>
        </div>
      </header>

      <div className="blog-detail main-content">
        <div className="blog-detail-inner">
          <div className="main-content-wrap">
            <h1>Russia insurer ingosstrakh has no plans to fill insurance gap caused by sanctions</h1>
            <div className="information">
              <span>Kristin Watson</span> / 7th December, 2022
            </div>
            <div className="text">
              Russian insurer Ingosstrakh said on Monday it has no plans to offer policies to new clients who may lose <br /> coverage from international insurers after restrictions against Russian oil came into force on Dec. 5.
            </div>
            <img src="images/post/blog-detail-01.jpg" alt="" />
            <div className="note">(Donec vel quam non turpis sollicitudin dictum eget ac magna)</div>
            <div className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            <p>The European Union banned all seaborne Russian crude imports from Dec. 5, with a fuel import ban to follow in February.</p>
            <p>It also banned companies and individuals in the bloc from providing financing, brokerage, shipping and insurance services to ship Russian oil elsewhere if the crude was bought above a price cap of $60 a barrel that came into effect on Monday.</p>
            <div className="link">
              <span className="icon-arrow-right-circle"></span>Insurance-Related Oil Tanker Backlog Starts to Clear in Turkey’s Vital Shipping Strait
            </div>
            <p>Also, Turkey’s maritime authority said on Thursday it would continue to block the passage of oil tankers without appropriate insurance letters, adding that the insurance checks on ships in its waters was a routine procedure.</p>
            <p>“We are not willing and will not provide short-term P&I (Protection and Indemnity) coverage for vessels caught up by the new Turkish regulations at the mouth of the Bosphorus,” Ingosstrakh said.</p>
            <p>It also said that the company was interested in “long-term relations with reputable clients that operate in full compliance with the applicable legislation.”</p>
            <p>The Turkish measure in force since the start of the month has caused shipping delays. It requires vessels to provide proof of insurance covering the duration of their transit through the Bosphorus Strait or when calling at Turkish ports.</p>
            <img className="image-2" src="images/post/blog-detail-02.jpg" alt="" />
            <div className="note">(Nullam lacinia justo consequat, scelerisque est sed, condimentum odio)</div>
            <p>Since the regulations came into effect, one tanker covered by Ingosstrakh was able to sail after a letter was submitted.</p>
            <p>(Reporting by Vladimir Soldatkin; editing by Louise Heavens and Lisa Shumaker)</p>
            <hr />
            <div className="tags-wrap">
              <div className="tag">
                Tags:
                <div className="tag-item">
                  <a href="services-detail.html">Personal</a>
                </div>
                <div className="tag-item">
                  <a href="services-detail.html">Business</a>
                </div>
              </div>
              <div className="widget-social">
                Share this post:
                <a href="#"><span className="icon-facebook"></span></a>
                <a href="#"><span className="icon-twitter"></span></a>
                <a href="#"><span className="icon-linkedin2"></span></a>
                <a href="#"><span className="icon-instagram"></span></a>
              </div>
            </div>
            <div className="widget-comments">
              <div className="title">Comments</div>
              <ul>
                <li>
                  <div className="comment-item">
                    <div className="poster">
                      <img src="images/user/img-01.jpg" alt="" />
                    </div>
                    <div className="content">
                      <div className="user">
                        <span className="name">Albert Flores</span>
                        <span className="date-comment">Dec 13, 2022</span>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget dolor purus. Nunc molestie sem id nibh iaculis, tempor eleifend enim cursus. Vivamus ut augue mi.</p>
                      <div className="infor">
                        <span className="like">
                          <img src="icon/icon1/like.svg" alt="" /> 5 like
                        </span>
                        <span className="comment">
                          <img src="icon/icon1/comment.svg" alt="" />
                          <a href="#">Reply</a>
                        </span>
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <div className="comment-item">
                        <div className="poster">
                          <img src="images/user/img-02.jpg" alt="" />
                        </div>
                        <div className="content">
                          <div className="user">
                            <span className="name">Arlene McCoy</span>
                            <span className="date-comment">Dec 13, 2022</span>
                          </div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget dolor purus.</p>
                          <div className="infor">
                            <span className="like">
                              <img src="icon/icon1/like.svg" alt="" /> 5 like
                            </span>
                            <span className="comment">
                              <img src="icon/icon1/comment.svg" alt="" />
                              <a href="#">Reply</a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="comment-item">
                        <div className="poster">
                          <img src="images/user/img-03.jpg" alt="" />
                        </div>
                        <div className="content">
                          <div className="user">
                            <span className="name">Cameron Williamson</span>
                            <span className="date-comment">Dec 13, 2022</span>
                          </div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget dolor purus. Nunc molestie sem id nibh iaculis, tempor eleifend enim cursus. Vivamus ut augue mi.</p>
                          <div className="infor">
                            <span className="like">
                              <img src="icon/icon1/like.svg" alt="" /> 5 like
                            </span>
                            <span className="comment">
                              <img src="icon/icon1/comment.svg" alt="" />
                              <a href="#">Reply</a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="comment-item">
                    <div className="poster">
                      <img src="images/user/img-04.jpg" alt="" />
                    </div>
                    <div className="content">
                      <div className="user">
                        <span className="name">Floyd Miles</span>
                        <span className="date-comment">Dec 13, 2022</span>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget dolor purus. Nunc molestie sem id nibh iaculis, tempor eleifend enim cursus. Vivamus ut augue mi.</p>
                      <div className="infor">
                        <span className="like">
                          <img src="icon/icon1/like.svg" alt="" /> 5 like
                        </span>
                        <span className="comment">
                          <img src="icon/icon1/comment.svg" alt="" />
                          <a href="#">Reply</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <hr />
            <div className="widget-comment-respond">
              <h3 className="comment-reply-title">Leave a reply</h3>
              <div className="comment-reply-note">Your email address will not be published. Required fields are marked *</div>
              <form action="#">
                <div className="comment-wrap-input">
                  <fieldset className="infor-container">
                    Full name
                    <input type="text" pattern="[A-Za-z\s]*" placeholder="Your Name" name="author" required />
                  </fieldset>
                  <fieldset className="infor-container">
                    Email address
                    <input type="text" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Your Mail" name="mail" required />
                  </fieldset>
                </div>
                <div className="comment-content">
                  Message
                  <fieldset className="infor-container">
                    <textarea className="comment-message" name="comment" placeholder="Your Message" required></textarea>
                  </fieldset>
                </div>
                <button className="comment-submit" type="submit">Submit comment</button>
              </form>
            </div>
          </div>
          <div className="more-news">
            <div className="widget-more-news">
              <div className="heading">More news</div>
              <div className="inner">
                <div className="widget-post">
                  <div className="image">
                    <img src="images/post/blog-detail-03.jpg" alt="" />
                  </div>
                  <div className="all-content">
                    <div className="sub-content">
                      <div className="time">
                        <img src="icon/icon1/date.svg" alt="" />Dec 1st 2022
                      </div>
                      <div className="category">
                        <img src="icon/icon1/folder.svg" alt="" />life insurance
                      </div>
                    </div>
                    <div className="title"><a href="/blogdetails">Aviva finds more motorists are lying to...</a></div>
                    <p>The Insurance Council of Australia (ICA) has welcomed the joint...</p>
                    <a className="widget-button widget-block-before" href="/blogdetails">Read more</a>
                  </div>
                </div>
                <div className="widget-post">
                  <div className="image">
                    <img src="images/post/blog-detail-04.jpg" alt="" />
                  </div>
                  <div className="all-content">
                    <div className="sub-content">
                      <div className="time">
                        <img src="icon/icon1/date.svg" alt="" />Dec 1st 2022
                      </div>
                      <div className="category">
                        <img src="icon/icon1/folder.svg" alt="" />life insurance
                      </div>
                    </div>
                    <div className="title"><a href="/blogdetails">Cost of funding pension scandal payout for UK...</a></div>
                    <p>The Insurance Council of Australia (ICA) has welcomed the joint...</p>
                    <a className="widget-button widget-block-before" href="/blogdetails">Read more</a>
                  </div>
                </div>
                <div className="widget-post">
                  <div className="image">
                    <img src="images/post/blog-detail-05.jpg" alt="" />
                  </div>
                  <div className="all-content">
                    <div className="sub-content">
                      <div className="time">
                        <img src="icon/icon1/date.svg" alt="" />Dec 1st 2022
                      </div>
                      <div className="category">
                        <img src="icon/icon1/folder.svg" alt="" />life insurance
                      </div>
                    </div>
                    <div className="title"><a href="/blogdetails">Catastrophe reinsurance set to soar after year...</a></div>
                    <p>The Insurance Council of Australia (ICA) has welcomed the joint...</p>
                    <a className="widget-button widget-block-before" href="/blogdetails">Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
};

export default BlogDetails;
