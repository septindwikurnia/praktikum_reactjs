import React, { useState } from 'react';
const Cicilan = () => {
    const [nominal, setNom]     = useState(null);
    const [bunga,   setBunga]   = useState(null);
    const [period,  setPeriod]  = useState(null);
    const [pesan,   setPesan]   = useState(null);
    const rumus                 = nominal * bunga/100 * (period - 1)
    const tekan = () => {
      setPesan(rumus);
    };

    return(
        <div className="m-12 text-center h-screen">
            {/* Cicilan Bank */}
            <form className="col-lg-6 offset-lg-3 border border-success" style={{marginTop:'5%'}}>
            <h3 align="center">Cicilan Bank</h3>
            <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Nominal</label>
                <div class="col-sm-10">
                <input type="number" class="form-control" id="" onChange={(e)=>{setNom(e.target.value)}} placeholder="Input Nominal"></input>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Bunga</label>
                <div class="col-sm-10">
                <input type="number" class="form-control" id="" onChange={(e)=>{setBunga(e.target.value)}} placeholder="input Bunga"></input>
                </div>
            </div>
            <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Periode</label>
                <div class="col-sm-10"> 
                <select class="custom-select custom-select-sm" onChange={(e)=>{setPeriod(e.target.value)}}>
                    <option selected>Pilih Periode</option>
                    <option value="1">1 Bulan </option>
                    <option value="2">2 Bulan </option>
                    <option value="3">3 Bulan </option>
                    <option value="4">4 Bulan </option>
                    <option value="5">5 Bulan </option>
                    <option value="6">6 Bulan </option>
                    <option value="7">7 Bulan </option>
                    <option value="8">8 Bulan </option>
                    <option value="9">9 Bulan </option>
                    <option value="10">10 Bulan </option>
                    <option value="11">11 Bulan </option>
                    <option value="12">12 Bulan </option>
                </select>
                </div>
            </div>
            <button type="button" class="btn btn-outline-success btn-lg btn-block" onClick={()=>{tekan()}}>Hitung</button>
            <h2 align="center" style={{marginTop:'5%'}}>Hasil</h2>
            <input class="form-control" style={{marginBottom:'5%'}} type="text" value={pesan} disabled readonly></input>
            </form>
        </div>
    )
}
export default Cicilan