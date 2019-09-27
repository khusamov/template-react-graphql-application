export default {
	user({id}, context, info) {
		console.log(info)
		return {
			id: 1,
			name: 'Петр'
		};
	}
};