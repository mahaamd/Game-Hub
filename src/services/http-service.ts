import apiClient from "./api-client"

interface Entity {
    id: number;
  }

class HttpService {

    endpoint: string;

    constructor(endpoint: string) {
      this.endpoint = endpoint;
    }
     GetAll <T>() {
        const controller = new AbortController();
        const request = apiClient.get<T[]>(this.endpoint, {
          signal: controller.signal,
        });
        return { request, cancel: () => controller.abort() };
        };

    // delete, create, update
    Delete<T>(id:number) {
        return apiClient.delete(this.endpoint + '/' + id)
    }
    Create <T> (entity:T) {
        return apiClient.post(this.endpoint, entity)
    }
    Updata<T extends Entity>(entity:T) {
        apiClient.patch(this.endpoint + "/" +entity.id,entity) ;
    }

}
const create = (endpoint: string) => new HttpService(endpoint);
export default create;


