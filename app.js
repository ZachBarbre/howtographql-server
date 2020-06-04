const { GraphQLServer } = require('graphql-yoga');

let links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
}];

let idCount = links.length;

const resolvers = {
  Query: {
    info: () => 'This is the API of a Hackernews Clone',
    feed: () => links,
    link: (parent, args) => {
      let linkIndex = '';
      links.forEach((link, index) => {
        if (link.id === agrs.id) {
          linkIndex = index;
        }
      });
      // return links[linkIndex];
    }
  },
  Mutation: {
    post: (parent, agrs) => {
      const link = {
        id: `link-${idCount++}`,
        description: agrs.description,
        url: agrs.url,
      }
      links.push(link)
      return link
    }
  },
};

const server = new GraphQLServer({
  typeDefs: `./schema.graphql`,
  resolvers,
});

server.start(() => console.log('Sever is running on http://localhost:4000'));