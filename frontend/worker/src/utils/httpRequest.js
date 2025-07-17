import axios from "axios";
// import { useAccountStore } from "@/stores/account";

const instance = axios.create({
    // baseURL: 'http://localhost:8080',  // json-server URL
    // baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
    },
    paramsSerializer: {
        encode: encodeURIComponent,
        serialize: (params) => {
            // URL 쿼리 파라미터 직렬화
            const searchParams = new URLSearchParams();
            for (const key in params) {
                if (params[key] !== undefined && params[key] !== null) {
                    searchParams.append(key, params[key]);
                }
            }
            return searchParams.toString();
        }
    }
});

// 요청 인터셉터
instance.interceptors.request.use(
    (config) => {
        console.log('API Request:', config.method?.toUpperCase(), config.url, config.params || config.data)
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 응답 인터셉터
instance.interceptors.response.use(
    (response) => {
        console.log('API Response:', response.status, response.data)
        return response;
    },
    async (error) => {
        console.error('API Error:', error.response?.status, error.response?.data)
        return Promise.reject(error);
    }
);

// HTTP 요청 설정 생성
const generateConfig = (data) => {
    // const accountStore = useAccountStore();
    const config = {
        headers: {}
    };
    // if (accountStore.accessToken) {
    //     config.headers.authorization = `Bearer ${accountStore.accessToken}`;
    // }
    // FormData인 경우 Content-Type을 삭제하여 브라우저가 자동으로 boundary 설정하도록 함
    if (data instanceof FormData) {
        config.headers['Content-Type'] = undefined;
    }
    return config;
};

// HTTP 클라이언트 메서드
const httpClient = {
    get(url, params = {}, config = {}) {
        const finalConfig = {
            ...generateConfig(),
            ...config,
            params
        };
        if (params && typeof params === 'object' && Object.keys(params).length > 0) {
            finalConfig.params = params;
        }
        return instance.get(url, finalConfig);
    },
    post(url, data, config = {}) {
        return instance.post(url, data, {
            ...generateConfig(data),
            ...config
        });
    },
    put(url, data, config = {}) {
        return instance.put(url, data, {
            ...generateConfig(data),
            ...config
        });
    },
    delete(url, config = {}) {
        return instance.delete(url, {
            ...generateConfig(),
            ...config
        });
    },
    patch(url, data, config = {}) {
        return instance.patch(url, data, {
            ...generateConfig(data),
            ...config
        });
    }
};

export default httpClient; 