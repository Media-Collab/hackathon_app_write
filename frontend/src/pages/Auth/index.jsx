import Link from "next/link"
import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";
import axios from '../api/axios';


const Login = () => {

    const userRef = useRef();
    const errRef = useRef('');
    const router = useRouter();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(()=>{
      async function fetchEnd() {
          if (success === true) {
            router.push('/');
          }
      }
      fetchEnd();
    }, [success])

    useEffect(()=>{
        setErrMsg("");
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(JSON.stringify({ user, pwd }),
            {
                headers: { "Content-Type" : "application/json" },
                withCredentials: false
            }
            );
            console.log(JSON.stringify(response?.data));
            setUser('');
            setPwd('');
            setSuccess(true);    
        } catch (err) {
            if (!err?.response) {
                setErrMsg('The server does not respond');
            } else if (err.response?.status === 406) {
                setErrMsg('Wrong username or password');
            } else if (err.response?.status === 401) {
                setErrMsg('Invalid credentials');
            } else {
                setErrMsg('Failed entry');
            }
            errRef.current.focus();
        }
    }

  return (
    <>
      {success ? (
          <section>
            <h1>Loading...</h1>
          </section>
        ) : (
          <section className="mt-24 grid grid-cols-3">
          <p ref={errRef} className={errMsg ? "bg-red-200 text-red-500 font-bold p-4 max-w-lg text-center rounded-lg mx-auto absolute z-10 top-12 right-0 left-0 border-2 border-red-500" : "hidden"} aria-live="assertive">{errMsg}</p>
            <article className="shadow-2xl rounded-md col-start-2">
                <form onSubmit={handleSubmit} className="m-12 items-center flex flex-col">
                  <p className="font-bold text-4xl text-center mb-10 border-b border-black w-full py-5">Welcome!</p>
                  <input type="text" placeholder="User" className="border-black border rounded-md p-3 w-full"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required></input>
                  <input placeholder="Password" type="password" className="border-black border rounded-md p-3 w-full my-3"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required></input>
                    <input type="submit" className="py-3 px-6 w-full text-center bg-black text-white rounded-md" value="Login"/>
                    <Link href="/register">
                      <a className="py-4 px-6 w-full text-center border-b border-black mb-8">Forgot your password?</a>
                    </Link>
                    <Link href="/register">
                      <a className="py-3 px-6 w-full text-center bg-green-600 text-white rounded-md">Register</a>
                    </Link>
                  </form>
            </article>
          </section>
        )
      }
    </>
  )
}

export default Login