import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import ServiceCard from '../components/ServiceCard'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Footer from '../components/Footer'

const services = [
  {
    avatar: "PWA",
    title: "Progressive Web Apps",
    image: "/wireframe.jpeg",
    paragraph1: `The future of web design! Progressive Web Apps can be accessed anywhere on the web without any install friction, while still
    providing a quality mobile experience that users expect.`,
    paragraph2: `PWAs rival the performance of native apps but require much less device storage. Many leading companies utilise PWAs in their 
    digital strategies. Those which replaced their existing websites with PWAS, have shown significant increase in user engagement on their 
    new websites.`,
    paragraph3: `Whether you plan to build a new web app or upgrade your existing web app, PWAs is the most cost effective solution to cater 
    for both desktop and mobile users.` 
  },
  {
    avatar: "BI",
    title: "Business SW Integration",
    image: "/integration.jpeg",
    paragraph1: `Spend more time in expanding business and less time in business administration! Integrate your website with back-end systems
    to improve productivity and reporting efficiency.`,
    paragraph2: `Integrating your website with back-end systems has many benefits. These advantages range from improved data integrity across 
    the organization, to real-time reporting, and greater employee optimisation from removing manual data entry processes.`,
    paragraph3: `We can integrate your website with your back-end systems regardless what capabilities the back-end software has. Most importantly, 
    Your data will be kept securely.` 
  },
  {
    avatar: "CD",
    title: "Custom Design",
    image: "/design.jpeg",
    paragraph1: `Each business is unique. You need a customised website design and SW architecture to achieve what is best for your current 
    business need and potential future expansion.`,
    paragraph2: `We take your ideas and data to create content and design your business UI/UX and process flows.`,
    paragraph3: `Your website will be responsive and integrated with your business back-end systems.` 
  }
]

const useStyles = makeStyles(theme => ({
  grid: {
    maxWidth: 1200,
    margin: 'auto',
  }
}))

const Home = () => {
  const classes = useStyles()

  return  (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <div className="hero">
        <h1 className="title">Welcome to DiGi Transform!</h1>
        <p className="description">
          Let us solve your business problems with the latest digital technologies.
        </p>
        <div>
          <Grid container justify="space-between" className={classes.grid} spacing={2}>
            {services.map(service => 
              <Grid item xs={12} md={4} key={service.avatar}>
                <ServiceCard
                  avatar={service.avatar}
                  image={service.image}
                  title={service.title}
                  paragraph1={service.paragraph1}
                  paragraph2={service.paragraph2}
                  paragraph3={service.paragraph3}
                />
              </Grid>
            )}
          </Grid>
        </div>
        <Footer/>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #142C5C;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 130px;
          line-height: 1.15em;
          font-size: 3em;
          background-image: url(/DiGiTF_logo_Transparency.png);
          background-size: 100px auto;
          background-repeat: no-repeat;
          background-position: 50% 0;
        }
        .title,
        .description {
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export default Home
