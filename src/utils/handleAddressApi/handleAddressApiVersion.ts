import { PUBLIC_ADDRESS_API } from "../../constants/api";

export const handleAddressApiVersion = (version:string) => {
    const data = PUBLIC_ADDRESS_API.filter((addressApi:any) => version == addressApi.version)
    return data[0].URL;
    
}