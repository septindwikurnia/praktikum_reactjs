import React, { useState } from 'react';
const Harga = () => {
    const [nominal, setNom]     = useState(null);
    const [diskon,  setDiskon]  = useState(null);
    const [ppn,     setPpn]     = useState(null);
    const [pesan,   setPesan]   = useState(null);
    const rumus                 = (nominal - (nominal* diskon / 100)) + (nominal * ppn/100);
    const tekan = () => {
      setPesan(rumus);
    };
    
    console.log((nominal * ppn/100));
    return(
        <div className="m-12 text-center h-screen">
        {/* Hitung */}
            <form className="col-lg-6 offset-lg-3 border border-warning" style={{marginTop:'5%'}}>
            <h3 align="center">Hitung Hingga Akhir</h3>
                <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Harga Awal</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" onChange={(e)=>{setNom(e.target.value)}} id="" placeholder="Masukan Harga Awal"></input>
                </div>
                </div>
                <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">PPN</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" onChange={(e)=>{setPpn(e.target.value)}} id="" placeholder="Masukan PPN"></input>
                </div>
                </div>
                <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Diskon</label>
                <div class="col-sm-10"> 
                    <input type="number" class="form-control" onChange={(e)=>{setDiskon(e.target.value)}} id="" placeholder="Masukan Diskon %"></input>
                </div>
                </div>
                <button type="button" class="btn btn-outline-warning btn-lg btn-block" onClick={()=>{tekan()}}>Hitung</button>
                <h2 align="center" style={{marginTop:'5%'}}>Hasil</h2>
                <input class="form-control" style={{marginBottom:'5%'}} type="text" value={pesan} disabled readonly></input>
            </form>
        </div>
    )
}
export default Harga