import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Footer from "../../components/footer";
import { Link, graphql } from "gatsby";

const BlogPage = ({ data }) => {
  return (
    <main class="pt-4 pl-4">
      <Layout>
        <div class="px-6 py-10  mx-auto">
          <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            {data.allMdx.nodes.map((node) => (
              <div class="lg:flex" key={node.id}>
                <img
                  class="object-cover w-full h-56 rounded-lg lg:w-64"
                  src={node.frontmatter.hero_image_credit_link}
                  alt="hero"
                />
                <div class="flex flex-col justify-between py-6 lg:mx-6">
                  <Link to={`/blog/${node.frontmatter.slug}`}>
                    <a
                      href={`/blog/${node.frontmatter.slug}`}
                      class="text-xl font-semibold text-blue"
                    >
                      {node.frontmatter.title}
                    </a>
                    <hr />
                  </Link>

                  <span class="text-sm text-gray-800 dark:text-gray-800">
                    Posted On: {node.frontmatter.date}
                  </span>
                  <p>{node.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>

      <Footer></Footer>
    </main>
  );
};
export const query = graphql`
  query MyQuery {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          hero_image_credit_link
        }
        id
        excerpt
      }
    }
  }
`;
export const Head = () => <Seo title="Blog" />;
export default BlogPage;
