import api from "../api";

const wizards = {
  getWizards: async () => {
		try {
			const response = await api.get("/Wizards");

			return response.data;
		} catch (error) {
			console.log(error);
		}
	}
}

export default wizards