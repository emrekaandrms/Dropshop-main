import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Product } from "../../app/models/product";

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                    <CardHeader 
                    avatar={
                        <Avatar>
                            {product.name.charAt(0).toUpperCase()}
                        </Avatar>}
                    title={product.name}
                    titleTypographyProps={{
                        sx:{fontWeight:'bold', color: 'secondary.dark'}
                    }}
                    
                        />

                <CardMedia
                    sx={{ height: 140 , backgroundSize:"contain", backgroundColor:"primary.light"}}
                    image={product.pictureUrl}
                    title={product.name}
                    
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" color="secondary">
                        {product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.brand} / {product.type}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Add To Cart</Button>
                    <Button size="small">View</Button>
                </CardActions>
            </Card>
        </>

    )
}