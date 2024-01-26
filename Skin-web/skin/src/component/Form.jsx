import React from 'react';
import './Form.css';

import IMG1 from './assets/background.jpg';

function Form() {
  return (
    <div className='formpage'>
      <div className="upper-half">
        <div className="top">
          <h4>WELCOME TO </h4>
          <h2>CARE</h2>
        </div>
      </div>

      <div className="lower-half">
        <div className="bottom">
        <h4>Join The US Family</h4>
        <p className='metin'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos exercitationem, delectus omnis esse necessitatibus tenetur cumque culpa expedita consectetur distinctio labore harum animi dicta aperiam ipsum facere blanditiis voluptas voluptatum! </p>
        <button>Join Now</button>
        <div className="firstbottom">
          <p>Already have an account   </p>
          <p className='sing'><a>Sing In</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
