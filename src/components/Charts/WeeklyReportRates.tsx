import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
} from "recharts";

const data = [
  {
    date: "6/7/24",
    count: 9,
  },
  {
    date: "13/7/24",
    count: 6,
  },
  {
    date: "20/7/24",
    count: 8,
  },
  {
    date: "27/7/24",
    count: 3,
  },
  {
    date: "3/8/24",
    count: 7,
  },
  {
    date: "10/8/24",
    count: 4,
  },
  {
    date: "17/8/24",
    count: 10,
  },
];
const WeeklyReportRates = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={150} height={40} data={data}>
        <CartesianGrid stroke="#9CA3AF" strokeDasharray="4 4" />
        <XAxis dataKey="date" tickCount={data.length} tickLine={false} />
        <YAxis dataKey="count" />
        <Tooltip />
        <Legend
          direction={"rtl"}
          iconSize={0}
          formatter={(name) => (
            <div className="flex items-center gap-2 -mt-6">
              <p className="text-xl">{name}</p>
              <div className="size-4 bg-[#4388BC]" />
            </div>
          )}
        />
        <Bar
          animationDuration={1000}
          dataKey="count"
          name="معدل البلاغات الأسبوعية"
          fill="#4388BC"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default WeeklyReportRates;
