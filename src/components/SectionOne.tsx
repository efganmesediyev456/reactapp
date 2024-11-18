import img1 from "../assets/react.svg"
const SectionOne = () => {
    return (
        <section className="h-screen overflow-hidden">
            <div className="flex">
                <div>
                    <p className="text-[9rem] font-bold leading-none">Invest <br />in real estate</p>
                    <div className="flex gap-4">
                        <button className="btn bg-green-500 text-white">Request a call</button>
                        <button className="btn border border-gray-600  font-medium">Request a call</button>
                    </div>

                </div>
                <div className="flex-1 flex gap-4 images">
                    <img className="img" src={img1} alt="" />
                    <img className="img" src={img1} alt="" />
                    <img className="img" src={img1} alt="" />
                    <img className="img" src={img1} alt="" />
                    <img className="img" src={img1} alt="" />
                    <img className="img" src={img1} alt="" />
                </div>
            </div>
        </section>
    )
}

export default SectionOne;