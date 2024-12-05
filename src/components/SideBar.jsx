import { ArrowRotateLeft, Box, Home, Setting, SmsNotification, User } from "iconsax-react"
import { Link } from "react-router-dom"


const SideBar = () => {
  return (
    <aside className="flex flex-col justify-between w-[280px] h-dvh fixed left-0 top-0 z-50 bg-container">
        <div className="flex flex-col gap-12">
            <h1 className="flex justify-center items-center text-2xl font-bold mt-[33px]">LOGO</h1>
            <nav className="flex flex-col">
                <Link to="/" className="flex items-center gap-8 text-xl font-semibold px-8 py-3 transition hover:bg-body hover:text-primary"><Home size={26}/>Dashboard</Link>
                <Link to="/list-barang" className="flex items-center gap-8 text-xl font-semibold px-8 py-3 transition hover:bg-body hover:text-primary"><Box size={26}/>List Barang</Link>
                <Link to="/history" className="flex items-center gap-8 text-xl font-semibold px-8 py-3 transition hover:bg-body hover:text-primary"><ArrowRotateLeft size={26}/>History</Link>
                <Link to="/notification" className="flex items-center gap-8 text-xl font-semibold px-8 py-3 transition hover:bg-body hover:text-primary"><SmsNotification size={26}/>Notification</Link>
            </nav>
        </div>
        <div className="flex flex-col">
            <Link to="/setting" className="flex items-center gap-8 text-xl font-semibold px-8 py-3 hover:bg-body hover:text-primary"><Setting/>Setting</Link>
            <button className="flex justify-center items-center gap-2 mx-8 my-5 py-1.5 rounded-lg text-primary font-bold bg-[#0073ff27] transition hover:bg-[#0073ff4b]">Account<User/></button>
        </div>
    </aside>
  )
}

export default SideBar