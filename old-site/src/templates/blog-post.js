import React from 'react';
import { graphql, Link } from 'gatsby';
import Seo from '../components/Seo';

import { formatDate } from '../lib/formatDate';

const homeSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 lg:mr-2"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>
);

const bookSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 lg:mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
);

const prevSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto h-5 w-5 lg:mr-2 lg:ml-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 19l-7-7m0 0l7-7m-7 7h18"
    />
  </svg>
);

const nextSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto h-5 w-5 lg:mr-0 lg:ml-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
);

const ButtonPlaceholder = ({ content, icon }) => (
  <button
    type="button"
    disabled
    className="pointer-events-none mb-4 inline-block border border-gray-400 bg-gray-300 py-2 px-4 text-center shadow-md hover:bg-sage-100 lg:bg-inherit"
  >
    <span className="hidden lg:inline">{content}</span>
    <span className="lg:hidden">{icon}</span>
    <span className="sr-only">{content}</span>
  </button>
);

const NavButton = ({ href, content, preIcon, postIcon }) => (
  <Link
    to={href}
    className="mb-4 inline-block border border-gray-400 py-2 px-4 shadow-md hover:bg-sage-100"
  >
    <p className="flex items-center justify-center">
      {preIcon}
      <span className="hidden lg:inline">{content}</span>
      {postIcon}
    </p>
  </Link>
);

const BlogPost = ({ data: { post }, pageContext: { prevPost, nextPost } }) => (
  <div className="m-4 border border-gray-400 p-2 shadow-md lg:m-0 lg:p-4">
    <Seo title={post.frontmatter.title} />
    <article>
      <header className="my-4 py-2 text-center">
        <h2 className="mx-auto mb-2 border-b-4 border-sage px-6 text-xl lg:w-max lg:text-2xl">
          {post.frontmatter.title}
        </h2>
        <small className="text-base italic">
          Published on {formatDate(post.frontmatter.date)}
        </small>
        <nav className="mx-auto mt-8 grid grid-cols-4 gap-2 lg:w-3/4 lg:grid-cols-2">
          <NavButton href="/" content="Go Back Home" preIcon={homeSvg} />
          {/* TODO: Would be cool to jump back to last visited blog page, if any, else, first page */}
          <NavButton
            href="/blog"
            content="Back To All Posts"
            preIcon={bookSvg}
          />
          {prevPost ? (
            <NavButton
              href={`/blog/${prevPost.slug}`}
              content={prevPost.title}
              preIcon={prevSvg}
            />
          ) : (
            <ButtonPlaceholder
              content="Woah! You found the oldest post"
              icon={prevSvg}
            />
          )}

          {nextPost ? (
            <NavButton
              href={`/blog/${nextPost.slug}`}
              content={nextPost.title}
              postIcon={nextSvg}
            />
          ) : (
            <ButtonPlaceholder
              content="This is the most recent post!"
              icon={nextSvg}
            />
          )}
        </nav>
      </header>
      <div
        dangerouslySetInnerHTML={{ __html: post.html }}
        className="prose prose-sky mx-auto text-justify lg:prose-lg"
      />
    </article>
  </div>
);

export const query = graphql`
  query SinglePost($slug: String!) {
    post: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
        date(formatString: "YYYY-MM-DD")
      }
      html
    }
  }
`;

export default BlogPost;
