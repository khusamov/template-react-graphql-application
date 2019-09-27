import {FieldNode, FragmentSpreadNode, GraphQLResolveInfo} from 'graphql';

export default {
	user({id}, context, info: GraphQLResolveInfo) {


		let selectionNames: string[] = [];
		const userFieldNode = info.fieldNodes[0];
		if (userFieldNode.selectionSet) {

			selectionNames = (
				userFieldNode.selectionSet.selections.filter(selection => 'name' in selection) as (FieldNode | FragmentSpreadNode)[]
			).map(selection => selection.name.value)
		}

		// Список полей, которые были выбраны в запросе
		// Например selectionNames [ 'id', 'name', 'email' ] из следующего запроса:
		// {
		//   user(id: 1) {
		//     id
		//     name
		//     email
		//   }
		// }
		//
		console.log('selectionNames', selectionNames);

		return {
			id: 1,
			name: 'Петр'
		};
	}
};