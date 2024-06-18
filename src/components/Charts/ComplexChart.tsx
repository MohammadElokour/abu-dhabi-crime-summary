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
    name: "قطاع",
    uv: 1,
    pv: 1,
    amt: 1,
  },
  {
    name: "قطاع 1",
    uv: 1,
    pv: 2,
    amt: 3,
  },
  {
    name: "قطاع 2",
    uv: 2,
    pv: 4,
    amt: 7,
  },
  {
    name: "قطاع 3",
    uv: 5,
    pv: 8,
    amt: 14,
  },
  {
    name: "قطاع 4",
    uv: 8,
    pv: 9,
    amt: 15,
  },
  {
    name: "قطاع 5",
    uv: 13,
    pv: 10,
    amt: 9,
  },
  {
    name: "قطاع 7",
    uv: 14,
    pv: 12,
    amt: 12,
  },
  {
    name: "قطاع 8",
    uv: 15,
    pv: 11,
    amt: 11,
  },
  {
    name: "قطاع 9",
    uv: 17,
    pv: 15,
    amt: 17,
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
        <defs>
          <linearGradient id="colors" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#b81822" />
            <stop offset="50%" stopColor="#E61F2B" />
            <stop offset="100%" stopColor="#eb4b55" />
          </linearGradient>
        </defs>
        <Area
          animationBegin={2000}
          animationDuration={1500}
          name="المخدرات"
          type="monotone"
          dataKey="amt"
          fill="url(#colors)"
          stroke="#E61F2B"
          strokeWidth={2}
        />
        <Bar
          animationBegin={1500}
          animationDuration={1500}
          name="السرقة"
          dataKey="pv"
          barSize={20}
          fill="#413ea0"
        />
        <Line
          animationBegin={2500}
          animationDuration={1500}
          name="الاعتداء"
          type="monotone"
          dot={false}
          dataKey="uv"
          stroke="#333"
          strokeWidth={2}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default ComplexChart;
