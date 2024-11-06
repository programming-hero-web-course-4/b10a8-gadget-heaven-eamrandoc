import { useLoaderData } from "react-router-dom";

import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';

import Banner from "../components/Banner";
import { Helmet } from "react-helmet";



const Statistics = () => {
  const data = useLoaderData()
  console.log(data)
  return (

    <div>
       <Helmet>
                <title>Statistics | Gadget Heaven</title>
            </Helmet>
      <div className="bg-bgPrimary pb-16">
        <Banner title={'Statistics'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}>
        </Banner>
      </div>


      <div className="h-[600px]">

        <h2 className="text-center text-2xl font-bold mb-4">Price vs Product</h2>

        <ResponsiveContainer width="100%" height={500}>
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="product_title" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="price" barSize={20} fill="#413ea0" />
            {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" /> */}
            <Scatter dataKey="rating" fill="red" />
          </ComposedChart>
        </ResponsiveContainer>






       

      </div>
    </div>
  );
};

export default Statistics;



