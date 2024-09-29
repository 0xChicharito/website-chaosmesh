import BrowserOnly from '@docusaurus/BrowserOnly'
import Head from '@docusaurus/Head'
import Link from '@docusaurus/Link'
import Translate from '@docusaurus/Translate'
import useBaseUrl from '@docusaurus/useBaseUrl'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import { clsx } from 'clsx'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'

import IconGithub from '../../static/img/icons/github.svg'
import IconHelp from '../../static/img/icons/help.svg'
import IconLibrary from '../../static/img/icons/library.svg'
import IconOctocat from '../../static/img/icons/octocat.svg'
import Card from '../components/Card'
import ChaosdFeatures from '../components/ChaosdFeatures'
import CodeGrid from '../components/CodeGrid'
import Features from '../components/Features'
import Mesh from '../components/Mesh'
import PickVersion from '../components/PickVersion'
import whoIsUsing from '../data/whoIsUsing'
import styles from './index.module.css'

gsap.registerPlugin(ScrollTrigger)

const description =
  'Our mission is keeping stable of node and provide best services for project and community. Running a node is essential for maintaining the integrity, security, and decentralization of blockchain networks.'

function Home() {
  const { siteConfig } = useDocusaurusContext()

  useEffect(() => {
    document.querySelector('.navbar__inner').classList.add('tw-container', 'tw-mx-auto')

    gsap.from('.scroll-to-display', {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.25,
      scrollTrigger: {
        trigger: '.scroll-to-display',
        toggleActions: 'restart none none none',
      },
    })

    gsap.from('.scroll-to-display-x', {
      duration: 1,
      opacity: 0,
      x: 0,
      y: 100,
      stagger: 0.25,
      scrollTrigger: {
        trigger: '.scroll-to-display-x',
        toggleActions: 'restart none none none',
      },
    })
  }, [])

  return (
    <Layout description={description}>
      <Head>
        <title>Chaos Mesh: {siteConfig.tagline}</title>
      </Head>
      <main>
        <div className="hero tw-relative tw-h-[768px] tw-pt-0 tw-overflow-hidden">
          <BrowserOnly>{() => <Mesh />}</BrowserOnly>
          <div className="tw-container tw-mx-auto tw-z-10">
            <div className="tw-flex tw-flex-col lg:tw-flex-row lg:tw-justify-between lg:tw-items-center">
              <div className="tw-flex-[.8] 2xl:tw-flex-[.6] tw-p-6 lg:tw-p-3">
                <h1
                  className={clsx(
                    'tw-inline-block tw-text-5xl xl:tw-text-6xl tw-text-left tw-rounded-2xl tw-backdrop-blur-sm lg:tw-backdrop-blur',
                    styles.heroTitle
                  )}
                >
                  <span>Maintain</span>
                  <br />
                  Your System
                  <br />
                  <span>Continuously.</span>
                </h1>
                <p className="lg:tw-text-lg tw-font-medium tw-rounded-2xl tw-backdrop-blur-sm lg:tw-backdrop-blur">
                  {/* TODO: add translation. */}
                  <Translate id="home.description">{description}</Translate>
                </p>
                <div className="tw-flex tw-gap-3">
                  <Link
                    to="https://service.node9x.com"
                    className="tw-btn tw-btn-primary hover:tw-text-white hover:-tw-translate-y-[3px]"
                  >
                    Get Started →
                  </Link>
                  <Link
                    to="https://github.com/0xChicharito"
                    className="tw-btn tw-btn-neutral tw-gap-2 dark:tw-glass hover:tw-text-white hover:-tw-translate-y-[3px]"
                  >
                    <IconOctocat className="tw-w-4 tw-h-4 tw-fill-white" />
                    GitHub
                  </Link>
                </div>
              </div>

              <div className="lg:max-xl:tw-w-[500px] tw-p-6 lg:tw-p-3">
                <h2 className="tw-inline-block tw-text-base lg:tw-text-lg tw-font-semibold tw-rounded-2xl tw-backdrop-blur-sm lg:tw-backdrop-blur">
                  Try it out with the following command 👇
                </h2>
                <PickVersion className="!tw-mb-0">
                  cd $HOME && source <(curl -s https://raw.githubusercontent.com/0xChicharito/binaries/refs/heads/main/update-binary.sh) | bash
                </PickVersion>
              </div>
            </div>
          </div>
        </div>

        <div className="hero">
          <div className="tw-container tw-mx-auto max-lg:tw-px-4 tw-text-center">
            <h2 className="tw-text-lg">
              <Translate id="home.whoisusing">Node Operating</Translate>
            </h2>
            <div className="max-md:tw-overflow-x-auto dark:tw-invert dark:tw-saturate-0">
              <div className="row max-md:tw-w-[1280px]">
                {whoIsUsing.map((w) => (
                  <div key={w.name} className={clsx('col col--1', styles.whiteboardCol)}>
                    <a
                      className="tw-flex tw-justify-center tw-items-center tw-h-[100px] tw-select-none"
                      href={w.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img style={w.style} src={useBaseUrl(w.img)} alt={w.name} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hero">
          <div className="tw-container tw-mx-auto max-lg:tw-px-4">
            <div className="tw-max-w-[800px] tw-mx-auto tw-text-center">
              {/* TODO: add translation. */}
              <h2 className="tw-text-4xl xl:tw-text-5xl">
                <span className={styles.heroTitle}>Wide variety</span> of dedicated servers.
              </h2>
              <p className="lg:tw-text-lg tw-font-medium">
                <Translate id="home.failuretypes.1">
                  We are using many dedicated servers from many suppliers to ensure we always maintain uptime.
                </Translate>
              </p>
            </div>
            <img
              className={clsx(
                'tw-block tw-mx-auto tw-select-none dark:tw-invert-[.85] dark:tw-saturate-0',
                styles.chaosCategory
              )}
              src="img/home/chaos-category.svg"
              alt="Chaos Category"
            />

            <div className="tw-flex tw-justify-center tw-mt-12">
              <Link
                to="https://explorer.node9x.com"
                className="tw-btn tw-btn-primary tw-gap-2 hover:tw-text-white hover:-tw-translate-y-[3px]"
              >
                <IconLibrary className="tw-w-4 tw-h-4 tw-fill-white" />
                Explore More
              </Link>
            </div>
            <div className="tw-grid tw-gap-8 lg:tw-grid-cols-3 tw-my-12">
              <CodeGrid />
            </div>
          </div>
        </div>

        <div className="hero">
          <div className="tw-container tw-mx-auto max-lg:tw-px-4">
            <div className="tw-flex tw-flex-col lg:tw-flex-row lg:tw-items-center tw-gap-8">
              <div className={clsx('tw-relative tw-flex-1 tw-flex tw-items-center tw-overflow-hidden xl:tw-h-[640px]')}>
                <img className="tw-absolute tw-w-[90%]" src="/img/home/chaosd-bg.svg" />
                <div className="tw-flex tw-justify-center tw-items-center xl:tw-w-[75%] lg:tw-h-[100%]">
                  <ChaosdFeatures />
                </div>
              </div>
              <div className="tw-flex-[1.5] tw-z-10">
                <span className="tw-badge tw-badge-primary">Experimental</span>
                {/* TODO: add translation. */}
                <h2 className="tw-text-4xl xl:tw-text-5xl">
                  Meet <span className={styles.heroTitle}>Chaosd</span>: A Chaos Toolkit for Physical Machines.
                </h2>
                <p className="lg:tw-text-lg tw-font-medium">
                  Even if you are not using Kubernetes, you can still take advantage of the features offered by Chaos
                  Mesh. One of our experimental tools, Chaosd, is specifically designed to test chaos on physical
                  machines. Moreover, you can use{' '}
                  <Link className="tw-underline dark:tw-no-underline" to="/docs/simulate-physical-machine-chaos">
                    PhysicalMachineChaos
                  </Link>{' '}
                  in Chaos Mesh to remotely invoke Chaosd for conducting experiments on physical machines.
                </p>
                <Link
                  to="/docs/chaosd-overview/"
                  className="tw-btn tw-btn-primary tw-gap-2 hover:tw-text-white hover:-tw-translate-y-[3px]"
                >
                  Overview →
                </Link>
              </div>
            </div>
          </div>
        </div>

       
      </main>
    </Layout>
  )
}

export default Home
