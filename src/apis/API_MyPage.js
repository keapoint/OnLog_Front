import axios from "axios";
import { useSelector } from "react-redux";

export const Get_Profile = async () => {
    const accessToken = window.localStorage.getItem("accessToken");
    const userId = window.localStorage.getItem("userId");
    // const accessToken = useSelector(state => state.login.token.accessToken);

    const url = '/blog';
    const res = await axios({
        method: "get",
        url: url,
        headers: {
            'Authorization': `Bearer ${accessToken}`
        },
        params: {
            'blog_id': userId
        }  
    });
    return res.data;
}
export const Put_Profile = async (inputValue) => {
    const accessToken = window.localStorage.getItem("accessToken");
    const url = '/blog';
    const res = await axios({
        method: "put",
        url: url,
        headers: {
            'Authorization': `Bearer ${accessToken}`
        },
        data: {
            "blogName": inputValue.blogName,
            "blogNickname": inputValue.nickName,
            "blogIntro": inputValue.info,
            "blogProfileImg": inputValue.profileImg
        }
    })
}

// 카테고리 관련
export const Get_Categori = async () => {
    const accessToken = window.localStorage.getItem("accessToken");
    const userId = window.localStorage.getItem("userId");

    const url = '/blog/categories';
    const res = await axios({
        method: "get",
        url: url,
        headers: {
            'Authorization': `Bearer ${accessToken}`
        },
        params: {
            'blog_id': userId
        }  
    });
    return res.data;
}
export const Post_Categori = async (inputValue) => {
    const accessToken = window.localStorage.getItem("accessToken");

    const url = '/blog/categories';
    const res = await axios({
        method: "post",
        url: url,
        headers: {
            'Authorization': `Bearer ${accessToken}`
        },
        data: {
            name: inputValue,
        }
    });

    return res.data;
}

export const Post_Post = async(input) => {
    const accessToken = window.localStorage.getItem("accessToken");
    const url = '/posts';
    const res = await axios({
        method: "post",
        url: url,
        headers: {
            'Authorization': `Bearer ${accessToken}`
        },
        data: {
            title: input.title,
            content: input.content,
            summary: input.summary,
            thumbnailLink: input.thumbnailLink,
            isPublic: input.isPublic,
            categoryId: input.category,
            hashtagList: input.tagList,
            topicId: input.topic
        }
    });

    return res.data;
}