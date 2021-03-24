import axios from "axios";

const BASEURL =
	"https://randomuser.me/api/?inc=name,email,picture,phone?results=30";

export default {
	getUsers: function () {
		return axios.get(BASEURL);
	},
};
