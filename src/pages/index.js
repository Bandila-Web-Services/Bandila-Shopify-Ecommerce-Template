import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'
import React from 'react'
import { Button } from 'semantic-ui-react'
import { client } from '../../utils/shopify'
import Image from 'next/image'

const Index = ({products}) => {
    //console.log(productData)
    return (
        <Layout>
            <div>
                <h1>Welcome to Next Application</h1>
                <h3>Product List</h3>
                {products.map((item, i) => {
                   return (
                       <>
                    <h3 key={i}>{item.title}</h3>
                   <Image src={item.images[0].src} key={i} width={500} height={500}></Image>    
                   
                   </>
                   )//<Image src={item.image} key={i} width={500} height={500}></Image>
               })}           
            </div>
            <br/>
             <Button class="ui button">Click Here</Button>
        </Layout>        
    );
    
}

export async function getServerSideProps() {
    //const response = await fetch(`https://gorest.co.in/public-api/products`);
    //console.log(response)
    //const result = await response.json();
    const products = await client.product.fetchAll() 
    console.log({products}) 
    return { props: {products: JSON.parse(JSON.stringify(products))} }
}

export default Index;