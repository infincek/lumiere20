const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

const baseJson = require(`./data/base.json`);

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `basepages` });
        createNodeField({
            node,
            name: `slug`,
            value: slug
        });
    }
};

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    
    const { events } = baseJson;
    
    return graphql(`
        {
            allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/events/" } }
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `).then(result => {
        const posts = result.data.allMarkdownRemark.edges;

        posts.forEach(({ node }) => {
            let template = "post"
            createPage({
                path: node.fields.slug,
                component: path.resolve("./src/templates/" + template + ".js"),
                context: {
                    slug: node.fields.slug
                }
            });
        });

        events.forEach(e => {
            createPage({
                path: e.url,
                component: path.resolve(`./src/templates/event.js`),
                context: {
                    data: {
                        regex: e.url+"/",
                        ...e
                    }
                }
            })
        })

    })
};
