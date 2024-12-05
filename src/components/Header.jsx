import { Link } from "react-router-dom"


const Header = () => {
  return (
    <header className=" w-full fixed top-5 left-0">
      <section className="flex justify-between items-center mx-48 bg-container p-5 rounded-xl shadow-md">
        <h1 className="font-extrabold">PI School</h1>
        <div className="flex justify-center items-center gap-2 font-semibold">
          <Link to={'login'} className="hover:bg-primary hover:text-body transition p-1 px-3 rounded-lg">Login</Link>
          <Link to={'register'} className="hover:bg-primary hover:text-body transition p-1 px-3 rounded-lg">Register</Link>
        </div>
      </section>
    </header>
  )
}

export default Header