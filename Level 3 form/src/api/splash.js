import axios from "axios";

//pre-customize version of axios
export default axios.create({
    baseURL: "https://api.unsplash.com",

    headers: {
        Authorization:
            "Client-ID c33102b55c85d2eddfa12765d6a2d4b5d376b4e4c4a9ac6ff51b78c8cc56c765"
    }
});
