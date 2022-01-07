import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import utilStyles from '../components/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'

const Home = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>Choszcz | Home</title>
      </Head>
      <section className={utilStyles.handingMd}>
        <p>Hello, I am Jakub and I am as real a donut 🍩</p>
        <p>
          (This is a sample website from the official Next.js tutorial{' '}
          <a href="https://github.com/JakubChoszcz">check my GitHub</a>.)
        </p>
        {/* <Link href='/posts/first-post'>
          <a>
            Checkout my new posts!
          </a>
        </Link> */}
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className={utilStyles.listItem}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
                <br/>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData
    }
  }
}

export default Home;