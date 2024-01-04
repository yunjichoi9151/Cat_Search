const API_ENDPOINT =
  "https://q9d70f82kd.execute-api.ap-northeast-2.amazonaws.com/dev";

// request : 기본이 되는 API 구조
const request = async (url) => {
  try {
    const result = await fetch(url);
    if(!result.ok) throw new Error('API Error');
    return result.json();
  } catch (e) {
    console.warn(e);
  }
}

export const api = {

  // Keyword로 검색된 고양이 사진 목록입니다.
  fetchCats: keyword => {
    return request(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
  },

  // Id로 검색된 고양이 사진 입니다.
  fetchCatInfo: id => {
    return request(`${API_ENDPOINT}/api/cats/${id}`);
  },

  // 랜덤한 50개의 고양이 사진 목록입니다.
  randomFetchCats: () => {
    return request(`${API_ENDPOINT}/cats/random50`);
  }
};
