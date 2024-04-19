export default {
	fetch_first_name () {
		get_user_by_email.run()
		const name_data = {{get_user_by_email.data}};
		if (name_data) {
			storeValue('first_name', name_data[0][1], false);
			storeValue('last_name', name_data[0][1], false);
			storeValue('id', name_data[0][1], false);
			return (appsmith.store.first_name, appsmith.store.last_name);
		}
	},
}