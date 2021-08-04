const MUVIES_KEY = '95d76c49cb194c181ea528b4795202cb';

function FetchPopularMuvies() {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${MUVIES_KEY}`,
  ).then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error(`Что-то пошло не так, повторите запрос.`));
  });
}

function FetchMuviesKeyWord(velue) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?query=${velue}&api_key=${MUVIES_KEY}`,
  ).then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error(`Что-то пошло не так, повторите запрос.`));
  });
}

function FetchMuvieFullInfo(movieID) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${MUVIES_KEY}`,
  ).then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error(`Что-то пошло не так, повторите запрос.`));
  });
}

function FetchMuvieCradits(movieID) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${MUVIES_KEY}`,
  ).then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error(`Что-то пошло не так, повторите запрос.`));
  });
}

function FetchMuvieReviews(movieID) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieID}/reviews?api_key=${MUVIES_KEY}`,
  ).then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error(`Что-то пошло не так, повторите запрос.`));
  });
}

const api = {
  FetchPopularMuvies,
  FetchMuviesKeyWord,
  FetchMuvieFullInfo,
  FetchMuvieCradits,
  FetchMuvieReviews,
};

export default api;
