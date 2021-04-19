import {useState} from 'react';
import ButtonComponent from './component/button';
import InputComponent from './component/input';
import ResultComponent from './component/result';
import styled from 'styled-components';

const DivContainer = styled.div`
    width: 300px;
    margin: 10px auto;
    padding : 20px;
    border: 1px solid #ccc;
`;
const GiaiPTBH = () =>{
    const[hsa, setHSA] = useState(0);
    const[hsb, setHSB] = useState(0);
    const[hsc, setHSC] = useState(0);
    const[result, setResult] = useState("");

    const changeInput = (event) =>{
        let nameInput = event.target.name;
        let val = event.target.value; //lay gia tri
        val = (!isNaN(val)) ? parseFloat(val) : 0;//ep ve so thuc
        if(nameInput === 'hsa'){
            setHSA(val);
        }
        if(nameInput === 'hsb'){
            setHSB(val);
        }
        if(nameInput === 'hsc'){
            setHSC(val);
        }
    }

    const Giai =() =>{
        let delta = (hsb*hsb) - (4*hsa*hsc);
        if(delta <0){
            setResult('PT vo nghiem');
        }else if (delta === 0){
            setResult('PT co nghiem khep');
        }else {
            let x1 = (-hsb + Math.sqrt(delta))/(2*hsa);
            let x2 = (-hsb - Math.sqrt(delta))/(2*hsa);
            setResult(`Phuong trinh co 2 nghiem phan biet : x1 = ${x1} va x2 = ${x2}`);
        }
    }
    return(
        <DivContainer>
            <h2>Giai PTBH</h2>
            <InputComponent label="HSA" name="hsa" change={changeInput}></InputComponent>
            <br/>
            <InputComponent label="HSB" name="hsb" change={changeInput}></InputComponent>
            <br/>
            <InputComponent label="HSC" name="hsc" change={changeInput}></InputComponent>
            <br/>
            <ButtonComponent type="button" click={Giai}>Giai</ButtonComponent>
            <ResultComponent result={result}></ResultComponent>
        </DivContainer>
    )
}
export default GiaiPTBH;