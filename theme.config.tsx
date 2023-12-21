import React from "react"
import { DocsThemeConfig, useConfig } from "nextra-theme-docs"
import { useRouter } from "next/router"

const logo = (
  <>
    <svg
      id="a"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      style={{ height: "2.5em", objectFit: "contain" }}
    >
      <path
        d="m145.95,206.7h7.22c9.3,0,17.33,2.55,23.23,7.39,2.2,1.81,4.05,3.9,5.52,6.23v-13.61h29.83c-5.11-11.2-10.05-21.22-12.02-25.15h-13.74l-.9-1.79s-7.47-16.28-25.99-20.46c17.77-5.23,29.87-16.58,35.84-29.72h13.74c2.71-5.91,4.13-12.32,4.18-18.82.05-6.32-.6-12.64-1.94-18.82-5.82-26.13-25.09-44.5-63.02-48.09h-.3l-4.03-.3H25.74v86.17h-13.74v51.97h13.74v43.01h51.97v-43.16h39.28c14.61,0,20.65,7.38,28.96,25.15Zm-68.23-77.12v-37.63h52.57c10.75,0,20.76,8.06,20.76,18.82s-10.01,18.82-20.76,18.82h-52.57Z"
        fill="currentColor"
      />
      <path
        d="m153.17,213.21c15.85,0,26.32,8.57,26.32,21.58s-10.68,21.65-26.81,21.65h-20.95v-43.23h21.44Zm-6.91,33.18h7.33c6.63,0,11.1-4.56,11.1-11.47s-4.82-11.59-11.8-11.59h-6.63v23.06Z"
        fill="currentColor"
      />
      <path
        d="m202.95,223.08v6.78h23.11v9.87h-23.11v6.85h26.18v9.87h-40.71v-43.23h40.01v9.87h-25.49Z"
        fill="currentColor"
      />
      <path
        d="m253.99,256.44l-18.71-43.23h15.5l11.17,29.91,11.17-29.91h14.87l-18.92,43.23h-15.08Z"
        fill="currentColor"
      />
    </svg>

    <span style={{ marginLeft: ".4em", fontWeight: 800 }}>RMRK EVM Docs</span>
  </>
)

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/rmrk-team",
  },
  docsRepositoryBase: "https://github.com/rmrk-team/evm-docs",
  footer: {
    // text: "RMRK EVM Docs",
    component: <></>,
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== "/") {
      return {
        titleTemplate: "%s | RMRK EVM Docs",
      }
    }
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  logo,
  chat: {
    link: "https://t.me/rmrkimpl",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="24"
        height="24"
        viewBox="0 0 50 50"
        fill="currentColor"
      >
        <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
      </svg>
    ),
  },
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard = "https://evm-docs.vercel.app/images/og.jpg"

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="RMRK EVM developer documentation. Next-generation Modular NFTs"
        />
        <meta
          name="og:description"
          content="RMRK EVM developer documentation. Next-generation Modular NFTs"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="evm.rmrk.app" />
        <meta name="twitter:url" content="https://evm.rmrk.app" />
        <meta
          name="og:title"
          content={title ? title + " – RMRK EVM Docs" : "RMRK EVM Docs"}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="RMRK EVM Docs" />
        <link rel="icon" href="/images/rmrk_dev.png" type="image/png" />
        <link
          rel="icon"
          href="/images/rmrk_dev.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    )
  },
}

export default config
