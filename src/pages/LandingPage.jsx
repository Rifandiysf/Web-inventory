import { ArrowRight2 } from "iconsax-react"
import Header from "../components/Header"


const LandingPage = () => {
  return (
    <>
        <Header/>
        <section className="flex justify-center items-center gap-36 w-full h-dvh">
            <div className="flex flex-col gap-3">
                <h1 className="font-extrabold text-4xl">Inventaris untuk <br/> SMK Prakarya Internasional</h1>
                <p className="font-semibold text-xl">Peminjaman Barang Untuk Komputer</p>
                <span>
                    <button className="flex justify-center items-center font-semibold bg-primary p-2.5 rounded-lg text-body ">Get Started<ArrowRight2 size={24} variant="Bold"/></button>
                </span>
            </div>
            <div>
                <div className="flex justify-center items-center bg-container w-[250px] h-[250px] rounded-lg">logo smk pi</div>
            </div>
        </section>
    </>
  )
}

export default LandingPage