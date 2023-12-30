export async function getServerSideProps() {
  let res = await fetch("https://axia-3akb.onrender.com", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let allData = await res.json();

  return {
    props: { allData },
  };
}