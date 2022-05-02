import Link from "next/link"
import { useRef, useState, useContext, useEffect } from "react";
import AuthContext from "../Context/AuthProvider";

const Login = () => {

  const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(()=>{
        setErrMsg("");
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify({ user, pwd }),
            {
                headers: { "Content-Type" : "application/json" },
                withCredentials: false
            }
            );
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);    
        } catch (err) {
            if (!err?.response) {
                setErrMsg('noresponde el serbidor');
            } else if (err.response?.status === 406) {
                setErrMsg('Usuario o contraseña incorrecto');
            } else if (err.response?.status === 401) {
                setErrMsg('inautorisado mijo');
            } else {
                setErrMsg('Entrada fayida');
            }
            errRef.current.focus();
        }
    }

  return (
    <>
      <section className="mt-24 grid grid-cols-3">
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
              <input type="text" placeholder="Password" className="border-black border rounded-md p-3 w-full my-3"></input>
                <Link href="/">
                  <a className="py-3 px-6 w-full text-center bg-black text-white rounded-md">Login</a>
                </Link>
                <Link href="/register">
                  <a className="py-4 px-6 w-full text-center border-b border-black mb-8">Forgot your password?</a>
                </Link>
                <Link href="/register">
                  <a className="py-3 px-6 w-full text-center bg-green-600 text-white rounded-md">Register</a>
                </Link>
              </form>
        </article>
      </section>
    </>
  )
}

export default Login