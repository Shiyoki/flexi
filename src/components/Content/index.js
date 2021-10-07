import gif1 from "../../assets/images/gif1.gif"
import img1 from "../../assets/images/img1.jpg"

const Content = () =>{

    return (
        <div className="content-container">
            <div className="content-wrapper">
                <div className="content-left">
                    <div className="card shadow-xl image-full">
                        <figure>
                            <img src={gif1} alt="running-car-gif" className="img-content"></img>
                        </figure>
                        <div className="card-body text-center self-center font-semibold text-lg"> 
                            <p>lLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>
                        </div>
                    </div>
                </div>
                <div className="content-right">
                    <div className="card bordered shadow-xl">
                        <figure>
                            <img src={img1} alt="flexiexporta-banner" className="img-content"></img>
                        </figure>
                        <div className="card-body text-center self-center font-semibold text-lg">
                            <p>lLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Content;