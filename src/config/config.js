

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const apiConfig = {
    baseUrl: API_BASE_URL,
    endpoints: {
        contact: '/api/contact',
        question: '/api/question',
    }
};
