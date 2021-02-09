import React, { useState } from 'react';
const Cicilan = () => {
    const [bin,  setBin]   = useState(null);
    const [okt,  setOkt]   = useState(null);
    const [hex,  setHex]   = useState(null);
    const [dec,  setDec]   = useState(null);
    const [pes,  setPes]   = useState('');
    const [ops,  setOps]   = useState('');

    //Function Bos
    const konBin = () => {
        var x = parseInt(bin)
        let decs = parseInt(x, 2),
            hexs = (decs).toString(16),
            octs = (decs).toString(8);
        if      (ops == 'd'){setPes(decs)}
        else if (ops == 'h'){setPes(hexs)}
        else if (ops == 'o'){setPes(octs)}
        else                {setPes('?')}
    };
    const konOkt = () => {
        var x = parseInt(okt)
        let decs = parseInt(x, 8),
            hexs = (decs).toString(16),
            bins = (decs).toString(2);    
        if      (ops == 'd'){setPes(decs)}
        else if (ops == 'h'){setPes(hexs)}
        else if (ops == 'b'){setPes(bins)}
        else                {setPes('?')}
    };
    const konHex = () => {
        var x = String(hex)
        let decs = parseInt(x, 16),
            octs = (decs).toString(8),
            bins = (decs).toString(2); 
        if      (ops == 'd'){setPes(decs)}
        else if (ops == 'o'){setPes(octs)}
        else if (ops == 'b'){setPes(bins)}
        else                {setPes('?')}
    };
    const konDec = () => {
        var x = parseInt(dec)
        let hexs = (x).toString(16),
            octs = (x).toString(8),
            bins = (x).toString(2);
        if      (ops == 'h'){setPes(hexs)}
        else if (ops == 'o'){setPes(octs)}
        else if (ops == 'b'){setPes(bins)}
        else                {setPes('?')}
    };

    return(
        <div className="m-12 text-center h-screen" style={{marginBottom: '10%'}}>
            {/* Konver Desimal  */}
            <form className="col-lg-6 offset-lg-3 border border-secondary" style={{marginTop:'5%', marginBottom:'5%'}}>
            <h3 align="center">Konversi Desimal</h3>
                <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Desimal</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" id="" onChange={(e)=>{setDec(e.target.value)}} placeholder="Masukan input"></input>
                </div>
                </div>
                <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Opsi</label>
                <div class="col-sm-10">
                    <select class="custom-select custom-select-sm" onChange={(e)=>{setOps(e.target.value)}}>
                    <option selected>-</option>
                    <option value="o">Oktal</option>
                    <option value="b">Biner</option>
                    <option value="h">Heksa</option>
                    </select>
                </div>
                </div>
                <button type="button" class="btn btn-outline-secondary btn-lg btn-block" onClick={()=>{konDec()}}>Hitung</button>
                <h2 align="center" style={{marginTop:'5%' }}>Hasil</h2>
                <input class="form-control" style={{marginBottom:'5%'}} type="text" value={pes} disabled readonly></input>
            </form>



            {/* Konversi  BINER*/}
            <form className="col-lg-6 offset-lg-3 border border-info" style={{marginTop:'5%'}}>
            <h3 align="center">Konversi Biner</h3>
                <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Biner</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" id="" onChange={(e)=>{setBin(e.target.value)}} placeholder="Masukan input"></input>
                </div>
                </div>
                <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Opsi</label>
                <div class="col-sm-10">
                    <select class="custom-select custom-select-sm" onChange={(e)=>{setOps(e.target.value)}}>
                    <option selected>-</option>
                    <option value="o">Oktal</option>
                    <option value="h">Heksa</option>
                    <option value="d">Desimal</option>
                    </select>
                </div>
                </div>
                <button type="button" class="btn btn-outline-info btn-lg btn-block" onClick={()=>{konBin()}}>Hitung</button>
                <h2 align="center" style={{marginTop:'5%'}}>Hasil</h2>
                <input class="form-control" style={{marginBottom:'5%'}} type="text" value={pes} disabled readonly></input>
            </form>

            {/* Konversi  OKTAL*/}
            <form className="col-lg-6 offset-lg-3 border border-dark" style={{marginTop:'5%'}}>
            <h3 align="center">Konversi Oktal</h3>
                <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Oktal</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" id="" onChange={(e)=>{setOkt(e.target.value)}} placeholder="Masukan input"></input>
                </div>
                </div>
                <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Opsi</label>
                <div class="col-sm-10">
                    <select class="custom-select custom-select-sm" onChange={(e)=>{setOps(e.target.value)}}>
                    <option selected>-</option>
                    <option value="b">Biner</option>
                    <option value="h">Heksa</option>
                    <option value="d">Desimal</option>
                    </select>
                </div>
                </div>
                <button type="button" class="btn btn-outline-dark btn-lg btn-block" onClick={()=>{konOkt()}}>Hitung</button>
                <h2 align="center" style={{marginTop:'5%'}}>Hasil</h2>
                <input class="form-control" style={{marginBottom:'5%'}} type="text" value={pes} disabled readonly></input>
            </form>

            {/* Konver HEKSA  */}
            <form className="col-lg-6 offset-lg-3 border border-danger" style={{marginTop:'5%'}}>
            <h3 align="center">Konversi Heksa</h3>
                <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Heksa</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="" onChange={(e)=>{setHex(e.target.value)}} placeholder="Masukan input"></input>
                </div>
                </div>
                <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Opsi</label>
                <div class="col-sm-10">
                    <select class="custom-select custom-select-sm" onChange={(e)=>{setOps(e.target.value)}}>
                    <option selected>-</option>
                    <option value="o">Oktal</option>
                    <option value="b">Biner</option>
                    <option value="d">Desimal</option>
                    </select>
                </div>
                </div>
                <button type="button" class="btn btn-outline-danger btn-lg btn-block" onClick={()=>{konHex()}}>Hitung</button>
                <h2 align="center" style={{marginTop:'5%'}}>Hasil</h2>
                <input class="form-control" style={{marginBottom:'5%'}} type="text" value={pes} disabled readonly></input>
            </form>
        </div>
    )
}
export default Cicilan