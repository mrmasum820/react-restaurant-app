import React from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap'

export const DishDetail = (props) => {
    console.log(props);
    const { image, name, description, price } = props.dish;
    return (
        <div>
            <Card style={{ marginTop: '20px' }}>
                <CardImg top src={image} alt={name} />
                <CardBody style={{ textAlign: 'left' }}>
                    <CardTitle>{name}</CardTitle>
                    <CardText> {description} </CardText>
                    <p>{price}/-</p>
                </CardBody>
            </Card>
        </div>
    )
}
