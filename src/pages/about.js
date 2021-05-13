import Layout from '../components/layout';

import {useState, useEffect} from 'react';

const About = () => {

    const [apiInfo, setApiInfo] = useState(0);

    useEffect(async(e) => {
        await fetch('/api/hello')
        .then(promise=>promise.json())
        .then(data=>{
            setApiInfo(data)
        })
        .catch(
            error=>{
                console.log(error)
            }
        )

        document.getElementById("api").innerHTML = apiInfo.name
    })

    return(
        <Layout>
            <div>
                <h1>
                    Second Page
                </h1>
                <p>Application to Demonstrate NextJS Basics</p>
                <div id ="api">
                </div>
            </div>
        </Layout>
    );
}

export default About;