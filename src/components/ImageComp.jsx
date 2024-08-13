

import React, { useState } from 'react';
function ImageComp() {
  const [isShow, setIsShow] = useState(true);

  
  const toggle = () => {
    setIsShow(!isShow);
  };

  return (
<>
    <button onClick={toggle}>
        {isShow ? 'Hide' : 'Show'} Image
      </button>

      <hr />

    <img
      src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tsah7c9evnal289z5fig/IMG%20Worlds%20of%20Adventure%20Admission%20Ticket%20in%20Dubai%20-%20Klook.jpg"
      alt="Adventure Ticket"
    />
    </>
  );
}
export default ImageComp;

