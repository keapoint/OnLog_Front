import axios from "axios";

export const CardList = async (localData) => {
    const url = '';
    const res = await axios({
        method: "get",
        url: url,
        headers: {
            'X-ACCESS-TOKEN': localData
        }
    });

    return res.data.result; 
}