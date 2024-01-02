const page = () => {

    const handleForm = async (e) => {
        'use server'
        console.log('form submitted')
    }
  return (
    <div>
        <form action={handleForm}>
            <input type="text" />
            <button>send</button>
        </form>
    </div>
  )
}

export default page