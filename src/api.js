export const BASE_URL = "http://127.0.0.1:8000/api/v1";

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

export async function getAdminStmap() {
  const response = await fetch(`${BASE_URL}/insta-admin`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  return json;
}

export async function getAdminResult() {
  const response = await fetch(`${BASE_URL}/insta-admin/result`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  return json;
}

export async function putKeywordsUpdate({ keywords }) {
  const response = await fetch(`${BASE_URL}/insta-admin/edit-keywords`, {
    method: "PUT",
    body: JSON.stringify({
      keywords,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  return json;
}

export async function getKeywords() {
  const response = await fetch(`${BASE_URL}/insta-admin/edit-keywords`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  return json;
}
