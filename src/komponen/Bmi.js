import React, { useState , useEffect} from 'react';
const Bmi = () => {
    const [tinggi,  setTinggi]  = useState(null);
    const [berat,   setBerat]   = useState(null);
    const [pesan,   setPesan]   = useState('');
    const [bmi,     setBmi]     = useState(null);
    const rumus                 = berat / Math.pow(tinggi, 2);
  
    useEffect(() => {
      if (bmi && bmi <= 18.5) {
        setPesan('Kekurangan berat badan.');
      }
      if (bmi && bmi >= 18.5 && bmi <= 25) {
        setPesan('Berat badan ideal.');
      }
      if (bmi && bmi >= 25 && bmi <= 30) {
        setPesan('Overweight, tapi tidak obesitas.');
      }
      if (bmi && bmi > 30) {
        setPesan('Obesitas.');
      }
    }, [bmi])
  
    const tekan = () => {
      setBmi(rumus);
    };

  return (
    <div className="m-12 text-center h-screen">
        <form className="col-lg-6 offset-lg-3 border border-primary" action="#" style={{marginTop:'5%'}}>
          <h3 align="center">Body Mass Index</h3>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">Berat</label>
              <div class="col-sm-10">
                <input type="number" value={berat} class="form-control" id="" placeholder="Berat Badan Anda (Kilogram)" onChange={(e) => setBerat(e.target.value)}></input>
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">Tinggi</label>
              <div class="col-sm-10">
                <input type="number" value={tinggi} class="form-control" id="" name="tinggi" placeholder="Tinggi Badan Anda (Meter)"  onChange={(e) => setTinggi(e.target.value)}></input>
              </div>
            </div>
            <button type="button" class="btn btn-outline-primary btn-lg btn-block" onClick={() => tekan()}>Hitung</button>
            <h2 align="center" style={{marginTop:'5%'}}>Hasil</h2>
            <input class="form-control" style={{marginBottom:'5%'}} type="text" value={pesan} disabled readonly></input>
        </form>
    </div>
  );
};

export default Bmi;