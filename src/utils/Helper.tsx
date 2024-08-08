import { api } from "../api"

export const emptyFunction = () => { }

export const isEmailValid = (text: string) => {
    const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return reg?.test(text)
}

export const isStrongPassword = (text: string) => {
    // password should be 6 digits and have one capital, one special char and a number
    const strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])[A-Za-z\d!@#$%^&*()\-_=+{};:,<.>.]{6,}$/
    return strongPasswordRegex?.test(text)
}

export const truncateText = (text: string, maxLength: number) => {
    if (!text) return "";
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

export const ImageUrl = "https://albredyback.xpertsgroup.net/images/";
export const SecondImageUrl = "https://albredyback.xpertsgroup.net/public/images/";

export const fetchData = async (url: string, token?: string) => {
    try {
        const headers = token
            ? { Authorization: `Bearer ${token}` }
            : {};

        const response = await api.get(url, { headers });
        return response.data
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
