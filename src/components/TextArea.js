import React,{ useState } from 'react'
import PropTypes from 'prop-types'

export default function TextArea(props) {
    const [ text,setText ]=useState('Enter Your Text');

    let convert=()=>{
        let NewText = text.toUpperCase();
        setText(NewText);
    }
    let change=(events)=>{
         setText(events.target.value);
    }
  return (
    <div className='container'>
      <div className="mb-3">
  <h1 className="form-label">{props.title}</h1>
  <textarea className="form-control" id="Body" rows="3" value={text} onChange={change}></textarea>
</div>
<button className='ConverterToUpperCase' onClick={convert}>Convert To Upper Case</button>
    </div>
  )
}
TextArea.propTypes={
    title: PropTypes.string
};
TextArea.defaulProps={
    title: 'Enter Text'
};