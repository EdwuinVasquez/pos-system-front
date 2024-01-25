import { ApiService } from "./axios.ts";

const apiService = new ApiService();

export async function CookiesToken(token: string) {
    try {
        const response = await apiService.sendRequestPost(
            "/getDataToken",
            {},
            token
        );
        return apiService.handleResponse(response);
    } catch (error) {
        return `Error en el manejo de la petición`;
    }
}