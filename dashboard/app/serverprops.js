export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('https://axia-3akb.onrender.com/api/')
    const user = await res.json()
    // Pass data to the page via props
    return { props: { user } }
  }