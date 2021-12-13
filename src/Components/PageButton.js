import styled from 'styled-components'

export const Button = styled.button `
margin: 15px;
width: 150px;
height: 45px;
border-radius: 50px;
font-size: inherit;
font-family: inherit;
background-color: #000;
border: 4px solid #ffc107;
color: #fff;
cursor: pointer;
transition-property: color, background-color, border-color;
transition-duration: 0.3s;
font-size: 20px;
box-shadow: 2px 2px 5px  rgba(0,0,0,0.3);
&:hover {
    background-color: #ffc107;
    color: #000;
    border-color: #ffc107;
    box-shadow: 2px 2px 5px  rgba(0,0,0,0.3);

}
&:disabled {
    background: #ccc;
    color: #696969;
    border: none;
    box-shadow: 2px 2px 5px  rgba(0,0,0,0.3);
}
`

