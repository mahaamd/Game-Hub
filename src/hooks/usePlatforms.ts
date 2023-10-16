import "../services/api-client"
import UseData from "./UseData"
// import { Platform } from "./UseGames";

interface Platform{
    id:number,
    name:string,
    slug:string
}

const PlatForms = () => UseData<Platform>('/platforms/lists/parents')
export default PlatForms;