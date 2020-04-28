import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import { RedocStandalone } from 'redoc'

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  /*const { location } = window

  debugger
  if (location.indexOf('/api')) {
    return (
      <div>
        <RedocStandalone
          specUrl='api.yaml'
          options={{
            nativeScrollbars: true,
            showExtensions: false,
            hideSchemaTitles: true,
            hideDownloadButton: true,
            theme: { colors: { main: '#dd5522' } },
          }}
        />
      </div>
    )
  }*/
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description='Redkubes Otomi Documentation site'>
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className='container'>
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p className='hero__subtitle'>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames('button button--outline button--secondary button--lg', styles.getStarted)}
              to={useBaseUrl('docs/about-otomi')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main></main>
    </Layout>
  )
}

export default Home
