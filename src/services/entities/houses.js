import api from "../api";

const houses = {
  getHouses: async () => {
		try {
			const response = await api.get("/Houses");

			return response.data;
		} catch (error) {
			console.log(error);
		}
	}
}

export default houses
