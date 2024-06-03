import { baseApi } from "./baseApi"

export const login = async (token: string) => {
    const { data } = await baseApi.post('/auth/google', {
        token
    })

    console.log('data: ', data);
}