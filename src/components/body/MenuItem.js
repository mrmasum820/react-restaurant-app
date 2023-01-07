import React from 'react'
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'

export const MenuItem = (props) => {
    const { image, name } = props.dish;
    // console.log(props);
    return (
        <div>
            <Card style={{ margin: '10px' }}>
                <CardBody>
                    <CardImg width='100%' src={image} alt={props.dish.name} style={{ opacity: '.5' }} />
                    <CardImgOverlay>
                        <CardTitle
                            style={{ cursor: 'pointer' }}
                            onClick={props.DishSelected}
                        >{name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}
