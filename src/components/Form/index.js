import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import swal from "sweetalert"
import { isNumber } from 'lodash';
import { useHistory } from "react-router";


const Form = () => {
    const history = useHistory();

    const alertError =()=>{
        swal({
            title: "Error",
            text: "Datos introducidos incorrectamente",
            icon: "error",
            button: "Aceptar",
            timer: "5000"
        })
    }

    const form = useRef();
    const [result, showResult] = useState(false)

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [brand, setBrand] = useState("")
    const [km, setKm] = useState("")
    const [year, setYear] = useState("")
    const [option, setOption] = useState("")

    const handleNameChange = ({ target: {value} }) => setName(value);
    const handlePhoneChange = ({ target: {value} }) => setPhone(value);
    const handleBrandChange = ({ target: {value} }) => setBrand(value);
    const handleKmChange = ({ target: {value} }) => setKm(value);
    const handleYearChange = ({ target: {value} }) => setYear(value);
    const handleOptionChange = ({target : {value} }) => setOption(value)

    const sendEmail = (e) => {

        if(/([0-9])/.test(name)){
            alertError();
        }

        else if( !(/([0-9])/.test(phone)) || !(/([0-9])/.test(km)) || !(/([0-9])/.test(year)) ) {
            alertError();
        }
        
        else if( (name === "") || (brand === "") || (phone === "") || (km === "") || (year === "") ){
            alertError();
        } 

        else if( (parseInt(km) < 1900) && (parseInt(year) > Date.year) ){
            alertError();
        }

      else{
        emailjs.sendForm("service_xm3t34j","template_22zi2ll", form.current, 'user_xyjmGQwBffOdGd4mFshoM')
          .then((result) => {
              console.log(result.text);
              swal({
                title: "Enviado",
                text: "Mensaje enviado con exito",
                icon: "success",
                button: "Aceptar",
                timer: "5000"
            })
          }, (error) => {
            console.log(error.text);
          });
          showResult(true);
          history.push('/gracias')
      };
      }

    return (
        <div classname="form-container mt-5">
            <form className="card bg-error shadow-lg" ref={form}>
                <fieldset className="card-body p-3">
                    <legend className="form-title">Exportacion de coches</legend>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="Nombre" className="input input-info input-bordered w-full" name="nombre" value={name} onChange={handleNameChange}></input>
                        <input type="text" placeholder="Teléfono" className="input input-info input-bordered w-full" name="telefono" value={phone} onChange={handlePhoneChange}></input>
                    </div>
                    <input type="text" placeholder="Marca y Modelo" className="input input-info input-bordered w-full mb-3" name="modelo" value={brand} onChange={handleBrandChange}></input>
                    <input type="text" placeholder="Año" className="input input-info input-bordered w-full mb-3" name="year" value={year} onChange={handleYearChange}></input>
                    <input type="text" placeholder="Kilómetraje" className="input input-info input-bordered w-full mb-3" name="kilometer" value={km} onChange={handleKmChange}></input>

                    <select className="select select-bordered select-info mb-5" name="state" onChange={handleOptionChange} value={option} onChange={(e) =>{
                                        const selected = e.target.value;
                                        setOption(selected);
                                    }}>
                        <option value="0">Estado</option>
                        <option value="embargado">Embargado</option>
                        <option value="reserva">Reserva de dominio</option>
                        <option value="financiado">Financiado</option>
                        <option value="multas">Multas de tráfico</option>
                        <option value="precintado">Precintado</option>
                        <option value="otros">Otros</option>
                    </select>

                    <div className="flex justify-center">
                        <a type="submit" className="btn bg-black hover:bg-gray-900" value="Enviar" onClick={sendEmail}>Vender ahora</a>
                    </div>
                </fieldset>
            </form>
        </div>
    )
};

export default Form;