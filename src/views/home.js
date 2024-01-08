import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import Question from '../components/question'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Quick Legitimate Stinkbug</title>
        <meta property="og:title" content="Quick Legitimate Stinkbug" />
      </Helmet>
      <div className="home-hero">
        <div className="home-hero1">
          <h1 className="home-hero-heading heading1">OurScene</h1>
          <div className="home-container01">
            <div className="home-btn-group"></div>
          </div>
        </div>
      </div>
      <div className="home-details">
        <div className="home-details1">
          <div className="home-container02">
            <span className="home-text sectionTitle">
              <span>Details</span>
              <br></br>
            </span>
            <h2 className="home-details-heading heading2">
              Empowering the Local Music Scene
            </h2>
            <span className="home-details-sub-heading">
              OurScene is a professional website and music app designed to
              connect venues, promoters, artists, and fans. With easy booking,
              event mapping, and access to local radio stations, OurScene helps
              artists grow from local to global.
            </span>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1561907484-2cfeddf02318?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQyfHxyb2NrJTIwbXVzaWN8ZW58MHx8fHwxNzAzNjMwNDI3fDA&amp;ixlib=rb-4.0.3&amp;w=400"
            className="home-details-image"
          />
        </div>
      </div>
      <div className="home-features">
        <div className="home-features-container">
          <div className="home-features1">
            <div className="home-container03">
              <span className="home-text03 sectionTitle">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
                Unlock the Power of OurScene
              </h2>
              <span className="home-features-sub-heading">
                Discover the features that make OurScene the ultimate music app
                for connecting venues, promoters, artists, and fans.
              </span>
            </div>
            <div className="home-container04">
              <FeatureCard
                Heading="Connect Venues with Promoters"
                SubHeading="Easily connect venues with promoters to book shows and events."
              ></FeatureCard>
              <FeatureCard
                Heading="Connect Promoters with Artists"
                SubHeading="Effortlessly connect promoters with artists to facilitate bookings and collaborations."
              ></FeatureCard>
              <FeatureCard
                Heading="Connect Artists with Fans"
                SubHeading="Seamlessly connect artists with their fans, allowing for direct communication and engagement."
              ></FeatureCard>
              <FeatureCard
                Heading="Overlay Event Information on a Map"
                SubHeading="Visualize event information on a map for easy navigation and discovery of local gigs."
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing">
        <div className="home-pricing1">
          <div className="home-container05">
            <span className="home-text06 sectionTitle">
              <span>Pricing</span>
              <br></br>
            </span>
            <h2 className="home-pricing-heading heading2">Choose Your Plan</h2>
            <span className="home-pricing-sub-heading">
              Find the perfect plan for your needs
            </span>
          </div>
          <div className="home-container06">
            <div className="home-pricing-card">
              <div className="home-container07">
                <span className="home-text09 heading3">Premium Listener</span>
                <span className="home-basic-plan-description">
                  Unlock additional features for a small fee
                </span>
              </div>
              <div className="home-container08">
                <span className="home-text10">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-basic-plan-pricing">5</span>
                <span className="home-text13">/ month</span>
              </div>
              <div className="home-container09">
                <div className="home-container10">
                  <span className="home-text14">✔</span>
                  <span className="home-text15">All features of FREE plan</span>
                </div>
                <div className="home-container11">
                  <span className="home-text16">✔</span>
                  <span className="home-basic-plan-features">
                    Access to tickets sooner
                  </span>
                </div>
                <div className="home-container12">
                  <span className="home-text17">✔</span>
                  <span className="home-basic-plan-features1">Remove ads</span>
                </div>
                <div className="home-container13">
                  <span className="home-text18">✔</span>
                  <span className="home-basic-plan-features2">
                    Create custom playlists
                  </span>
                </div>
                <div className="home-container14">
                  <span className="home-text19">✔</span>
                  <span className="home-basic-plan-features3">
                    Basic Plan Feature
                  </span>
                </div>
              </div>
            </div>
            <div className="home-pricing-card1">
              <div className="home-container15">
                <span className="home-text20 heading3">Premium Artists</span>
                <span className="home-free-plan-description">
                  In addition to being able to upload and be played on local
                  OurScene Radio
                </span>
              </div>
              <div className="home-container16">
                <span className="home-text21">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-pro-plan-pricing">13</span>
                <span className="home-text24">/ month</span>
              </div>
              <div className="home-container17">
                <div className="home-container18">
                  <div className="home-container19">
                    <span className="home-text25">✔</span>
                    <span className="home-text26">
                      All features of FREE plan
                    </span>
                  </div>
                  <div className="home-container20">
                    <span className="home-text27">✔</span>
                    <span className="home-free-plan-features">
                      Get on regional OurScene radio stations
                    </span>
                  </div>
                  <div className="home-container21">
                    <span className="home-text28">✔</span>
                    <span className="home-free-plan-features1">
                      Connect with venues and promoters
                    </span>
                  </div>
                  <div className="home-container22">
                    <span className="home-text29">✔</span>
                    <span className="home-free-plan-features2">
                      More customization options on your band page
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-pricing-card2">
              <div className="home-container23">
                <span className="home-text30 heading3">
                  <span>Promoter/venue</span>
                  <br></br>
                </span>
                <span className="home-pro-plan-description">
                  Get the ultimate experience with premium features
                </span>
              </div>
              <div className="home-container24">
                <span className="home-text33">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-pro-plan-pricing1">30</span>
                <span className="home-text36">/ month</span>
              </div>
              <div className="home-container25">
                <div className="home-container26">
                  <span className="home-text37">✔</span>
                  <span className="home-text38">
                     All features of BASIC plan
                  </span>
                </div>
                <div className="home-container27">
                  <span className="home-text39">✔</span>
                  <span className="home-pro-plan-features">
                    Upload more music
                  </span>
                </div>
                <div className="home-container28">
                  <span className="home-text40">✔</span>
                  <span className="home-pro-plan-features1">
                    Get on national and regional radio stations
                  </span>
                </div>
                <div className="home-container29">
                  <span className="home-text41">✔</span>
                  <span className="home-pro-plan-features2">
                    More customization options for personal page
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-gallery"></div>
      <div className="home-banner">
        <div className="home-banner1">
          <h1 className="home-banner-heading heading2">
            Unleash the Power of Music
          </h1>
          <span className="home-banner-sub-heading">
            Discover new gigs, connect with artists, and promote your music
          </span>
        </div>
      </div>
      <div className="home-faq">
        <div className="home-faq-container">
          <div className="home-faq1">
            <div className="home-container30">
              <span className="home-text42 sectionTitle">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text45 heading2">Common questions</h2>
              <span className="home-text46">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container31">
              <Question
                Answer="OurScene is a music app being developed to help connect venues with promoters, promoters with artists, and artists with fans. It aims to grow the local music scene by providing easy booking for artists and promoters/venues."
                Question="What is OurScene?"
              ></Question>
              <Question
                Answer="OurScene allows artists to upload their music, get on local radio stations, and connect with promoters and venues. Fans can access tickets sooner, remove ads, make custom playlists, and more. Promoters and venues can book shows, set prices, push to followers, and access real-time in-depth KPI measurables."
                Question="How does OurScene work?"
              ></Question>
              <Question
                Answer="The free version for artists allows them to upload music and get on local radio stations. The free version for fans provides access to tickets, but with limited features."
                Question="What are the features of the free version for artists and fans?"
              ></Question>
              <Question
                Answer="The premium version for listeners costs $5 and offers benefits such as access to tickets sooner, removal of ads, ability to make custom playlists, and more."
                Question="What are the benefits of the premium version for listeners?"
              ></Question>
              <Question
                Answer="The premium version for artists includes access to upload more music, the ability to get on national and regional radio stations, more customization options for their personal page, and access to mail with promoters and venues."
                Question="What additional features does the premium version offer for artists?"
              ></Question>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <footer className="home-footer1">
          <div className="home-container32">
            <span className="home-logo">OURSCENE</span>
            <nav className="home-nav">
              <span className="home-nav1">About</span>
              <span className="home-nav2">Features</span>
              <span className="home-nav3">Pricing</span>
              <span className="home-nav4">Team</span>
              <span className="home-nav5">Blog</span>
            </nav>
          </div>
          <div className="home-separator"></div>
          <div className="home-container33">
            <span className="home-text63">
              © 2023 myCompany, All Rights Reserved.
            </span>
            <div className="home-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon2">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon4">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
