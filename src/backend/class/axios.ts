import { axiosInstance } from "../variable/axios.ts";

export class ApiService {
  async generateHeaders(token: string) {
    return {
      authorization: `Bearer ${token}`,
      "Custom-Header": "",
    };
  }

  async handleResponse(response: any) {
    if (response.error || response.result) {
      return response;
    } else {
      return `Solicitud de falló con un estado: ${response.status}`;
    }
  }

  async handleResponseStatus(response: any) {
    if (response.status === 200) {
      return response;
    } else {
      return `Solicitud de falló con un estado: ${response.status}`;
    }
  }

  async sendRequestPut(path: string, data: any, token: string) {
    const headers = await this.generateHeaders(token);

    try {
      const result = await axiosInstance.put(path, data, { headers });
      return result.data;
    } catch (error) {
      return false;
    }
  }

  async sendRequestGet(path: string, token: string, data?: any) {
    const headers = await this.generateHeaders(token);

    try {
      if (data) {
        const result = await axiosInstance.get(`${path}/${data}`, { headers });
        return result.data;
      } else {
        const result = await axiosInstance.get(path, { headers });
        return result.data;
      }
    } catch (error) {
      return false;
    }
  }

  async sendRequestPost(path: string, data: any, token: string) {
    const headers = await this.generateHeaders(token);

    try {
      const result = await axiosInstance.post(path, data, { headers });
      return result.data;
    } catch (error) {
      return false;
    }
  }

  async sendRequestPostDownd(path: string, data: any, token: string, file: string) {
    const headers = await this.generateHeaders(token);

    try {
      return axiosInstance
        .post(path, data, {
          headers: headers,
          responseType: "blob",
        })
        .then((response) => {
          const blobUrl = window.URL.createObjectURL(new Blob([response.data]));

          const link = document.createElement("a");
          link.href = blobUrl;
          link.setAttribute("download", file); 
          document.body.appendChild(link);

          link.click();
          window.URL.revokeObjectURL(blobUrl);
          document.body.removeChild(link);
          return;
        })
        .catch((error) => {
          console.error("Error al descargar el archivo:", error);
          return;
        });
    } catch (error) {
      return false;
    }
  }

  async sendRequestDelete(path: string, data: any, token: string) {
    const headers = await this.generateHeaders(token);

    try {
      const result = await axiosInstance.delete(`${path}/${data}`, { headers });
      return result.data;
    } catch (error) {
      return false;
    }
  }
}