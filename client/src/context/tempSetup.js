// Manual approach
const updateUser = async (currentUser) => {
	try {
		const { data } = await axios.patch('/api/v1/auth/updateUser', currentUser, {
			headers: {
				Authorization: `Bearer ${state.token}`,
			},
		});
		console.log(data);
	} catch (error) {
		console.log(error.response);
	}
};
