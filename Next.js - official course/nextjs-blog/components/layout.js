import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from './utils.module.css';

const name = "Jakub Choszcz"

const Layout = ({ children, home }) => {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Lear how to build a personal website using Next.js"
                />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/profile-image.jpg"
                            className={utilStyles.headingLg}
                            height={108}
                            width={108}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2X1}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Image
                            priority
                            src="/images/profile-image.jpg"
                            className={utilStyles.headingLg}
                            height={108}
                            width={108}
                            alt={name}
                        />
                        <h2>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>‹ Back to the Posts list</a>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Layout;