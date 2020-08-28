import React from 'react';
import '../../styles.css';
import { AiOutlineLeft } from 'react-icons/ai';
export default function BackButton(props) {
  const {hide, callBack} = props;
  if (hide)return null;
  return (
    <label className="font-weight-bold text-white pointer" onClick={callBack}>
      <AiOutlineLeft className="icon-small mr-2" />Regresar
    </label>
  )
};
