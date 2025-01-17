import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import AbcIcon from '@mui/icons-material/Abc';

function Home() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProduct(data.products);
      });
  }, []);

  return (
    <>

    <Button variant="contained" endIcon={<AbcIcon size="large"/>} size="large">Text</Button>

    <Box>Container</Box>

      <h1>Home Page</h1>
      {product.map((value, index) => (
        <>
          <div className="card" style={{ width: "200px" }}>
          <Link to={`/single/${value.id}`}>
          <img src={value.images[0]} className="card-img-top" alt="..." />
          </Link>
            
            <div className="card-body">
              <p className="card-text">
               {value.description}
              </p>
            </div>
          </div>
        </>
      ))}
    </>
  );
}

export default Home;
