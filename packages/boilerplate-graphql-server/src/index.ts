import {promisify} from 'util';
import {readFile} from 'fs';
import {join} from 'path';
import Koa from 'koa';
import graphqlHTTP from 'koa-graphql';
import {buildSchema} from 'graphql';
import resolvers from './resolvers';

(async () => {
	const schema1 = await promisify(readFile)(join(__dirname, 'schema1.graphql'), 'utf-8');
	const schema = buildSchema(schema1);

	const app = new Koa;
	app.use(
		graphqlHTTP({
			schema: schema,
			rootValue: resolvers,
			graphiql: true
		})
	);

	const port = 3000;
	app.listen(port, () => {
		console.log(`http://localhost:${port}/graphiql`);
		console.log(`Сервер слушает на порту ${port}...`);
	});
})();

