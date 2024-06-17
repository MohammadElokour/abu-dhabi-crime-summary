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
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page 0",
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: "Page 1",
    uv: 100,
    pv: 200,
    amt: 300,
  },
  {
    name: "Page 2",
    uv: 200,
    pv: 400,
    amt: 700,
  },
  {
    name: "Page 3",
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: "Page 4",
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "Page 5",
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "Page 7",
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: "Page 8",
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: "Page 9",
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];

const ComplexChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 80,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#9CA3AF" />
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend
          content={
            <div className="flex justify-center items-center gap-2">
              <p className="text-xl text-[#413EA1]">انتشار الجرائم</p>
              <div className="size-4 bg-[#413EA1]" />
            </div>
          }
        />
        <Area type="monotone" dataKey="amt" fill="#FE4241" stroke="#FE1210" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="uv" stroke="#000" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default ComplexChart;
