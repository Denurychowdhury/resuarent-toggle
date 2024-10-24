/* eslint-disable react/prop-types */

const About = ({product}) => {
    console.log(product);
    return (
        <div className="bg-red-300 p-4 rounded-xl mt-3">
            <h1 className="text-xl font-bold">{product.short_description}</h1>
        </div>
    );
};

export default About;