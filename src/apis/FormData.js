import axios from "axios";

const apiUrl = 'https://frontend-take-home.fetchrewards.com/form';

class FormData {
    async fetchFormSetupData() {
        return axios
            .get(apiUrl)
            .then(({ data }) => data)
            .catch((error) => console.error(error));
    }
    async submitFormData(values) {
        return axios
            .post(apiUrl, values)
            .then((response) => {return response})
            .catch((error) => console.log(error));

    }
}

export default FormData;