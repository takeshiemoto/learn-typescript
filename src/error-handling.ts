const search = async (keyword: string) => {
  const res = await fetch(
    `https://hn.algolia.com/api/v1/search?query=${keyword}`
  );
  console.log(`Results: ${res}`);

  return res.json();
};

export const main = async () => {
  try {
    const response = await search('Angular');
    console.log(response);
  } catch (e) {
    console.log('API Error');
    console.log(e);
  }
};
