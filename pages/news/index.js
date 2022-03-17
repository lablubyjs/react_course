// our-domain.com/news
import Link from 'next/link'
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/1">NextJS is a great Framework</Link>
        </li>
        <li>
          <Link href="/news/2">Something Else</Link>
        </li>
      </ul>
    </Fragment>
  )
}

export default NewsPage;