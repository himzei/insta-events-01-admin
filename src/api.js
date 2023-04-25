export const BASE_URL =
  "https://port-0-insta-stamp-test-by52fb24lbbufx8n.gksl2.cloudtype.app/api/v1";
// export const BASE_URL = "http://127.0.0.1:8000/api/v1";

export async function putHashtagsSelected({ hashtag, dataId }) {
  const response = await fetch(`${BASE_URL}/insta-admin/edit-keywords/`, {
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
    }
  );
  const json = await response.json();
  return json;
}

export async function postKeywordsUpdate({ keywords, dataId }) {
  const response = await fetch(`${BASE_URL}/insta-admin/edit-keywords/`, {
    method: "POST",
    body: JSON.stringify({
      keywords,
      dataId,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  return json;
}

export async function getSettings(params) {
  const events_name = params.queryKey[1];
  const response = await fetch(
    `${BASE_URL}/insta-admin/edit-keywords?name=${events_name}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const json = await response.json();
  return json;
}
