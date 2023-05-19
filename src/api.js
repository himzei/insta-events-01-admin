export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:8000/api/v1"
    : "https://port-0-insta-events-01-e9btb72mlh5nv7yh.sel4.cloudtype.app/api/v1";

// export const BASE_URL = "https://insta-events.azurewebsites.net/api/v1";

export async function usernameLogin({ username, password }) {
  console.log(username, password);
  if (username !== "test" && password !== "1111") {
    return false;
  }
  // const response = await fetch(`${BASE_URL}/users/login`, {
  //   method: "POST",
  //   body: JSON.stringify({
  //     username,
  //     password,
  //   }),
  //   headers: {
  //     "X-CSRFToken": Cookie.get("csrftoken") || "",
  //     "Content-Type": "application/json",
  //   },
  // });
  // const json = await response.json();
  // return json;
}

export async function putHashtagsSelected({ hashtag, dataId }) {
  const response = await fetch(`${BASE_URL}/insta-admin/edit-keywords`, {
    method: "PUT",
    body: JSON.stringify({
      hashtag,
      dataId,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  return json;
}

export async function getChartResult() {
  const response = await fetch(`${BASE_URL}/insta-admin/chart-result`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const json = await response.json();
  return json;
}

export async function getAdminStmap(page) {
  const currentPage = page.queryKey[1];
  const hashtagsId = page.queryKey[2];
  const response = await fetch(
    `${BASE_URL}/insta-admin?page=${currentPage}&hashtagsId=${hashtagsId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );
  const json = await response.json();
  return json;
}

export async function getAdminResult(page) {
  const currentPage = page.queryKey[1];
  const hashtagsId = page.queryKey[2];
  const response = await fetch(
    `${BASE_URL}/insta-admin/result?page=${currentPage}&hashtagsId=${hashtagsId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );
  const json = await response.json();
  return json;
}

export async function postKeywordsUpdate({ keywords, dataId }) {
  const response = await fetch(`${BASE_URL}/insta-admin/edit-keywords`, {
    method: "POST",
    body: JSON.stringify({
      keywords,
      dataId,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const json = await response.json();
  return json;
}

export async function getSettings() {
  // const events_name = params.queryKey[1];
  const response = await fetch(`${BASE_URL}/insta-admin/edit-keywords`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const json = await response.json();
  return json;
}
