
export const BASE_API_URL = "testing";

// API: https://provinces.open-api.vn/
export const PUBLIC_ADDRESS_API_V1 = {
    LIST_PROVINCES: "https://provinces.open-api.vn/api/p/",
    LIST_DISTRICTS: "https://provinces.open-api.vn/api/d/",
    LIST_WARDS: "https://provinces.open-api.vn/api/w/",
}

// API: https://api.vnappmob.com
export const PUBLIC_ADDRESS_API_V2 = "https://api.vnappmob.com";

export const PUBLIC_ADDRESS_API = [
    {
        version: "v1",
        URL: PUBLIC_ADDRESS_API_V1,
    },
    {
        version: "v2",
        URL: PUBLIC_ADDRESS_API_V2,
    },
]