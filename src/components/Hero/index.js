import Form from "../Form";

const Hero = () => {
    return (
        <div className="hero-parent">
            <div className="hero-container">

                <div className="hero-left-content text-center">
                    <h1 className="hero-title font-bold text-2xl text-white uppercase">Compramos tu coche con cargas</h1>
                    <div className="hero-button-container text-center inline-block" data-theme="emerald">
                        <p className="fotn-semibold lg:text-xl">649426863</p>
                        <p className="font-bold text-2xl lg:text-3xl">WhatsApp</p>
                    </div>
                </div>
                <div className="hero-right-content">
                    <Form />
                </div>

            </div>
        </div>
    )
}

export default Hero;