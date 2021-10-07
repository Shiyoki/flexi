import ws from "../../assets/images/ws.jpg"

const Greetings = () => {

    return (
        <div className="hero-parent">
            <div className="bg-black bg-opacity-70 w-full full p-5 flex flex-col justify-center items-center">
                <div className="bg-white p-5 inline-block">
                    <h1 className="font-bold text-2xl">Gracias, acabamos de recibir tu solicitud</h1>
                </div>
                <h1 className="p-5 mt-8 text-white text-xl font-semibold">Puedes contactarnos a través de:</h1>   
                <img src={ws} alt="WhatsApp-banner" className="mt-5 w-80"></img> 
            </div>
        </div>
    )
};

export default Greetings;