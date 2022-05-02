import Link from "next/link"

const Login = () => {
  return (
    <>
      <section className="mx-96 mt-32 shadow-2xl rounded-md flex flex-col">
        <p className="font-bold text-4xl text-center my-10 border-b-black">Login</p>
          <input type="text" placeholder="User" className="border-black border rounded-md"></input>
          <input type="text" placeholder="Password" className="border-black border rounded-md"></input>
          <Link href="/">
            <a className="py-3 px-6 bg-black text-white rounded-md">Login</a>
          </Link>
          <Link href="/register">
            <a className="py-3 px-6 bg-green-600 text-white rounded-md">Register</a>
          </Link>
      </section>
    </>
  )
}

export default Login