const url = "https://forverkliga.se/JavaScript/api/jsonStore.php";

async function saveFoodDataToAPI(foodDataList) {
  console.log("hej");

  try {
    await fetch(`${url}?method=save`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        key: "basil-LSSSM",
        value: JSON.stringify(foodDataList),
      }),
    });
  } catch (error) {
    console.error("Kunde inte hämta api data:", error);
  }
}

async function getMenuFromAPI() {
  const response = await fetch(`${url}?method=load&key=basil-LSSSM`, {
    method: "GET",
  });
  const data = await response.json();

  return JSON.parse(data);
}

export { saveFoodDataToAPI, getMenuFromAPI };
