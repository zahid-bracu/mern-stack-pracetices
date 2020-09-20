import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const Buttons = (props) => {
    const stye={
        position:"relative",
        left:"40%",
        marginTop:"20px"
    }
    return (
         <div>
             <ButtonGroup style={stye}>   
                <Button onClick={()=>props.clicks("camera")}  color="dark">Camera</Button>
                <Button onClick={()=>props.clicks("laptop")} color="dark">Laptop</Button>
                <Button onClick={()=>props.clicks("android")} color="dark">Android</Button>
            </ButtonGroup>
         </div>
    );
};

export default Buttons;